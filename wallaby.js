// module.exports = function (wallaby) {
//     return {
//         files: [
//             // 'imports/server/methods/**/!(*.tests).js',
//             // 'tests/stubs/**/!(*.tests).js',
//         ],
//
//         tests: [
//             '*.test.js',
//         ],
//
//         compilers: {
//             '**/*.js': wallaby.compilers.babel()
//         },
//
//         env: {
//             type: 'node'
//         },
//
//         testFramework: 'mocha'
//     }
// };

module.exports = (wallaby) => {
  return {
    debug: true,
    testFramework: 'jest',
    files: [
      {pattern: 'katas/**/*.js', ignore: true},
    ],
    tests: [
      'katas/**/*.js',
    ],
    // compilers: {'**/*.js': wallaby.compilers.babel()},

    setup: () => {

    },
    env: {
      type: 'node'
    },
  }
}