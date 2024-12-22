import fs from "fs";

import jwt from "jsonwebtoken";

import { JWT_PATH, PUBLIC_KEY_PATH } from "./const";

export default async function verifyJwt() {
  const publicKey = fs.readFileSync(PUBLIC_KEY_PATH);

  const token = fs.readFileSync(JWT_PATH).toString();

  try {
    const payload = jwt.verify(token, publicKey, { algorithms: ["RS256"] });
    console.log("🎉 JWT is valid");
    console.log(payload);
  } catch (error) {
    console.error("🚨 JWT is invalid");
    console.error(error);
  }
}
