$(window).on('load', function () {
  var reviews = undefined;
    var i = setInterval(function () {
      
      reviews = document.querySelectorAll('.item-reviews');

      reviews.forEach(review => {
        if (review.innerHTML.indexOf(">0 reviews<") !== -1) {
          review.classList.add("hidden");
        }
      });
      
        if ($('.item-reviews span').length) {
            clearInterval(i);
            // safe to execute your code here
        }
    }, 100);
});