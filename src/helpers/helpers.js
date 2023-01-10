const message = (msg) => {
  console.log(`\x1b[33m **   ${msg}   ** \x1b[0m`);
};

const messagError = (msg) => {
  console.log(`\x1b[31m **   ${msg}   ** \x1b[0m`);
};

const resApi = (res, msg, data) => {
  // res.send("prueba rest api");
  res.json({
    msg: msg,
    total: data.length,
    data,
  });
};

module.exports = {
  message,
  messagError,
  resApi,
};
