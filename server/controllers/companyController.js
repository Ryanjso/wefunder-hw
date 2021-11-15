const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const imgHelper = require('../utils/file-to-img');
const getFileType = require('../utils/get-filetype');

// models
const { Company } = require('../models/company');

/**
 * Create new company and return it to frontend
 */
router.post('/newCompany', async (req, res) => {
  const { name, description } = req.body;

  let company = new Company({
    name,
    description,
  });

  company = await company.save();
  res.send(company);
});

/**
 * Converts file to images and adds deck to company
 */
router.patch('/addDeck/:companyId', fileUpload(), async (req, res) => {
  const deck = req.files.deck;
  const { data: buffer, name: fileName } = deck;
  const fileType = getFileType(fileName);

  // convert file to array of image urls
  const images = await imgHelper.convertFileToImages(buffer, fileType);

  // modify company with new deck
  const companyId = req.params.companyId;
  const updatedCompany = await updateCompany(companyId, { deck: images });
  res.send(updatedCompany);
});

/**
 * Modifies company and returns result
 */
router.patch('/modify/:companyId', async (req, res) => {
  const companyId = req.params.companyId;
  const payload = req.body;

  const company = await updateCompany(companyId, payload);
  res.send(company);
});

/**
 * gets all pubished companies
 */
router.get('/getAll', async (req, res) => {
  const companies = await Company.find({ published: true });
  res.send(companies);
});

/**
 * gets a single company by id
 */
router.get('/:companyId', async (req, res) => {
  const companyId = req.params.companyId;
  const company = await Company.findById(companyId);
  res.send(company);
});

/**
 * updates and returns company with changes
 *
 * @param {string} companyId
 * @param {object} fieldsToUpdate - obj containing fields and values to update in company
 * @returns {object} - Company
 */
async function updateCompany(companyId, fieldsToUpdate) {
  return await Company.findByIdAndUpdate(companyId, { $set: fieldsToUpdate }, { new: true });
}

module.exports = router;
