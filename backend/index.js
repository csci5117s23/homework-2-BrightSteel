import {date, object, string} from 'yup';
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
*/
import {Datastore, app} from 'codehooks-js'
import {crudlify} from 'codehooks-crudlify'

// test route for https://<PROJECTID>.api.codehooks.io/dev/
app.get('/', (req, res) => {
  res.send('CRUD server ready')
})

const todos = object({
  description: string().required(),
  category: string()
})

async function clear(req, res) {
  const conn = await Datastore.open();
  const data = await conn.removeMany('todos');
  res.json(data);
}

app.post('/clear', clear);

// Use Crudlify to create a REST API for any collection
crudlify(app, {todos: todos})

// bind to serverless runtime
export default app.init();
