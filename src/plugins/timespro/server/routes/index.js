module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/find",
    handler: "timespro.find",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/count',
    handler: 'timespro.count',
    config: {
        policies: [],
        auth: false,
    },
},

  {
    method: "POST",
    path: "/create",
    handler: "timespro.create",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "timespro.delete",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "GET",
    path: "/find/:id",
    handler: "timespro.findOne",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "PUT",
    path: "/update/:id",
    handler: "timespro.update",
    config: {
      policies: [],
      auth: false,
    },
  },
];
