var gulp = require("gulp");//引入gulpfile.js
var concat = require('gulp-concat');
//均需安装相应插件-合并文件,npm install gulp-concat --save-dev
var uglify = require('gulp-uglify');
//均需安装相应插件-合并并压缩,npm install gulp-uglify --save-dev
var rename = require('gulp-rename');
//均需安装相应插件-合并并且压缩,重新起名字npm install gulp-rename --save-dev
var sass = require('gulp-sass');
//均需安装相应插件-编译sass文件 ,npm install gulp-sass --save-dev
var minfyCSS = require('gulp-minify-css');
//均需安装相应插件-压缩css,npm install gulp-minify-css --save-dev

//复制文件
gulp.task("copy-html",function(){
	gulp.src("reg-etao.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\etao"));
});
gulp.task("copy-html",function(){
	gulp.src("home.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\etao"));
});
gulp.task('copyallfile',function(){
	gulp.src('*/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\etao'));
});
gulp.task('copy-images',function(){
	gulp.src('imgs/*.{jpg,png,tmp,gif}')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\etao\\imgs'));
})

//监听
gulp.task("watchall",function(){
	//监视index.html文件是否有变化，如果有变化，就执行任务：copy-index
	gulp.watch("reg-etao.html",["copy-html"]);
	gulp.watch("reg-etao.php",["copy-php"]);
	// gulp.watch('img/*.{jpg,png,tmp,gif}',["copy-images"]);
});

//合并文件
gulp.task('concat-js',function(){
	gulp.src(['js/tool.js','js/cssTool.js'])
	.pipe(concat('tools.js'))
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\etao\\js'));
});


//压缩文件
gulp.task('uglify-js',function(){
	gulp.src('js/index.js')
	.pipe(uglify())
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\etao'));
});

//合并并压缩
gulp.task('concatanduglify-js',function(){
	gulp.src(['js/index.js','js/goodslist.js'])
	.pipe(concat('commmon.js'))
	.pipe(uglify())
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\web1808\\day34\\js'));
});


//合并并压缩重命名
gulp.task('concatanduglifyandrename-js',function(){
	gulp.src(['js/tool.js','js/cssTool.js'])
	.pipe(concat('commmon.js'))
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\etao\\js'))
	.pipe(uglify())
	.pipe(rename('animate.js'))
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\etao\\js'));
});