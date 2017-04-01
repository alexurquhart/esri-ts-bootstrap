const gulp = require('gulp');
const ts = require('gulp-typescript');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const Server = require('karma').Server;
const livereload = require('gulp-livereload');
const st = require('st');
const http = require('http');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('ts:debug', () => {
  return tsProject.src().
    pipe(sourcemaps.init()).
    pipe(tsProject()).
    pipe(sourcemaps.write()).
    pipe(gulp.dest('dist/js')).
    pipe(livereload());
});

gulp.task('ts:prod', () => {
  return tsProject.src().
    pipe(tsProject()).
    pipe(uglify()).
    pipe(gulp.dest('dist/js')).
    pipe(livereload());
});

gulp.task('sass:debug', () => {
  return gulp.src('src/css/style.scss').
    pipe(sourcemaps.init()).
    pipe(sass().on('error', sass.logError)).
    pipe(sourcemaps.write()).
    pipe(gulp.dest('dist/css')).
    pipe(livereload());
});

gulp.task('sass:prod', () => {
  return gulp.src('src/css/style.scss').
    pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError)).
    pipe(gulp.dest('dist/css')).
    pipe(livereload());
});

gulp.task('clean', (done) => {
  return del(['dist/**/*']);
});

gulp.task('copy', () => {
  return gulp.src('src/**/*.!(ts|tsx|scss)').
  pipe(gulp.dest('dist/')).
  pipe(livereload());
});

gulp.task('server', (done) => {
  http.createServer(
    st({
      path: `${__dirname}/dist`,
      index: 'index.html',
      cache: false
    })
  ).listen(8080, done);
});

gulp.task('watch', ['server'], () => {
  livereload.listen({
    basePath: `${__dirname}/dist`,
  });
  gulp.watch('src/js/**/*.+(ts|tsx)', ['ts:debug']);
  gulp.watch('src/**/*.scss', ['sass:debug']);
  gulp.watch('src/**/*.!(ts|tsx|scss)', ['copy']);
});

gulp.task('test', (done) => {
  const s = new Server({
    configFile: `${__dirname}/karma.conf.js`
  }, done);
  s.start();
});

gulp.task('default', ['ts:prod', 'sass:prod', 'copy']);
