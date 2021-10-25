const mongoose = require('mongoose');

const Company = mongoose.model(
  'Company',
  {
    name: String,
    description: String,
    deck: [
      {
        imgUrl: String,
        // altText is not implemented on frontend
        // but is something that would likely be added in future
        altText: String,
      },
    ],
    published: { type: Boolean, default: false },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  'companies'
);

module.exports = { Company };
