let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');
// let svgSprite = require("gulp-svg-sprite");
let project_folder=require("path").basename(__dirname);
let source_folder="#src";
let path={
   build:{
      html:project_folder + "/",
      css:project_folder + "/css/",
      js:project_folder + "/js/",
      images:project_folder + "/images/",
      fonts:project_folder + "/fonts/",
   },
   src:{
      html:[source_folder + "/*.html","!"+source_folder + "/_*.html"],
      css:source_folder + "/scss/style.scss",
      js:source_folder + "/js/script.js",
      images:source_folder + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
      fonts:source_folder + "/fonts/*.ttf",
   },
   watch:{
      html:source_folder + "/**/*.html",
      css:source_folder + "/scss/**/*.scss",
      js:source_folder + "/js/**/*.js",
      images:source_folder + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
   },
   clean:"./" + project_folder + "/"
}
let {src,dest}=require('gulp'),
gulp=require('gulp'),
browsersync=require("browser-sync").create(),
fileinclude=require('gulp-file-include'),
del=require("del");
scss=require("gulp-sass"),
autoprefixer=require("gulp-autoprefixer"),
group_media=require("gulp-group-css-media-queries"),
clean_css=require("gulp-clean-css"),
uglify=require("gulp-uglify-es").default,
webp=require('gulp-webp'),
webphtml=require('gulp-webp-html');
// webpcss=require("gulp-webpcss");
function localServer(params){
   browsersync.init({
      server:{
         baseDir:"./" + project_folder + "/"
      },
      port:3002,
      notify:false
   }
   )
}
function html(){
   return src(path.src.html)
   .pipe(fileinclude())
   .pipe(webphtml())
   .pipe(dest(path.build.html))
   .pipe(browsersync.stream())
}
function img(){
   return src(path.src.images)
   .pipe(
      webp({
         quality:70
      })
   )
   .pipe(dest(path.build.images))
   .pipe(src(path.src.images))
   .pipe(
      imagemin({
         progressive:true,
         svgoPlugins:[{removeViewBox:false}],
         interlaced:true,
         optimizationLevel:3
      })
   )
   .pipe(dest(path.build.images))
   .pipe(browsersync.stream())
}
function css(){
   return src(path.src.css)
   .pipe(
      scss({
         outputStyle:"expanded"
      })
   )
   .pipe(
      autoprefixer({
         overrideBrowserslist:["last 5 versions"],
         cascade:true
      })
   )
   .pipe(
      group_media()
   )
   // .pipe(webpcss({
   //    webpClass:'.webp',
   //    noWebpClass:'.no-webp'
   // }))
   .pipe(dest(path.build.css))
   .pipe(
      clean_css()
   )
   .pipe(
      rename({
         extname:".min.css"
      }
      )
   )
   .pipe(dest(path.build.css))
   .pipe(browsersync.stream())
}
function js(){
   return src(path.src.js)
   .pipe(fileinclude())
   .pipe(dest(path.build.js))
   .pipe(
      uglify()
   )
   .pipe(
      rename({
         extname:".min.js"
      }
      )
   )
   .pipe(dest(path.build.js))
   .pipe(browsersync.stream())
}
// gulp.task('svgSprite',function(){
//    return gulp.src([source_folder+'/ikonsprite/*.svg'])
//    .pipe(svgSprite({
//       mode:{
//          stack:{
//             sprite:"../ikons/ikons.svg",
//             example:true
//          }
//       },
//    }
//    ))
//    .pipe(dest(path.build.images))
// })

function watchFiles(params){
   gulp.watch([path.watch.html],html);
   gulp.watch([path.watch.css],css);
   gulp.watch([path.watch.js],js);
   gulp.watch([path.watch.images],img);
}
function clean(params){
   return del(path.clean)
}
let build=gulp.series(clean,gulp.parallel(js,css,html,img));
let watch=gulp.parallel(build,watchFiles,localServer);
exports.img=img;
exports.js=js;
exports.css=css;
exports.html=html;
exports.build=build;
exports.watch=watch;
exports.default=watch;
