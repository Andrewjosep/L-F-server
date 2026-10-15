const jsonServer = require('json-server')
const rbServer = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()

const PORT = 4000

rbServer.use(middleware)
rbServer.use(router)

rbServer.listen(PORT,()=>{console.log(`RB-Server started runing at PORT: ${PORT} successfully`)})