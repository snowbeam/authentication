declare module NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "testing";
  }
}
