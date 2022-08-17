var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
// import imagemin from 'gulp-imagemin';
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssMinify = require('gulp-css-minify');
var pug = require('gulp-pug');
var concat = require('gulp-concat');

// print msg
gulp.task('msg',async function(){
    return console.log('This is my first task with Gulp!!!');
});

// Copy Html Files To dist Folder
gulp.task('copyhtml',async function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// Mnify Image
gulp.task('minifyimage', () => 
	gulp.src('src/assets/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/assets/img'))
);

// Copy & Minify Js files To dist Folder
gulp.task('compress-js', () => 
	gulp.src('src/assets/js/*.js')
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		// .pipe(rename('app.min.js'))
		.pipe(gulp.dest('dist/assets/js'))
);

// Compile Sass files to css
// gulp.task('compile-sass',async function(){
// 	gulp.src('src/assets/sass/*.scss')
// 		.pipe(sass().on('error',sass.logError))
// 		.pipe(gulp.dest('dist/assets/css'))
// });


// Mnify Css file
gulp.task('minifycss', () => 
	gulp.src('src/assets/css/*.css')
		.pipe(cssMinify())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('dist/assets/css'))
);


// Compile PUG to HTML
gulp.task('compile-pug', () => 
	gulp.src('src/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('dist/'))
);


// Gulp Watch task v.4*
gulp.task('watch',function(){
	gulp.watch('src/assets/img/*',gulp.series('minifyimage'));
	gulp.watch('src/assets/js/*.js',gulp.series('compress-js'));
	gulp.watch('src/assets/sass/*.scss',gulp.series('compile-sass'));
	gulp.watch('src/assets/css/*.css',gulp.series('minifycss'));
	gulp.watch('src/*.pug',gulp.series('compile-pug'));
});



// DEFAULT TASK gulp v.3*
// gulp.task('default',['msg','minifyimage','compress-js','compile-sass','minifycss','compile-pug']);
// DEFAULT TASK gulp v.4*
gulp.task('default', gulp.parallel('msg','minifyimage','compress-js','minifycss','compile-pug','watch'));

// Gulp Watch task v.3*
// gulp.task('watch',function(){
// 	gulp.watch('src/assets/img/*',['minifyimage']);
// 	gulp.watch('src/assets/js/*.js',['compress-js']);
// 	gulp.watch('src/assets/sass/*.scss',['compile-sass']);
// 	gulp.watch('src/assets/css/*.css',['minifycss']);
// 	gulp.watch('src/*.pug',['compile-pug']);
// });
