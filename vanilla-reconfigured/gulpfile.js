'use strict';

require('rump').autoload().setTaskPrefix('rump').addGulpTasks().configure({
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
