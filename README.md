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

## Troubleshooting

### Compiling ArangoDB

If compiling fails, you may have an old gcc version where you want to
specify i686 processor:

```bash
./configure --enable-all-in-one-v8 --enable-all-in-one-libev --enable-all-in-one-icu CFLAGS="-O2 -march=i686" CXXFLAGS="-O2 -march=i686" LDFLAGS="-march=i686"
```
