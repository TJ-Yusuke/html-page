const sass = require("gulp-sass");
const { src, dest, watch, parallel, gulp } = require("gulp"),
    browsersync = require('browser-sync').create();

const taskServer = (done) => {
    browsersync.init({
        server: {
            baseDir: 'theme/',
            index: 'index.html'
        },
        port: 2000
    })
    done();
};
const taskReload = (done) => {
    browsersync.reload();
    done();
};

// Wacth
const taskWatch = (done) => {
    watch('./theme/index.html', taskReload);
    done();
}

exports.default = parallel(taskServer, taskWatch);

gulp.task("default", function() {
    // style.scssファイルを取得
    return (
        gulp
            .src(themeDir + '/css/style.scss')
            // Sassのコンパイルを実行
            .pipe(sass())
            // cssフォルダー以下に保存
            .pipe(gulp.dest("css"))
    );
});