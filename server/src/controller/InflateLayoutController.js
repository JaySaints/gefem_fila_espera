const PostModel = require('../model/PostModel')
const fs = require('fs');
const path = require('path');

const getFile = path.join(__dirname, '../data', 'InflateLayout.json');
const fileJson = fs.readFileSync(getFile);
const parseJson = JSON.parse(fileJson)

module.exports = {
    async inflate_layout_get (req, res, next) {        
        res.json(parseJson)
    }
}