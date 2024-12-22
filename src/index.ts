import generateKey from "./generateKey";
import generateKeyOpenSsl from "./generateKeyOpenSsl";
import generateJwtToken from "./generateJwtToken";

const COMMANDS = {
  generateKey: "generate-key",
  generateKeyOpenSsl: "generate-key-openssl",
  generateJwtToken: "generate-jwt-token",
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
    case COMMANDS.generateJwtToken:
      await generateJwtToken();
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
