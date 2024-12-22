import fs from "fs";
import { generateKeyPairSync } from "crypto";

export default async function generateKey() {
  const { publicKey, privateKey } = generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });

  fs.writeFileSync("./data/public.pem", publicKey);
  fs.writeFileSync("./data/private.pem", privateKey);
}
