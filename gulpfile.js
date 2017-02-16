var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),//补全浏览器前缀
	sass = require('gulp-sass'),//引入sass模块
	notify = require('gulp-notify'),//提示出现的错误信息
    plumber = require('gulp-plumber');//处理出现异常并不终止watch事件

var ops = {
	devDir : './',// 指定[开发目录]
}

var AUTOPREFIXER_BROWSERS = {//前缀对象
	browsers : [
		'ie >= 7',
		'ff >= 30',
		'chrome >= 24'
	],
	cascade : true,//是否美化属性值
	remove : true,//是否去掉不必要的前缀
};

var watchObj = {//监听对象
	sass : ops.devDir + '/sass/**/*.scss'
};

//===开发scss===//
gulp.task('buildDevSass', function(){//编译sass
	gulp.src(ops.devDir+'/sass/**/*.scss')
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(sass())
		.pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
		.pipe(gulp.dest(ops.devDir+'/css/'));
});

//===开发scss-监听===//
gulp.task('watchSass', function(){//监听
	gulp.watch(watchObj.sass, ['buildDevSass']);
});
