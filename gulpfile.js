const gulp = require ('gulp');
const sass = require ('gulp-sass');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');


const config = {
	source: 'src/',
	dist: './public'
};
const paths = {
	html:'**/*.html',
	sass:'assets/scss/**/*.SCSS',
	mainSass: 'assets/scss/main.scss'
};
const sources = {
	assets:config.source + paths.assets,
	html: config.source + paths.html,
	sass: paths.assets + paths.sass,
	rootSass: config.source + paths.mainSass,

};
gulp.task('html-cambios',() => {
	gulp.src(sources.html)
	.pipe(gulp.dest(config.dist));
});

gulp.task('sass',() =>{
console.log(sources.rootSass)
	gulp.src(sources.rootSass)
	.pipe(sass({
		outputStyle:'compresed'
	}).on('error',sass.logError))
	.pipe(gulp.dest(config.dist + '/assets/css'));
});

 gulp.task('js', () =>{
	 gulp.src('src/assets/js/*.js')
	 .pipe(browserify())
	 .pipe(rename('bundle.js'))
	 .pipe(gulp.dest('./public/assets/js'))
 });
