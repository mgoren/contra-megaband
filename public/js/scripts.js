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
    if (selected === '3325') {
      $("select#colors option[value='charcoal']").remove()
      $("select#colors option[value='gold']").remove()
      $("select#colors").append(new Option("purple", "purple"))
      $("select#colors").append(new Option("teal", "teal"))
    } else if (selected === '5100') {
      $("select#colors option[value='purple']").remove()
      $("select#colors option[value='teal']").remove()
      $("select#colors").append(new Option("charcoal", "charcoal"))
      $("select#colors").append(new Option("gold", "gold"))
    }
  });
});

// var colors_5100 = {"charcoal", "gold", "carolina blue", "lime green"};
// var colors_3325 = {"purple", "teal", "carolina blue", "lime green"};
