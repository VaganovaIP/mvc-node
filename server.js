const express = require('express');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');


const app = express();
const PORT = 8080;

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug'); //подключение шаблонизатора

/* use слои промежуточного ПО - для распределения по слоям
* app.use() используется для монтирования функции промежуточного
* программного обеспечения или монтирования по указанному пути;
* функция промежуточного программного обеспечения выполняется при совпадении базового пути.
* */
app.use('/', authRoutes);
app.use('/', dashboardRoutes);

app.listen(PORT, console.log('Server is running on port: ' + PORT));
