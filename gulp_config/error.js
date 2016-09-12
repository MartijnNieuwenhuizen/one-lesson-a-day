const notify = require('gulp-notify');

module.exports = (error) => {
  notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
  })(error);

  this.emit('end');
};
