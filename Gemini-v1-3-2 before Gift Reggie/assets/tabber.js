(function() {
  var currentDiv = document.querySelector(".tabber");
  var divs = document.querySelectorAll('.tabbertab'); //select the divs array
  var ids = []; //declare array to keep the IDs



  // push the IDs in the array
  divs.forEach(function(x) {
    ids.push(x.children[0].innerHTML.replace(" ", "_"));
    x.id = x.children[0].innerHTML.replace(" ", "_");
    x.children[0].style.display = "none";
  });
  //create elements with hrefs from the #ids


  // create a new UL element
  var newUL = document.createElement("ul");
  newUL.className = "tabs";


  // create LIs with hrefs #IDs
  for (let i = 0; i < ids.length; i++) {
    var newline = document.createElement("li");
    var newA = document.createElement("a");
    newA.setAttribute("href", "#" + ids[i]);
    newA.innerHTML = ids[i].replace("_", " ");
    newline.appendChild(newA);
    newUL.appendChild(newline);
  }

  currentDiv.prepend(newUL);
})();

$(document).ready(function() {
  $('ul.tabs').each(function() {
    var active, content, links = $(this).find('a');
    active = links.first().addClass('active');
    content = $(active.attr('href'));
    links.not(':first').each(function() {
      $($(this).attr('href')).hide();
    });
    $(this).find('a').click(function(e) {
      active.removeClass('active');
      content.hide();
      active = $(this);
      content = $($(this).attr('href'));
      active.addClass('active');
      content.show();
      return false;
    });
  });
});