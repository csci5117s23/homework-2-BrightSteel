import {date, object, string} from 'yup';
import jwtDecode from 'jwt-decode'
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

// copied from kluver's tech-stack-2 demo
// https://github.com/csci5117s23/Tech-Stack-2-Kluver-Demo/blob/main/backend/index.js
const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.replace('Bearer ','');
      // NOTE this doesn't validate, but we don't need it to. codehooks is doing that for us.
      const token_parsed = jwtDecode(token);
      req.user_token = token_parsed;
    }
    next();
  } catch (error) {
    next(error);
  } 
}
app.use(userAuth)

async function postTodo(req, res) {
  if (req.user_token.sub !== undefined && req.user_token !== null) {
  req.body.user_id = req.user_token.sub
  const conn = await Datastore.open();
  const data = await conn.insertOne('todos', req.body);
  res.status(201).json(doc);
  }
  else {
    res.status(400)
  }
}

app.post('/todos', postTodo)

async function getTodo(req, res) {
  const conn = await Datastore.open();
  const data = await conn.getOne('todos', req.params.id)
  res.json(data)
}

async function getTodos(req, res) {

  let id = "none"
  if (req.user_token.sub !== undefined && req.user_token.sub !== null) {
    id = req.user_token.sub
  }
  const options = {
    filter: {
      "user_id": id
    }
  }
  const conn = await Datastore.open();
  await conn.getMany('todos', options).json(res)
}

app.get('/todos', getTodos)
app.get('/todo/:id', getTodo)

const todos = object({
  description: string().required(),
  category: string(),
  user_id: string().required(),
  done: string()
})

async function clear(req, res) {
  const conn = await Datastore.open();
  const data = await conn.removeMany('todos');
  res.json(data);
}

app.post('/clear', clear);

async function markDone(req, res) {
  const conn = await Datastore.open();
  const data = await conn.updateOne('todos', req.params.id, req.body);
  res.json(data);
}

app.post('/done/:id', markDone);

// Use Crudlify to create a REST API for any collection
crudlify(app)

// bind to serverless runtime
export default app.init();
