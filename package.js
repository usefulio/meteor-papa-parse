Package.describe({
  summary: "Papa Parse - jQuery plugin that parses CSV (delimited text) input and can handle large files by streaming them."
});

Package.on_use(function (api) {
  api.add_files('papaparse.js', ['client']);
});