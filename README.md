# Arango Playground

## ArangoDB

Start ArangoDB:

```bash
./bin/arangod -c etc/relative/arangod.conf --javascript.dev-app-path ~/projects/my_app /tmp/database
```

One-time setup:

```bash
./bin/arangosh -c etc/relative/arangosh.conf
# At Javascript prompt, enter:
# aal = require("org/arangodb/aal");
# aal.installDevApp("wiese", "/")
```


## Coffeescript

Setup:

```bash
coffee --watch --compile wiese/*.coffee
```