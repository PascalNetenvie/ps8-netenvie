module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true, // This targets modern browsers and disables class transformation
        },
      },
    ],
  ],
};
