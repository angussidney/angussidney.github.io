$(document).ready(function () {
  $("#published").datepicker({
    changeYear: true,
    dateFormat: "yy"
  });
  $("#retrieved").datepicker({
    dateFormat: "MM d, yy"
  });
});

function generate(form) {
  var authorname = form.lastname.value + ", " + form.firstname.value.slice(0, 1);
  var published = form.published.value;
  var url = form.url.value;
  var title =form.title.value;
  var retrieved = form.retrieved.value;
  
  if (published === "") {
    published = "n.d.";
  }
  
  if (authorname === " ") {
    citation = title + ". (" + published + "). Retrieved " + retrieved + " from " + url;
  } else {
    citation = authorname + ". (" + published + "). " + title + ". Retrieved " + retrieved + " from " + url;
  }
  
  $("#citations").append("<p>" + citation + "</p>");
}