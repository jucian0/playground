module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-engrafia`
  extends: ["engrafia"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
