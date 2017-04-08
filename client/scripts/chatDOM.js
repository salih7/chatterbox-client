$(document).ready(() => {
  app.init();

  $('.chatSubmit').on('click', () => {
    // do some stuff.
    app.post();
  });

});