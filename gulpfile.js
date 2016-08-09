var gulp = require('gulp'),
    csso = require('gulp-csso'),
    myth = require('gulp-myth'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch');

gulp.task('js', function() {
    gulp.src([
            './assets/js/src/jquery-3.1.0.min.js',
            './assets/js/src/qunit-2.0.1.js',
            './assets/js/src/*.js'
        ])
        .pipe(concat('app.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./assets/js'));
});

gulp.task('css', function() {
    gulp.src(['./assets/css/src/*.css', './assets/css/src/*.scss'])
        .pipe(concat('styles.min.css'))
        .pipe(sass())
        .pipe(myth())
        .pipe(csso())
        // .pipe(watch(['./assets/css/src/*.css', './assets/css/src/*.scss']))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function() {
    gulp.watch('./assets/css/**', function(event) {
        gulp.run('css');
    })
    gulp.watch('./assets/js/**', function(event) {
        gulp.run('js');
    })
});

gulp.task('build', ['js', 'css']);
