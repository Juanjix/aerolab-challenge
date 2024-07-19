import "@/drizzle/envConfig";
import { defineConfig } from "drizzle-kit";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

// export default defineConfig({
//   schema: "./db/schema.ts",
//   driver: "d1-http",
//   dbCredentials: {
//     accountId: "awd",
//     databaseId: "",
//     token: "",
//   },
//   dialect: "postgresql"
// });
function loadEnvConfig(_projectDir: string) {
  throw new Error("Function not implemented.");
}
