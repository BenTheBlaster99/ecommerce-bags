const multer = require("multer");
const path = require("path");

// seet up storage engine for multer
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // folder where image will be stored
  },
});
const checkFileType = (file, cb) => {
  const fileTypes = /jpeg|jpg|png|mp4|mov|avi|mkv/;
  const extname = fileTypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  const mimeTypes =
    /image\/jpeg|image\/jpg|image\/png|video\/mp4|video\/quicktime|video\/x-msvideo|video\/x-matroska/;
  const mimetype = mimeTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error("file type not allowed"));
  }
};
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});
module.exports = upload;
