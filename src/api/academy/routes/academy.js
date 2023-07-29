module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/academies',
     handler: 'academy.find',
    },
    {
      method: 'GET',
      path: '/academies/:id',
      handler: 'academy.findOne',
     },
     {
      method: 'PUT',
      path: '/academies/:id',
      handler: 'academy.update',
     },
     {
      method: 'POST',
      path: '/academies',
      handler: 'academy.create',
     },
     {
      method: 'DELETE',
      path: '/academies/:id',
      handler: 'academy.delete',
     },
  ],
};
