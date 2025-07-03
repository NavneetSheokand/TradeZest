module.exports = {
  multipass: true,
  plugins: [
    "preset-default",
    {
      name: "removeAttrs",
      params: {
        attrs: [
          "xmlns",
          "xmlns:xlink",
          "xmlns:v"
        ]
      }
    }
  ]
};
