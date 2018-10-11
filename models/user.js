var Sequelize = require('sequelize');
var db = require('../config/db');

User = db.define('user', {
    nickname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    avatar: {
        type: Sequelize.STRING,
        defaultValue: '/public/img/avatar-default.png'
    },
    bio: {
        type: Sequelize.STRING,
        defaultValue: ''
    },
    gender: {
        type: Sequelize.INTEGER,
        defaultValue: -1
    },
    birthday: {
        type: Sequelize.DATE
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'users'
    })

user = User.sync({ force: false })

exports.addUser = function (nickname, password, email) {
    return User.create({
        nickname: nickname,
        password: password,
        email: email
    })
}

exports.findByName = function(nickname) {
    return User.findOne({
        where: { nickname: nickname } 
    });
};