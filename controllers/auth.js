//
/*
Контроллер отвечает за генерацию определенного представления путем
извлечения объектов данных из моделей. Контроллеры обычно сопоставляются
с маршрутами/конечными точками через обработчики.
Например, маршрут вернет представление, связавшись с обработчиком
контроллера представления входа . /login login.pug loginView
 */

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

    registerUser: (req, res) => {
        res.redirect('register'); //переадресация
    },

    loginUser: (req,res) => {
        res.redirect('login');
    },

    logoutUser: (req, res) => {
        res.redirect('login');
    }
}