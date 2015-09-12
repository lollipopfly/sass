var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	sass = require('gulp-sass'),
	autoprefixer = require('autoprefixer'),
	spritesmith = require('gulp.spritesmith'),
	// csswring = require('csswring'),
	merge = require('merge-stream');

// Sass
gulp.task('sass', function() {
	var processors = [
	       // csswring,
	       autoprefixer({ browsers: ['last 20 versions'] }),
	   ];

	return gulp.src('sass/style.scss')
		.pipe(sass())
		.pipe(postcss(processors))
		.pipe(gulp.dest('css/'));
});


// Sprites
gulp.task('sprite', function () {
  var spriteData = gulp.src('images/main/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    padding: 1,
  }));

  var imgStream = spriteData.img
     .pipe(gulp.dest('images/'));

   var cssStream = spriteData.css
     .pipe(gulp.dest('css/'));

   return merge(imgStream, cssStream);
  // return spriteData.pipe(gulp.dest('css/'));
});

// Watch
gulp.task('watch', function() {
	gulp.watch('sass/style.scss', { interval: 500 }, ['sass']);
	gulp.watch('images/main/*.png', { interval: 500 }, ['sprite']);
});

// Default task
gulp.task('default', ['sass', 'sprite', 'watch']);




