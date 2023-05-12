const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const express = require('express');
const carrouselRouter = express.Router();

carrouselRouter.get('', (req, res) => {
    const bucketParams = {
        Bucket: 'pe-2-static-assets',
        Prefix: 'carrousel/'
    };

    s3.listObjects(bucketParams, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Failed to retrieve carrousel data' });
        } else {
            const carrouselData = data.Contents.map((object) => {
                const objectAddress = `https://${bucketParams.Bucket}.s3.amazonaws.com/${object.Key}`;
                return objectAddress;
            });
            res.json(carrouselData.Contents);
        }
    });
});

module.exports = carrouselRouter;