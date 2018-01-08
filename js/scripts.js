const COST_OF_SHIRT = 15;

$(document).ready(function() {
  $("#total").show();

  $("#ticketQuantity").on('change', function() {
    $("#totalTicketQuantity").text(this.value);
  });

  $("select").on('change', function() {
    $("#perTicketCost").text(this.value);
  })

  $(".input-size").change(function(event) {
    var quantityTotal = calculateTotalQuantity();
    var costTotal = calculateTotalCost(quantityTotal);
    $("input#amount").val(costTotal);
    $("#totalCost").text(costTotal);
    $("#totalQuantity").text(quantityTotal);
  });
});

var calculateTotalQuantity = function() {
  count_xs = parseInt($("#XS").val());
  count_s = parseInt($("#S").val());
  count_m = parseInt($("#M").val());
  count_l = parseInt($("#L").val());
  count_xl = parseInt($("#XL").val());
  var countTotal = count_xs + count_s + count_m + count_l + count_xl;
  return countTotal;
}

var calculateTotalCost = function(numberOfShirts) {
  var costTotal = numberOfShirts * COST_OF_SHIRT;
  return costTotal;
}
