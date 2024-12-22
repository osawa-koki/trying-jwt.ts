import fs from "fs";
import { generateKeyPairSync } from "crypto";

import { PRIVATE_KEY_PATH, PUBLIC_KEY_PATH } from "./const";

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

  fs.writeFileSync(PRIVATE_KEY_PATH, privateKey);
  fs.writeFileSync(PUBLIC_KEY_PATH, publicKey);
}
