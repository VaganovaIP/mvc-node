
const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'auth', 'postgres', '',
    {
    dialect:'postgres'
});
