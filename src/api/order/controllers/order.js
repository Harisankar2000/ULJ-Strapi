'use strict';
/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async findOne(ctx) {
        //ctx.body = 'Find order one by one!';
        const response = await super.findOne(ctx);
        return response;
    },

    async find(ctx) {
        //ctx.body = 'find order!';
        const { data, meta } = await super.find(ctx);
        return { data, meta };
    },

    async create(ctx) {
        const response = await super.create(ctx);
        return response;
    },

    async update(ctx) {
        const response = await super.update(ctx);
        return response;
    },

    async delete(ctx) {
        const response = await super.delete(ctx)
        return response;
    }


}));
