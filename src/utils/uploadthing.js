const { generateComponents } = require("@uploadthing/react");
// const { OurFileRouter } = require("~/server/uploadthing");
const {OurFileRouter} =require("../server/uploadthing");
const { UploadButton, UploadDropzone, Uploader } =
  generateComponents(OurFileRouter);

export default UploadButton;