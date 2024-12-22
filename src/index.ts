import generateKey from "./generateKey";

const COMMANDS = {
  generateKey: "generate-key",
  generateToken: "generate-token",
} as const;

async function main() {
  const command = process.argv[2];

  switch (command) {
    case COMMANDS.generateKey:
      await generateKey();
      break;
    case COMMANDS.generateToken:
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
