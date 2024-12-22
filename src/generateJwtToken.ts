import fs from "fs";

import jwt from "jsonwebtoken";
import { Algorithm } from "jsonwebtoken";

import { JWT_TOKEN_PATH, PRIVATE_KEY_PATH } from "./const";

export default function generateJwtToken() {
  const privateKey = fs.readFileSync(PRIVATE_KEY_PATH);

  const payload = {
    sub: "123",
    userId: 123,
    username: "exampleUser",
  };

  const options = {
    algorithm: "RS256" as Algorithm,
    expiresIn: "1h",
  };

  const token = jwt.sign(payload, privateKey, options);

  fs.writeFileSync(JWT_TOKEN_PATH, token);
}
