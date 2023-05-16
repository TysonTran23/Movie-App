//Submit the form and add new tr td and remove button to the table
$("form").on("submit", function (event) {
  console.log("Submitted");
  event.preventDefault();
  let $title = $("#title").val();
  let $rating = $("#rating").val();
  let $removeButton = $('<button id="remove">Remove</button>');
  $(".tbody").append("<tr>");
  $(".tbody tr").append(
    "<td>" + $title + "</td>",
    "<td>" + $rating + "</td>",
    $removeButton
  );
});

//Giving remove button functionality
$(".tbody").on("click", "#remove", function (e) {
  console.log(e.target);
  console.log(this);
  $(this).closest("tr").remove();
});
