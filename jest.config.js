module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['@testing-library/react-native/cleanup-after-each'],
  clearMocks: true,
  transformIgnorePatterns: [],
  setupFiles: [],
  testMatch: ['<rootDir>/**/*.test.tsx'],
  testPathIgnorePatterns: [],
};
