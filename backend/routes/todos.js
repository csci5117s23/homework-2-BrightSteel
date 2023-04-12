const { Datastore, app } = require("codehooks-js");

async function getTodos(req, res) {
    const conn = await Datastore.open();
    conn.getMany('todos').json(res);
}
// route hook
app.get('/todos', getTodos);

export default app.init();