$(document).ready(function() {
  $("#total").show();

  $("#ticketQuantity").on('change', function() {
    $("#totalTicketQuantity").text(this.value);
  });

  $("select#slidingScale").on('change', function() {
    $("#perTicketCost").text(this.value);
  });

  $("select#shirtStyle").on('change', function() {
    var selected = $(this).val();
    if (selected === '3325-women') {
      $("select#colors").empty();
      colors_3325.forEach(function(color) {
        $("select#colors").append(new Option(color, color));
      });
      $("select#size").prepend(new Option('XS','XS'));
    } else if (selected === '5100-unisex') {
      $("select#colors").empty();
      $("select#size option[value='XS']").remove();
      colors_5100.forEach(function(color) {
        $("select#colors").append(new Option(color, color));
      });
    } else if (selected === '6100-long-sleeve') {
      $("select#colors").empty();
      $("select#size option[value='XS']").remove();
      colors_6100.forEach(function(color) {
        $("select#colors").append(new Option(color, color));
      });
    }
  });
});

var colors_5100 = ["charcoal", "gold", "carolina_blue", "lime_green"];
var colors_3325 = ["purple", "teal", "carolina_blue", "lime_green"];
var colors_6100 = ["sand", "charcoal", "lime_green"];
