$(document).ready(function() {
  $("#total").show();

  $("#ticketQuantity").on('change', function() {
    $("#totalTicketQuantity").text(this.value);
  });

  $("select").on('change', function() {
    $("#perTicketCost").text(this.value);
  });
});
