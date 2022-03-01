// function that multiply bpi value by thousand
exports.multiplyNumbers = (data) => {
  for (const key of Object.keys(data.bpi)) {
    data.bpi[key] *= 1000;
    // dealing with precision
    data.bpi[key] = Math.floor(data.bpi[key] * 1000) / 1000;
  }
  return data;
};
