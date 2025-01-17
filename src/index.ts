import generateKey from "./generateKey";
import generateKeyOpenSsl from "./generateKeyOpenSsl";
import generateJwt from "./generateJwt";
import verifyJwt from "./verifyJwt";

const COMMANDS = {
  generateKey: "generate-key",
  generateKeyOpenSsl: "generate-key-openssl",
  generateJwt: "generate-jwt",
  verifyJwt: "verify-jwt",
} as const;

async function main() {
  const command = process.argv[2];

  switch (command) {
    case COMMANDS.generateKey:
      await generateKey();
      break;
    case COMMANDS.generateKeyOpenSsl:
      await generateKeyOpenSsl();
      break;
    case COMMANDS.generateJwt:
      await generateJwt();
      break;
    case COMMANDS.verifyJwt:
      await verifyJwt();
      break;
    default:
      console.error(`🚨 Unknown command: ${command}`);
      console.error(`    Available commands: ${Object.values(COMMANDS).map((c) => `"${c}"`).join(", ")}`);
      process.exit(1);
  }
}

main()
  .then(() => {
    console.log("🎉 Done");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
