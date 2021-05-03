const casual = require('casual')

let nerds = [
    {
        id: casual.uuid,
        name: casual.name,
        married: casual.boolean
    },

    {
        id: casual.uuid,
        name: casual.name,
        married: casual.boolean
    },

    {
        id: casual.uuid,
        name: casual.name,
        married: casual.boolean
    },
    {
        id: casual.uuid,
        name: casual.name,
        married: casual.boolean
    },
];

module.exports = { nerds };