'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('timespro')
      .service('myService')
      .getWelcomeMessage();
  },
});
