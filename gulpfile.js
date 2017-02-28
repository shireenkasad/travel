'use strict';

var gulp = require('gulp'),

  jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  sass   = require('gulp-sass'),
  maps   = require('gulp-sourcemaps'),
  del    = require('del');

gulp.task('lint', function(){
	return gulp.src('js/main.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('concatScripts', function(){
	return gulp.src('js/*.js')
	.pipe(concat("app.js"))
	.pipe(maps.write("./"))
	.pipe(gulp.dest("js"));
});

gulp.task('minifyScripts', ["concatScripts"], function(){
	return gulp.src('js/app.js')
	.pipe(uglify())
	.pipe(rename("app.min.js"))
	.pipe(gulp.dest("js"));
});

gulp.task('compileSass', function(){
	return gulp.src("scss/application.scss")
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write("./"))
	.pipe(gulp.dest("css"));
});

gulp.task('watchFiles', function(){
	gulp.watch('scss/**/*.scss', ['compileSass'])
	gulp.watch('js/main.js', ['lint', 'concatScripts']);
});

gulp.task('clean', function(){
	del(['dist', 'css/application.css*', 'js/app*.js*'])
});

gulp.task('build', ['lint', 'minifyScripts', 'compileSass'], function(){
	return gulp.src(["css/application.css", "img/**", "js/app.min.js", "*.html"], { base:'./' })
	.pipe(gulp.dest("dist"));
});

gulp.task('serve', ['watchFiles']);

gulp.task('default', ["clean"], function(){
	gulp.start('build');
});