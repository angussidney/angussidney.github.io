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
  var authorname = form.lastname.value + ", " + form.firstname.value.slice(0, 1),
      published = form.published.value,
      url = form.url.value,
      title = form.title.value,
      retrieved = form.retrieved.value;
  
  if (published === "") {
    published = "n.d.";
  }
  
  if (authorname === ", ") {
    var citation = title + ". (" + published + "). Retrieved " + retrieved + " from " + url;
  } else {
    var citation = authorname + ". (" + published + "). " + title + ". Retrieved " + retrieved + " from " + url;
  }
  
  $("#citations").prepend("<p>" + citation + "</p>");
  
  form.lastname.value = "";
  form.firstname.value = "";
  form.published.value = "";
  form.url.value = "";
  form.title.value = "";
  form.retrieved.value = "";
}