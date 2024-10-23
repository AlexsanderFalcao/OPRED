const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Tarefa para compilar Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss') // Caminho para seus arquivos .scss
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css')); // Caminho para onde o CSS compilado será salvo
});

// Tarefa para observar mudanças nos arquivos Sass
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass')); // Observa as mudanças nos arquivos .scss
});

// Tarefa padrão
gulp.task('default', gulp.series('sass', 'watch'));
