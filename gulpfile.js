var gulp    = require('gulp');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var watch   = require('gulp-watch');
var compass = require('gulp-compass');
var notify  = require('gulp-notify');

gulp.task('js', function () {
    return gulp.src('js/app.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(notify("Javascript contat'd + uglified!"));
});

gulp.task('compass', function() {
  gulp.src('sass/*.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: '',
      sass: 'sass'
    }))
    .pipe(gulp.dest(''))
    .pipe(notify("SASS compass'd and minimized!"));
});

gulp.task('watch', function(){
	gulp.watch('sass/*.scss', ['compass']);
	gulp.watch('js/app.js', ['js']);
});