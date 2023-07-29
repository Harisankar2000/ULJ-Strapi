module.exports = {
    routes: [
        { 
            method: 'GET',
            path: '/academies/count/view',
            handler: 'academy.getCount',
        },
        { 
            method: 'PUT',
            path: '/academies/updates/:id',
            handler: 'academy.updateMany',
        },
    ]
}