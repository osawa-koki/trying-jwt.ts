import fs from "fs";

import jwt from "jsonwebtoken";
import { Algorithm } from "jsonwebtoken";

import { JWT_PATH, PRIVATE_KEY_PATH } from "./const";

export default async function generateJwt() {
  const privateKey = fs.readFileSync(PRIVATE_KEY_PATH);

  const payload = {
    sub: "123",
    userId: 123,
    username: "exampleUser",
  };

  const options: jwt.SignOptions = {
    algorithm: "RS256" as Algorithm,
    expiresIn: "1h",
  };

  const token = jwt.sign(payload, privateKey, options);

  fs.writeFileSync(JWT_PATH, token);
}
