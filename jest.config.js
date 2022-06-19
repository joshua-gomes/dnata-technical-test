/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).[t]s?(x)"],
  moduleNameMapper: {
    "^@libs(.*)$": "<rootDir>/libs/$1",
    "^@helpers(.*)$": "<rootDir>/libs/helpers$1",
  },
};
