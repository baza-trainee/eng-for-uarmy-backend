const { authMiddleware } = require('./authMiddleware');
const upload = require('./uploader');

module.exports = {
    authMiddleware,
    upload
}