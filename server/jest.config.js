/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // For Node.js environment
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore built files
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  collectCoverage: true, // If you want code coverage
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
};
