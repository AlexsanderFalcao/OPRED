const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin'); // Importe o gulp-imagemin

// Tarefa para compilar Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss') // Caminho para seus arquivos .scss
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css')); // Caminho para onde o CSS compilado será salvo
});

// Tarefa para otimizar imagens
gulp.task('images', function() {
    return gulp.src('src/images/*') // Caminho para suas imagens
        .pipe(imagemin()) // Otimiza as imagens
        .pipe(gulp.dest('dist/images')); // Caminho para onde as imagens otimizadas serão salvas
});

// Tarefa para observar mudanças nos arquivos Sass e nas imagens
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass')); // Observa as mudanças nos arquivos .scss
    gulp.watch('src/images/*', gulp.series('images')); // Observa as mudanças nas imagens
});

// Tarefa padrão
gulp.task('default', gulp.series('sass', 'images', 'watch')); // Executa Sass, imagens e watch
