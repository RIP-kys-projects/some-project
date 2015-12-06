var gulp = require('gulp'),
	rename = require("gulp-rename"),
	prettify = require('gulp-jsbeautifier');

//Переложим HTML в папку pages/
gulp.task('appAssemblyHTML', function(){
	return gulp.src('desktop.bundles/**/*.html')
		.pipe(prettify({indentSize: 2}))
		.pipe(gulp.dest('pages/'))
});

//Переложим CSS в папку pages/merged/
gulp.task('appAssemblyCSS', function(){
	return gulp.src('desktop.bundles/merged/_merged.css')
		.pipe(gulp.dest('pages/merged/'))
});

//Переложим JS в папку pages/merged/
gulp.task('appAssemblyJS', function(){
	return gulp.src('desktop.bundles//merged/_merged.js')
		.pipe(gulp.dest('pages/merged/'))
});


//watch
gulp.task('watch', function(){
	gulp.watch('desktop.bundles/*/.html', ['appAssemblyHTML']);
	gulp.watch('desktop.bundles/*/.css', ['appAssemblyCSS']);
	gulp.watch('desktop.bundles/*/.js', ['appAssemblyJS']);
});

// generate sprite.png and _sprite.styl
gulp.task('sprites', ['appAssemblyCSS'], function () {
	return gulp.src('img/*.png')
		.pipe(sprite({
			name: 'sprite',
			style: '_sprite.styl',
			cssPath: 'pages/merged/_merged.css',
			processor: 'css'
		}))
		.pipe(gulp.dest('img-sprite'))
});

// default
gulp.task('default', ['appAssemblyHTML', 'appAssemblyCSS', 'appAssemblyJS', 'watch']);
//gulp.task('default', ['sprites']);
