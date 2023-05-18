const multer = require("multer");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    console.error("Please upload only images.");
  }
};

const upload = multer({ storage: multerStorage, fileFilter: fileFilter });

export const uploadSingle = upload.single("photo");

export const uploadMulti = upload.array("photos", 5);

export const resizeImage = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }

  req.file.filename = `product-${Date.now()}-${Math.round(
    Math.random() * 1000
  )}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`uploads/product/${req.file.filename}`);

  next();
};

export const resizeImages = async (req, res, next) => {
  if (!req.files) {
    next();
    return;
  }

  req.body.files = [];

  for (let i = 0; i < req.files.length; i++) {
    const fileName = `product-${Date.now()}-${Math.round(
      Math.random() * 1000
    )}-${i}.jpeg`;
    req.body.files.push(`product/${fileName}`);
    await sharp(req.files[i].buffer)
      .resize(1000)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(`uploads/product/${fileName}`);
  }

  next();
};
