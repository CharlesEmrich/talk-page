$(function() {
  $(".btn#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Greetings.</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  })

  $(".btn#goodbye").click(function() {
    $("ul#user").prepend("<li>Bye!</li>");
    $("ul#webpage").prepend("<li>Hasta la vista!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $(".btn#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>All your base are belong to us.</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("*").click(function(event){
    event.stopPropagation();
    $(this).before(
      "<img src=\"img/sparkle.png\" width=\"" + Math.floor(Math.random() * 65) + "px\"/>");
    $("img").click(function() {
      $(this).remove();
    })
  });
});
