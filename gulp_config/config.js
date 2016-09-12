module.exports = {
    base: './dist/',
    taskPath: './gulp/tasks/',

    sass: {
        watch: ['src/sass/**/*.scss'],
        src: ['./src/sass/main.scss'],
        folder: 'css/',
        destFile: 'style.min.css'
    },
    js: {
        watch: ['src/js/**/*.js'],
        src: ['./src/js/main.js'],
        folder: 'js/',
        destFile: 'main.min.js'
    },
    images: {
        watch: ['src/img/**'],
        src: ['./src/img/**'],
        folder: 'img/'
    },
    ejs: {
        watch: ['views/*.ejs', 'views/**/*.ejs']
    }
};
