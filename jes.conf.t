const ts_preset = require('ts-jest/jest-preset');
const jest-mongodb = require('@shelf/jest-mongodb');
// , {
//     globals: {
//         test_url: `http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 3000}`,
//     },
// }
module.exports = {...ts_preset, ...jest-mongodb}