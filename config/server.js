module.exports = ({ env }) => ({
  host: "localhost",
  port:  1337,
  autoReload:{
    enabled:true
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
});
// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });