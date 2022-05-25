const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject("tsconfig.json");
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const exec = require('child_process').exec

gulp.task('build-ts', function () {
    return gulp.src('**/*.ts')
        .pipe(tsProject())
        .js.pipe(gulp.dest("."));
});

gulp.task('tests', ['build-ts'], function () {
    return browserify({
        entries: ['./tests/Program.js'],
        debug: true,
        entry: './tests/Program.js',
        paths: './'
    }).bundle()
        .pipe(source("jtj-tests.js"))
        .pipe(gulp.dest('./tests_out'));
});

gulp.task('minify', function () {
    exec('./minify.sh', function (err, stdout, stderr) {
        console.log(stdout);
        console.error(stderr);
        if (err) {
            console.error(err);
        }
    });
});

gulp.task('join-extension', ['build-ts'], function () {
    return browserify({
        entries: ['./src/PrototypeExtension.js'],
        debug: true,
        entry: './build/PrototypeExtension.js',
        paths: './'
    }).bundle()
        .pipe(source("join-extension.js"))
        .pipe(gulp.dest('./dist'));
});

gulp.task('join-build-dist', [
    'join-extension'
], function () {
    gulp.start('minify');
});

// I set this up in keybindings.json (global). VSCode wouldn't let me set it up as a workspace setting.
gulp.task('gulp-default', ['tests']);
