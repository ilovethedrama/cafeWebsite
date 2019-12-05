"use strict";

const browserSync = require("browser-sync").create(),
    autoPrefixer = require("gulp-autoprefixer"),
    uglifycss = require('gulp-uglifycss'),
    plumber = require("gulp-plumber"),
    nodemon = require("gulp-nodemon"),
    minify = require('gulp-minify'),
    notify = require('gulp-notify'),
    gulp = require("gulp");



    

    const distill = () => {
    return gulp.src('public/CSS/lignumStyleSheet.css')
        .pipe(autoPrefixer())
        .pipe(uglifycss({
            'uglyComments': true
        }))
        .pipe(gulp.dest('public/CSS/dist'))
}

let thePausinator;

const holdIt = (done) => {
    thePausinator = setTimeout(bSync, 3000);
    done();
}

const bSync = () => {
    browserSync.init({
        proxy: 'localhost:3000',
        port: 3003,
        online: true,
        tunnel: true

    });
    // done();
};




const smallerJS = (done) => {
    gulp.src('public/JS/lignumJS.js')
        .pipe(minify())
        .pipe(gulp.dest('public/JS/dist'))
    done();
}

smallerJS.description = "minifies your JS file";



bSync.description = "allows for live browser view of file as changes are made";

var watcher = (done) => {
    gulp.watch("./public/**/*.+(mp4|jpeg|html|css)").on("change", browserSync.reload);
    done();
};
watcher.description = "watches both the html, jpg, mp4 & css files and triggers a browser reload";




const server = function (done) {
    // configure nodemon
    nodemon({
        // the script to run the app
        script: 'server.js',
        // this listens to changes in any of these files/routes and restarts the application
        watch: ["server.js", "./public/**/*.+(mp4|jpeg|html|css)"],
        ext: 'js'
    }).on('restart', () => {
        gulp.src('server.js')
            // I've added notify, which displays a message on restart. Was more for me to test so you can remove this
            .pipe(notify('restarting the server file now'));
    });
    done();
};






/*This starts the server and also browserSync and then watches for 
changes to the scss files and ejs files and updates the browser if
 either one changes and also injects css when scss is ListeningStateChangedEvent. SICCKKK */
gulp.task("default", gulp.parallel(server, holdIt, gulp.parallel(gulp.series(watcher))));

gulp.task('squeezeJS', gulp.series(smallerJS));