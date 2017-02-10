var gulp          = require('gulp'),
    sass          = require('gulp-sass');
    autoprefixer  = require('autoprefixer'),
    sourcemaps    = require('gulp-sourcemaps'),

    postcss       = require('gulp-postcss'),
    size          = require('postcss-size'),
    pxtorem       = require('postcss-pxtorem'),
    colorFunction = require("postcss-color-function"),
    selectors     = require('postcss-custom-selectors'),

    cssnano       = require('gulp-cssnano'),
    browserSync   = require('browser-sync').create(),

    // Helpers
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),

    // Utils
    plumber       = require('gulp-plumber'),
    gutil         = require('gulp-util'),

    // Sprites
    merge         = require('merge-stream'),
    spritesmith   = require('gulp.spritesmith');


/*------------------------------------*\
	Sass
\*------------------------------------*/

gulp.task('sass', function() {
  var processors = [
    autoprefixer({ browsers: ['last 20 versions'] }),
    selectors,
    size,
    colorFunction,
    // pxtorem({ replace: true })
  ];

  return gulp.src([
      // 'src/styles/_sprite.scss',
      // 'node_modules/slick-carousel/slick/slick.css',
      // 'node_modules/slick-carousel/slick/slick-theme.css',
      'src/styles/app.scss',
  ])
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', function(message){
    gutil.log(gutil.colors.red(message));
    this.emit('end');
  }))
  .pipe(sourcemaps.write())
  .pipe(concat('style.css'))
  .pipe(postcss(processors))
  // .pipe(cssnano({ discardComments: { removeAll: true }}))
  .pipe(gulp.dest('dist/css/'));
});

/*------------------------------------*\
    Uglify
\*------------------------------------*/

gulp.task('scripts', function() {
  return gulp.src([
      'src/js/jquery.js',
      // 'node_modules/slick-carousel/slick/slick.min.js',
      'src/js/common.js'
  ])
  .pipe(plumber())
  .pipe(concat('global.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'));
});

/*------------------------------------*\
	Borwsersync server
\*------------------------------------*/

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: "",
    port: 3000,
  });

  gulp.watch("dist/js/**/*.js").on('change', browserSync.reload);
  gulp.watch("dist/css/style.css").on('change', browserSync.reload);
  gulp.watch("index.html").on('change', browserSync.reload);
});

/*------------------------------------*\
  Sprites
\*------------------------------------*/

gulp.task('sprite', function () {
  var spriteData = gulp.src('public/images/main/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    imgPath: '../../public/images/sprite.png',
    padding: 1,
    cssFormat: 'scss',
    cssOpts: {
      // for remove prefix icon-
      cssSelector: function (sprite) {
        return '.' + sprite.name;
      },
      algorithmOpts: {sort: true}
    }
  }));

  var imgStream = spriteData.img
    .pipe(gulp.dest('public/images/'));

  var cssStream = spriteData.css
    .pipe(gulp.dest('src/styles/'));

  return merge(imgStream, cssStream);
  // return spriteData.pipe(gulp.dest('css/'));
});

/*------------------------------------*\
	Watch
\*------------------------------------*/

gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.scss', ['sass']);
  gulp.watch('src/js/common.js', ['scripts']);
    // gulp.watch('public/images/main/*.png', { interval: 500 }, ['sprite']);
});

/*------------------------------------*\
	Run default gulp tasks
\*------------------------------------*/

gulp.task('default', ['sass', 'scripts', 'watch']);
