module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead", // Cible les navigateurs actuels
        useBuiltIns: "entry", // Charge les polyfills nécessaires
        corejs: 3, // Utilise core-js version 3
      },
    ],
  ],
};
