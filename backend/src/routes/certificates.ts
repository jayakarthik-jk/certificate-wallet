import { Router } from "express";
import multer from "multer";
import db from "../database";
import auth from "../middlewares/auth";
import { decryptFile, encryptFile } from "../utils/encryptions";
import generateThumbnail from "../utils/thumbnail";
import { createCertificate } from "../database/certificates";

const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: "./uploads",
    filename(req, file, callback) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      callback(
        null,
        file.fieldname +
          "-" +
          uniqueSuffix +
          "." +
          file.originalname.split(".").pop()
      );
    },
  }),
});

router.get("/", auth, async (req, res) => {
  const user = req.user;
  const certificates = await db.getCertificates(user.id);
  res.status(200).json(certificates);
});

router.get("/:id", auth, async (req, res) => {
  const id = req.params.id;
  const certificate = await db.getCertificate(id);
  if (certificate instanceof Error)
    return res.status(400).json({ error: certificate.message });
  res.status(200).json(certificate);
});

router.post("/:id/important", auth, async (req, res) => {
  const id = req.params.id;
  const updatedCategory = await db.toggleImportant(id);
  if (updatedCategory instanceof Error)
    return res.status(400).json({ error: updatedCategory.message });
  res.status(200).json(updatedCategory);
});

router.get("/:id/download", auth, async (req, res) => {
  const id = req.params.id;
  const certificate = await db.getCertificate(id);
  if (certificate instanceof Error)
    return res.status(400).json({ error: certificate.message });
  const decryptedFile = decryptFile(certificate.url);
  if (!decryptedFile)
    return res.status(500).json({ error: "Error decrypting file" });
  res.download(decryptedFile, (err) => {
    if (err) return res.status(500).json({ error: err.message });
  });
});

router.post("/", auth, upload.single("file"), async (req, res) => {
  const file = req.file;
  const user = req.user;
  if (!file) return res.status(400).json({ error: "File not found" });
  if (!user) return res.status(400).json({ error: "User not found" });

  const thumbnail = await generateThumbnail(file.path);
  if (!thumbnail)
    return res.status(500).json({ error: "Error generating thumbnail" });
  const encryptedFilePath = encryptFile(file.path);

  const { name, isImportant, expiresOn, categoryId } = req.body;

  if (!name || !categoryId)
    return res.status(400).json({ error: "Missing fields" });

  const certificate = await createCertificate({
    name,
    url: encryptedFilePath,
    thumbnail,
    isImportant,
    categoryId,
    expiresOn,
    userId: user.id,
  });
  return res.status(200).json(certificate);
});

export default router;
