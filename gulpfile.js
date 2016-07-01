const kss = require('kss');
const gulp = require('gulp');
const path = require('path');
const less = require('gulp-less');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');

const kssConfig = require('./kss-config.json');

gulp.task('dev:css', function () {
  return gulp.src('./components/initialize.less')
    .pipe(less())
    .pipe(rename('/styleguide.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('dev:styleguide', function () {
    return kss(kssConfig);
});

gulp.task('dev:clean', function() {
	return gulp.src('./dist/styleguide.css')
		.pipe(clean({force: true}));
});

gulp.task('build:css', function () {
  return gulp.src('./components/initialize.less')
    .pipe(less())
    .pipe(cleanCss())
    .pipe(rename('/styleguide.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:clean', function() {
	return gulp.src('./dist/styleguide.min.css')
		.pipe(clean({force: true}));
});

// cleans up all tasks
gulp.task('clean', ['dev:clean', 'build:clean']);

// does all the development tasks
gulp.task('dev', ['dev:css']);

// does all the production tasks
gulp.task('build', ['build:css']);

// builds the styleguide
gulp.task('styleguide', ['dev:css', 'dev:styleguide']);

// default task run when typing in gulp
gulp.task('default', ['styleguide']);