'use strict';
var request = require('request');

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  var reloadPort = 35729, files;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Generate DB, Tables automatically
    shell: {
      options: {
        stdout: true,
        stderr: true,
        failOnError: true
      },
      create_db :{
        command : 'mysql -u root < resources/createDB.sql'
      },
      crete_table : {
        command : 'mysql -u root suji_dev < resources/createTable.sql'
      },
      insert_objects : {
        command : 'mysql -u root suji_dev < resources/insertObjects.sql'
      }
      //drop_db : {
      //  command : 'mysql -u root < resources/dropDB.sql'
      //}
    },

    /////////////////////
    // Added by Tak on 2015-12-24
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: false
        },
        src: ['routes/**/*.spec.js']
      }
    },
    develop: {
      server: {
        file: 'bin/www'
      }
    },
    open: {
      server : {
        url : 'http://localhost:3000'
      }
    },
    watch: {
      options: {
        nospawn: true,
        livereload: reloadPort
      },
      server: {
        files: [
          'bin/www',
          'app.js',
          'routes/**/*.js',
          'views/**/*.ejs'
        ],
        tasks: ['develop', 'delayed-livereload']
      },
      js: {
        files: ['public/js/*.js'],
        options: {
          livereload: reloadPort
        }
      },
      css: {
        files: [
          'public/css/*.css'
        ],
        options: {
          livereload: reloadPort
        }
      },
      views: {
        files: ['views/*.ejs'],
        options: {
          livereload: reloadPort
        }
      }
    }
  });
  grunt.config.requires('watch.server.files');
  files = grunt.config('watch.server.files');
  files = grunt.file.expand(files);

  grunt.registerTask('delayed-livereload', 'Live reload after the node server has restarted.', function () {
    var done = this.async();
    setTimeout(function () {
      request.get('http://localhost:' + reloadPort + '/changed?files=' + files.join(','),  function (err, res) {
        var reloaded = !err && res.statusCode === 200;
        if (reloaded) {
          grunt.log.ok('Delayed live reload successful.');
        } else {
          grunt.log.error('Unable to make a delayed live reload.');
        }
        done(reloaded);
      });
    }, 500);
  });

  grunt.registerTask('default', [
    'develop',
    'watch'
  ]);

  grunt.registerTask('test', [
    'shell',
    'mochaTest'
  ]);

  grunt.registerTask('prepare-db', 'shell');

  grunt.registerTask('serve', [
    'shell',
    'mochaTest',
    'develop',
    'open',
    'watch'
  ]);
};
