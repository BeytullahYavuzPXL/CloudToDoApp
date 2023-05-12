const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const express = require('express');
const carrouselRouter = express.Router();
//const carrouselData = require('./../data/carrousel.json');

carrouselRouter.get('', (req, res) => {
    res.json(carrouselData);
});


module.exports = carrouselRouter;

const bucketParams = {
    Bucket: 'pe-2-static-assets',
  };
  
  s3.listObjects(bucketParams, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Objects in bucket:');
      data.Contents.forEach((object) => {
        console.log(object.Key);
      });
    }
  });