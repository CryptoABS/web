const common = {
  bs64Decode: base64 => Buffer.from(base64, 'base64').toString(),
  clearBox: (elementID) => {
    document.getElementById(elementID).innerHTML = '';
  },
};
export default common;
