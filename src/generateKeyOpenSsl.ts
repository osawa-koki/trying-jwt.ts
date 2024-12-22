import { exec } from "child_process";

import { PRIVATE_KEY_PATH, PUBLIC_KEY_PATH } from "./const";

export default async function generateKeyOpenSsl() {
  const commandGeneratingPrivateKey = `openssl genpkey -algorithm RSA -out ${PRIVATE_KEY_PATH} -pkeyopt rsa_keygen_bits:2048`;
  const commandGeneratingPublicKey = `openssl rsa -pubout -in ${PRIVATE_KEY_PATH} -out ${PUBLIC_KEY_PATH}`;

  await new Promise((resolve, reject) => {
    exec(commandGeneratingPrivateKey, (errorPrivateKey, stdoutPrivateKey, stderrPrivateKey) => {
      if (errorPrivateKey != null) {
        reject(errorPrivateKey);
      }
      console.log(stdoutPrivateKey);
      console.log(stderrPrivateKey);
      exec(commandGeneratingPublicKey, (errorPublicKey, stdoutPublicKey, stderrPublicKey) => {
        if (errorPublicKey != null) {
          reject(errorPublicKey);
        }
        console.log(stdoutPublicKey);
        console.log(stderrPublicKey);
        resolve(stdoutPublicKey);
      });
    });
  });
}
