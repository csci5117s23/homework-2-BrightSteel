// const { Datastore, app } = require("codehooks-js");

// async function getTodos(req, res) {
//     const conn = await Datastore.open();
//     return conn.getMany('todos').json();
// }
// // route hook
// app.get('/todos-get', getTodos);

// async function createTodo(req, res) {
//     const conn = await Datastore.open();
//     const doc = await conn.insertOne('todos', req.body);

//     res.status(201).json(doc);
// }

// app.post('/todos-post', createTodo);

// export default app.init();