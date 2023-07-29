"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.entityService.findMany("plugin::timespro.timespro", query);
  },
  async count(query) {
    return await strapi.entityService.count("plugin::timespro.timespro", query);
  },

  async delete(id) {
    return await strapi.entityService.delete("plugin::timespro.timespro", id);
  },

  async create(data) {
    return await strapi.entityService.create("plugin::timespro.timespro", data);
  },

  async update(id, data) {
    return await strapi.entityService.update("plugin::timespro.timespro", id, data);
  },

  async findOne(id) {
    const result = await strapi.entityService.findOne("plugin::timespro.timespro", id);

    return await strapi.entityService.update("plugin::timespro.timespro", id, {
      data: { isDone: !result.isDone },
    });
  },
});