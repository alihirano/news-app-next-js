module.exports = {
    rootDir: '.',
    displayName: {name: 'Testing Advika Project', color: 'blue'},
    runner: 'jest-runner',
    verbose: true,
    errorOnDeprecated: true,
    roots: ['./Tests'],
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ["<rootDir>Tests/setupTest.js"]
};