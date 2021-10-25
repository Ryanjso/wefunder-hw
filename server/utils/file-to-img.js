const PDFParser = require('pdf2json');
const uploadTos3 = require('./upload-to-s3');
const toPdf = require('office-to-pdf');
const pLimit = require('p-limit');
const gm = require('gm');

/**
 * converts file to images and returns s3 links
 *
 * @param {string} buffer - file buffer (pdf, doc, ppt)
 * @param {string} fileType - type of file
 * @returns {array} - list of s3 image urls
 */
const convertFileToImages = async (buffer, fileType) => {
  // convert file to pdf if it is not
  buffer = await convertToPdf(buffer, fileType);

  const pdfInfo = await getPdfInfo(buffer);
  const pageCount = pdfInfo.Pages.length;

  // convert pdf to base64 png array
  const base64Images = await getBase64(buffer, pageCount);

  // upload images to s3 and get hosted urls
  imageUrls = await uploadTos3(base64Images);

  return imageUrls;
};

/**
 * manage the parallel processing of pdfs to base64
 * @param {Buffer} buffer - pdf buffer
 * @param {Number} pageCount - number of pages in pdf
 * @param {*} maxConcurrent - max number of pages to convert at a time
 * @returns
 */
async function getBase64(buffer, pageCount, maxConcurrent = 3) {
  const pageIndexArray = Array.from(Array(pageCount).keys());

  // How many pages can be converted concurrently
  // 3 seems to be best number to prevent memory leaks
  const limit = pLimit(maxConcurrent);

  // creare array of conversion promises
  const promises = pageIndexArray.map((i) => {
    // wrap the function we are calling in the limit function we defined above
    return limit(() => singlePageConversion(buffer, i));
  });

  return await Promise.all(promises);
}

/**
 * Converts a given page of the pdf to an image
 * @param {Buffer} buffer - pdf buffer to convert to img
 * @param {Number} pageNo - pdf page no to convert
 * @returns {Buffer} - new buffer as an image
 */
async function singlePageConversion(buffer, pageNo) {
  return new Promise(function (resolve, reject) {
    try {
      gm(buffer)
        .selectFrame(pageNo)
        .toBuffer('PNG', function (err, buffer) {
          if (!err) {
            resolve(buffer);
          } else {
            console.log(err);
          }
        });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * convert file to pdf if it isnt already and return it
 *
 * @param {Buffer} buffer - file buffer
 * @param {string} fileType - type of file
 * @returns {Buffer} - pdf buffer
 */
async function convertToPdf(buffer, fileType) {
  if (fileType === 'pdf') {
    return buffer;
  }
  return await toPdf(buffer);
}

/**
 * parses pdf and returns info i.e. page numbers and sizes
 * taken from https://github.com/yakovmeister/pdf2image/issues/88#issuecomment-781409665
 * see github for full documentation
 * @param {Buffer} buffer
 * @returns {Object} - data about the pdf
 */
function getPdfInfo(buffer) {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();
    pdfParser.parseBuffer(buffer);
    pdfParser.on('pdfParser_dataError', (errData) => reject(errData.parserError));
    pdfParser.on('pdfParser_dataReady', (pdfData) => {
      if (
        typeof pdfData.formImage !== 'object' ||
        !('Pages' in pdfData.formImage) ||
        !Array.isArray(pdfData.formImage.Pages)
      )
        return reject('Unable to parse PDF');
      resolve(pdfData.formImage);
    });
  });
}

module.exports = {
  convertFileToImages,
};
