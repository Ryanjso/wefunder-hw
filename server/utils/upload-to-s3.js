require('dotenv').config();
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

// AWS access creds + bucket
const ID = process.env.AWS_ACCESS_ID;
const SECRET = process.env.AWS_ACCESS_SECRET;
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

/**
 * uploads image to s3
 *
 * @param {object} params - s3 + file options
 * @param {string} base64Data - base64 data of an image
 * @returns {object} - contains img url
 */
async function uploadImage(params, base64Data) {
  params.Body = Buffer.from(base64Data, 'base64');
  // generate unique file name
  params.Key = uuidv4() + '.png';

  // upload image to s3 bucket
  return await s3.upload(params).promise();
}

const params = {
  ACL: 'public-read',
  ContentType: 'image/png',
  Bucket: BUCKET_NAME,
};

/**
 * uploads base64 images to AWS s3 and returns img urls
 *
 * @param {Array} base64Images - list of image objects including base64 data
 * @returns {Array} - list of links to images on our s3 bucket
 */
module.exports = async function (base64Images) {
  const images = await Promise.all(base64Images.map(async (image) => uploadImage(params, image)));

  return images.map((img) => ({ imgUrl: img.Location }));
};
