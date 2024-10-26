const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Tarefa para compilar Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Tarefa para otimizar imagens
gulp.task('images', function() {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Tarefa para observar mudanças (apenas para desenvolvimento)
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('src/images/*', gulp.series('images'));
});

// Tarefa padrão para build
gulp.task('default', gulp.series('sass', 'images'));

// Tarefa de desenvolvimento (roda com `gulp dev`)
gulp.task('dev', gulp.series('sass', 'images', 'watch'));