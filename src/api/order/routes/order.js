'use strict';
/**
 * order router.
 */
const { createCoreRouter } = require('@strapi/strapi').factories;
module.exports = createCoreRouter('api::order.order', ({ strapi }) =>  ({
    routes: [
      {
        method: 'GET',
        path: '/orders/:id',
        handler: 'order.findOne',
      },
      {
        method: 'GET',
        path: '/orders',
        handler: 'order.find',
      },
      {
        method: 'POST',
        path: '/orders',
        handler: 'order.create',
      },
      {
        method: 'PUT',
        path: '/orders/:id',
        handler: 'order.update',
      },
      {
        method: 'DELETE',
        path: '/orders/:id',
        handler: 'order.delete',
      }
    ]
  }));