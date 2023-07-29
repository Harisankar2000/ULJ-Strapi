module.exports = {
  async find(ctx){
    try {
      const result = await strapi.db.query('api::academy.academy').findMany({
      });
      console.log(result)
      return {data: result };
    } catch (err) {
      ctx.body = err;
    }
  },
  async create(ctx) {
    try {
      const result = await strapi.db.query('api::academy.academy').create({
        data: { name: ctx.request.body.name }
      });
      return result;
    } catch (err) {
      ctx.body = err;
    }
  },
  async findOne(ctx) {
    try {
      const result = await strapi.db.query('api::academy.academy').findOne({
        where: { id: ctx.request.params.id }
      });
      return result;
    } catch (err) {
      ctx.body = err;
    }
  },
  async update(ctx) {
    try {
      const result = await strapi.db.query('api::academy.academy').update({
        where: { id: ctx.request.params.id },
        data: { name: ctx.request.body.name }
      });
      return result;
    } catch (err) {
      ctx.body = err;
    }
  },
  async delete(ctx) {
    try {
      await strapi.db.query('api::academy.academy').delete({
        where: { id: ctx.request.params.id },
      });
      ctx.response.status = 200;
      return { status: 200, message: 'your academy details are deleted...' }
    } catch (err) {
      ctx.body = err;
    }
  },
  async updateMany(ctx) {
    const { id } = ctx.params;
    let entities;
    entities = await strapi.db.query('api::academy.academy').updateMany({
      where: {
        coursefees: 63000,
      },
      data: {
        coursefees: 81000,
      },
    });
    return entities;
  },
  async getCount(ctx) {
    console.log("this is ctx", ctx)
    const { query } = ctx.request
    const result = await strapi.db.query('api::academy.academy').count(query);
    return { result };
  },
}