'use strict';

require('rump').autoload().addGulpTasks({prefix: 'rump'}).configure({
  globs: {
    build: {
      tests: '**/*_spec.js'
    }
  },
  paths: {
    source: {
      root: '',
      static: 'assets',
      tests: 'spec'
    },
    destination: {
      root: 'public'
    }
  }
});
