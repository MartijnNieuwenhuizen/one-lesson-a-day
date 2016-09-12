'use strict';

const gulp         = require('gulp');
const browserSync  = require('browser-sync').create();

const reload       = browserSync.reload;

const $ = require('gulp-load-plugins')();

const { js, sass, base, ejs, images } =  require('./gulp_config/config');

const error = require('./gulp_config/error.js');

// Compress all images
gulp.task('images', () =>
  gulp.src(images.src)
    .pipe($.plumber({
      errorHandler: error
    }))
    .pipe($.imagemin())
    .pipe(gulp.dest(base + images.folder))
);

gulp.task('browserify', () =>
  gulp.src(js.src)
    // .pipe(clean())
    .pipe($.plumber({
      errorHandler: error
    }))
    .pipe($.browserify({
      insertGlobals : false,
    }))
    .pipe($.babel())
    .pipe($.uglify())
    .pipe($.rename(js.destFile))
    .pipe(gulp.dest(base + js.folder))
);

// Compress SASS
gulp.task('sass', () =>
  gulp.src(sass.src)
    // .pipe(clean())
    .pipe($.plumber({
      errorHandler: error
    }))
    .pipe($.sass({outputStyle: 'compressed'}))
    .pipe($.sassGlob())
    .pipe($.autoprefixer({
      browsers: ['> 1%', 'last 2 versions'],
      cascade: false
    }))
    .pipe($.rename(sass.destFile))
    .pipe(gulp.dest(base + sass.folder))
);

// Static server
gulp.task('browser-sync', () => {
  browserSync.init({
    proxy: 'localhost:3000'
  });
});

// Watch task
gulp.task('watch', () => {
  gulp.watch([sass.watch], ['sass', reload]);
  gulp.watch(js.watch, ['browserify', reload]);
  gulp.watch(ejs.watch, reload);
});

// Server task
gulp.task('default', ['sass', 'images', 'browserify', 'browser-sync', 'watch']);
