var gulp          = require('gulp'),
    postcss       = require('gulp-postcss'),
    stylelint     = require('stylelint'),
    stylelintrc   = require('./stylelintrc.config.js'),
    scss          = require('postcss-scss'),
    postcssVars   = require('postcss-simple-vars'),
    postcssImport = require("postcss-import"),
    reporter      = require('postcss-reporter'),
    cssnano       = require('gulp-cssnano'),
    browserSync   = require('browser-sync').create(),
    sass          = require('gulp-sass'),
    size          = require('postcss-size'),
    pxtorem       = require('postcss-pxtorem'),
    colorFunction = require("postcss-color-function"),
    postcssExtend = require('postcss-sass-extend'),
    autoprefixer  = require('autoprefixer'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    selectors     = require('postcss-custom-selectors'),
    spritesmith   = require('gulp.spritesmith'),
    plumber       = require('gulp-plumber'),
    notify        = require("gulp-notify"),
    gutil         = require('gulp-util'),
    merge         = require('merge-stream');

/*------------------------------------*\
	Sass
\*------------------------------------*/

gulp.task('sass', function() {
  var processors = [
    postcssImport(),
    stylelint(stylelintrc),
    postcssVars,
    autoprefixer({ browsers: ['last 20 versions'] }),
    selectors,
    postcssExtend,
    size,
    colorFunction,
    // pxtorem({
    //     replace: true
    // })
    // require('postcss-browser-reporter'),
    reporter({
      clearMessages: true,
    }),
];

  return gulp.src([
      // 'src/styles/_sprite.scss',
      // 'node_modules/slick-carousel/slick/slick.css',
      // 'node_modules/slick-carousel/slick/slick-theme.css',
      'src/styles/app.scss',])
    // .pipe(sass().on('error', function(message){
    //   gutil.log(gutil.colors.red(message));
    //   this.emit('end');
    // }))
    // .pipe(sass({
    //     // outputStyle: 'compressed'
    // }))
    .pipe(postcss(processors))
    // .pipe(cssnano({
    //     discardComments: {
    //         removeAll: true
    //     }
    // }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css/'));
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
  'cssFormat': 'scss',
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
    Uglify
\*------------------------------------*/

gulp.task('compress', function() {
  return gulp.src([
      'src/js/jquery.js',
      // 'node_modules/slick-carousel/slick/slick.min.js',
      'src/js/common.js'])
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
	Watch
\*------------------------------------*/

gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.scss', { interval: 500 }, ['sass', 'notify']);
  gulp.watch('src/js/common.js', { interval: 500 }, ['compress', 'notify']);
    // gulp.watch('public/images/main/*.png', { interval: 500 }, ['sprite']);
});

/*------------------------------------*\
	Notify
\*------------------------------------*/

gulp.task('notify', function(a) {
  var date = new Date();
  gulp.src("public/css/style.css")
  .pipe(notify("Css was compiled! at " + date));
});

/*------------------------------------*\
	Run default gulp tasks
\*------------------------------------*/

gulp.task('default', ['sass', 'compress', 'watch']);
