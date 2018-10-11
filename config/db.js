var Sequelize = require('sequelize')

var dbconfig = {
    dbname: 'expressblog',
    uname: 'root',
    upwd: '',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
}

module.exports = new Sequelize(dbconfig.dbname, dbconfig.uname, dbconfig.upwd, {
    host: dbconfig.host,
    dialect: dbconfig.dialect,
    pool: dbconfig.pool,
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    timezone: '+08:00'
})


