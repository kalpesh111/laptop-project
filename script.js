console.log('Can you tell me if i am there ');

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var options = {};
    var instances = M.Sidenav.init(elems, options);

  
  });

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var options = {
      fullWidth: true,
      indicators:true
  
  };
  var instances = M.Carousel.init(elems, options);
});