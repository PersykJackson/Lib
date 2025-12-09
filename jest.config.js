const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: tsJestTransformCfg,
  testMatch: ["<rootDir>/tests/*.test.(ts|tsx)"],
  rootDir: "./src",
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/**/*.{ts,tsx}",
  ],
  coverageDirectory: "../.coverage",
};
