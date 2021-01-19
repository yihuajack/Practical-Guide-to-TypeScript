// React also depends on requestAnimationFrame (even in test environments).
// You can use the raf package to shim requestAnimationFrame:
require('raf/polyfill')

// mock fetch
global.fetch = require('jest-fetch-mock')

const adapter = require('enzyme-adapter-react-16')
require('enzyme').configure({ adapter: new Adapter() });