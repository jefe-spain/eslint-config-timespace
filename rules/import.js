// These rules relate to ES2015 import/export syntax, and generally . @eslint-plugin-import

const rules = {
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
};

module.exports = rules;
