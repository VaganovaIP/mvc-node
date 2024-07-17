

//
/*
Контроллер отвечает за генерацию определенного представления путем
извлечения объектов данных из моделей. Контроллеры обычно сопоставляются
с маршрутами/конечными точками через обработчики.
Например, маршрут вернет представление, связавшись с обработчиком
контроллера представления входа . /login login.pug loginView
 */

const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

/*
module.exports. Это часть системы модулей Node.js, которая позволяет разделять код
на отдельные файлы и затем импортировать и использовать этот код в других файлах.
 */

module.exports = {
    registerView: (req, res) => {
        res.render('register');
    },

    loginView: (req,res) => {
        res.render('login');
    },

    registerUser: async (req, res) => {
        const { name, email, password } = req.body;
        if(!name || !email || !password) {
            return res.render('register', { error: 'Please fill all fields' });
        }

        if(await User.findOne({where: {email}})) {
            return res.render('register', { error: 'A user account already exists with this email' });
        }

        await User.create({name, email, password: bcrypt.hashSync(password, 8)});

        res.redirect('login?registrationdone');
    },

    loginUser: (req,res) => {
        passport.authenticate('local', {
            successRedirect: '/?loginsuccess',
            failureRedirect:'/login?error'
        })(req, res);
    },

    logoutUser: (req, res) => {
        req.logout(() => res.redirect('/login?loggedout'));
    }
}