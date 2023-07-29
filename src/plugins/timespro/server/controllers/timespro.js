"use strict";
module.exports = {
  async find(ctx) {
    try {
      return await strapi.plugin("timespro").service("timespro").find(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async count(ctx) {
    try{
    ctx.body = await strapi.plugin('timespro').service('timespro').count();
    }catch(err){
        ctx.throw(500,err)
    }
},
  async delete(ctx) {
    try {
      ctx.body = await strapi.plugin("timespro").service("timespro").delete(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async create(ctx) {
    try {
      ctx.body = await strapi.plugin("timespro").service("timespro").create(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async update(ctx) {
    try {
      ctx.body = await strapi.plugin("timespro").service("timespro").update(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async findOne(ctx) {
    try {
      ctx.body = await strapi.plugin("timespro").service("timespro").findOne(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};