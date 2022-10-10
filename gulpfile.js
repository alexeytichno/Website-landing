// const { src, dest, watch} = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const browserSync = require('browser-sync').create();
// const gulpStylelint = require('npm install stylelint gulp-stylelint --save-dev');

// function style() {
//     return src('./css/**/*.scss')
//         .pipe(gulpStylelint({
//             reporters: [
//                 {
//                     formatter: 'string',
//                     console: true
//                 }
//             ]
//         }))
//         .pipe(sass().on('error', sass.logError))
//         .pipe(dest('./css/'))
//         .pipe(browserSync.stream());
// }

// function watcher() {
//     browserSync.init({
//         server: {
//             baseDir: './'
//         }
//     });
//     watch('./css/**/*.scss', style);
//     watch('./*.html').on('change', browserSync.reload);
//     watch('./js/**/*.js').on('change', browserSync.reload)
// }

// exports.style = style;
// exports.watch = watch;

const { on } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./css/**/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('./css'))
           .pipe(browserSync.stream())

}

function watch() {
    browserSync.init({
        server: {
            baseDit: './'
        }
    })
     gulp.watch('./css/**/*.scss', style)
     gulp.watch('./*.html').on('change', browserSync.reload)

}

exports.style = style;
exports.watch = watch;
