var gulp = require('gulp'),
    csso = require('gulp-csso'),
    myth = require('gulp-myth'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch'),
    eslint = require('gulp-eslint');

gulp.task('js', function() {
    gulp.src([
            './assets/js/libs/jquery-3.1.0.min.js',
            './assets/js/libs/qunit-2.0.1.js',
            './assets/js/src/*.js',
        ])
        .pipe(concat('app.js'))
        // .pipe(babel())
        // .pipe(uglify())
        .pipe(gulp.dest('./assets/js'));
});

gulp.task('lint', function() {
    gulp.src([
            './assets/js/src/*.js',
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
});

// gulp.task('libs', function() {
//     gulp.src([
//             './assets/js/libs/jquery-3.1.0.min.js',
//             './assets/js/libs/qunit-2.0.1.js',
//         ])
//         .pipe(concat('libs.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./assets/js'));
// });

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
