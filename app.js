// const express = require('express');
// const app = express();

// // Проміжне ПЗ
// app.use((req, res, next) => {
//   console.log('Наше проміжне ПЗ');
//   next();
// });

// // '/home' або '/'  -  взагалі маршрут може бути будь-який
// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });

// app.get('/home', (req, res) => {
//   res.send('<h1>Home page</h1>');
// });

// // Передача параметра в URL
// app.get('/contact/:id', (req, res) => {
//   res.send(`<h1>Contact</h1> <p>Параметри: ${req.params.id}</p>`);
// });

// // використання параметрів GET запиту  - НЕ РАБОТАЕТ
// app.get('/contacts?skip=0&limit=10', (req, res) => {
//   console.log(req);
//   res.send(`<p>використання параметрів GET запиту: ${req.query}</p>`);
// });

// // cимвол + вказує, що попередній символ може зустрічатися 1 і більше разів (приклад, contact, conntact, connntact)
// app.get('/con+tact', (req, res) => {
//   res.send('<h1>Contact page</h1>');
// });

// // cимвол ? у маршруті вказує, що попередній символ може зустрічатися 1 раз або відсутній (приклад, tasks, tass)
// app.get('/task?s', (req, res) => {
//   res.send('<h1>Tasks page</h1>');
// });

// // cимвол зірочка * вказує, що на місці цього символу може бути будь-яка кількість символів (приклад, pryce, pr345ce, prece)
// app.get('/pri*ce', (req, res) => {
//   res.send('<h1>Price page</h1>');
// });

// app.listen(8081, () => {
//   console.log('Port 8081!');
// });

// =========================роутинг для додатку===============================
// приклад з конспекту - не пряцює
const myRouter = require('./myRouter');

app.use('/my-router', myRouter);

app.all('/anything', (req, res, next) => {
  console.log('Anything method.');
  next();
});

app.listen(8081, () => {
  console.log('Port 8081!');
});
