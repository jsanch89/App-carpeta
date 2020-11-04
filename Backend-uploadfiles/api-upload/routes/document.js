const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const fetch = require('node-fetch');
const Document = require("../model/document");

router.post("/uploadDocument", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    let document = new Document({
      cedula: req.body.cedula,
      documentTitle: req.body.name,
      documentURL: result.secure_url,
      cloudinary_id: result.public_id,
    });
    await document.save();
    res.status(200).send(`El documento ha sido cargado exitosamente.`);
  } catch (err) {
    console.log(err);
    res.status(501).send(`El documento no pudo ser cargado.`);
  }
});

router.get("/authenticateDocument/:documentTitle", async (req, res) => {
  var document = await Document.find({documentTitle: req.params.documentTitle});
  try{
    const cedulaDocument = document[0].cedula;
    const documentTitle = document[0].documentTitle;
    const UrlDocument = encodeURIComponent(document[0].documentURL);
    fetch(`http://govCarpetaApp.mybluemix.net/apis/authenticateDocument/${cedulaDocument}/${UrlDocument}/${documentTitle}`)
      .then(res => res.json())
      .then(json => res.status(200).send(json));
  } catch(err){
    res.status(501).send(`El documento no pudo ser autenticado.`);
  }
});

router.get("/retrieveDocuments/:cedula", async (req, res) => {
  try {
    var document = await Document.find({cedula: req.params.cedula});
    res.json(document);
  } catch (err) {
    res.status(501).send(`No se encontraron documentos.`);
  }
});

module.exports = router;
