Package.describe({
  summary: "Smart publications with joins and multiple cursors from the same collection"
});

Package.on_use(function (api, where) {
  api.add_files('smart-publish.js', ['server']);
});

Package.on_test(function (api) {
  api.use('smart-publish');
  api.use('tinytest');
  api.use('insecure');

  api.add_files('tests/several-cursors.js', ['server', 'client']);
  api.add_files('tests/basic-joins.js', ['server', 'client']);
});
