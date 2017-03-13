var gulp = require( 'gulp' );
var connect = require( 'gulp-connect' );
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate')
var files = [ '*.*', 'pages/**/**'];

gulp.task( 'files', function() {
  gulp.src( files ).pipe( connect.reload() );
});

gulp.task('minify', function() {
  gulp.src(['./app.js',
       'pages/**/*.module.js',
       'pages/**/*.service.js',
       'pages/**/*.factory.js',
       'pages/**/*.directive.js',
       'pages/**/*.controller.js',
       'pages/**/*.js'])
    .pipe(concat('app.min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('./'))
});

gulp.task( 'watch', function() {
  gulp.watch( files, ['files']);
  gulp.watch( ['./app.js', 'pages/**/*.js'], ['minify'])
});

gulp.task( 'connect', function() {
  connect.server({
  	livereload: true,
    port: '8443',
    host: 'localhost',
    directoryListing: false,
    fallback: 'index.html',
    open: true,
  });
});



gulp.task( 'serve', [ 'connect', 'minify', 'watch' ]);
gulp.task( 'default', ['minify']);
