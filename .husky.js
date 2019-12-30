// Configuration for git hook tool -- husky
module.exports = {
  'hooks': {
      //lint-stage: to lint the file you have changed when you stage it, the config file is lint-staged.config.js
      'pre-commit': tasks([
          "echo \"this should fail\" && exit 1",
          'lint-staged'
      ])
  }
}
