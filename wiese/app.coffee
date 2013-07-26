Foxx = require("org/arangodb/foxx")

app = new Foxx.Application()

app.get "/wiese", (req, res) ->
  res.set("Content-Type", "text/plain")
  res.body = "It Worked in CoffeeScript!"

app.start(applicationContext)