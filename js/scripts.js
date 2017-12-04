$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var groceries = ["1", "2", "3", "4", "5"];
    var sortGroceries = [];

    groceries.forEach(function(grocery){
      var temp = $("#input" + grocery).val();
      sortGroceries.push(temp);
    });
    sortGroceries.sort();
    sortGroceries.forEach(function(sortGrocery){
      $(".result").append("<li>" + sortGrocery.toUpperCase() + "</li>");
    });
    $("#formOne").hide();
  });
});
