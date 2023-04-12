import {date, object, string} from 'yup';
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
*/
import {app} from 'codehooks-js'
import {crudlify} from 'codehooks-crudlify'

// test route for https://<PROJECTID>.api.codehooks.io/dev/
app.get('/', (req, res) => {
  res.send('CRUD server ready')
})

const todos = object({
  name: string().required(),
  category: string(),
  description: string().required()
})

// Use Crudlify to create a REST API for any collection
crudlify(app, {todos: todos})

// bind to serverless runtime
export default app.init();
