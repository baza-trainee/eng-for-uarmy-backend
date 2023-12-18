const multer = require('multer');
const path = require('path')

// const tempDir = path.join(__dirname, '../', 'temp')
const destination = path.resolve("temp");

const multerConfig = multer.diskStorage({
    destination,
    // destination: tempDir,
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname )
    }
})

const upload = multer({
    storage: multerConfig
})

module.exports = upload;