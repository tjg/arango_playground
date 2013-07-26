// ./bin/arangod -c etc/relative/arangod.conf --javascript.dev-app-path ~/projects/my_app /tmp/database

// ./bin/arangosh -c etc/relative/arangosh.conf 
// aal = require("org/arangodb/aal");
// aal.installDevApp("wiese", "/")



Foxx = require("org/arangodb/foxx");

app = new Foxx.Application();

app.get("/wiese", function(req, res) {
  res.set("Content-Type", "text/plain");
  res.body = "It Worked!"
});

app.start(applicationContext);
