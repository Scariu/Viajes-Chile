//Toggle (1)
//Card avion
$(document).ready(function () {
  $("#avion").click(function () {
    $("#avion-p").toggle();
  });
});
//Card montaña
$(document).ready(function () {
  $("#mountain").click(function () {
    $("#mountain-p").toggle();
  });
});
//Card camino
$(document).ready(function () {
  $("#camino").click(function () {
    $("#camino-p").toggle();
  });
});

//SlideToggle (2)
//Card 1
$(document).ready(function () {
  $("#img-card-1").click(function () {
    $("#card-body-1").slideToggle("slow");
  });
});
//Card 2
$(document).ready(function () {
  $("#img-card-2").click(function () {
    $("#card-body-2").slideToggle("slow");
  });
});
//Card 3
$(document).ready(function () {
  $("#img-card-3").click(function () {
    $("#card-body-3").slideToggle("slow");
  });
});
//Card 4
$(document).ready(function () {
  $("#img-card-4").click(function () {
    $("#card-body-4").slideToggle("slow");
  });
});

//Animate (3)
//H2 Presentación
$(document).ready(function () {
  $("#h2-quienes-somos").mouseenter(function () {
    $("#h2-quienes-somos").animate({
      fontSize: '50px'
    });
  }).mouseleave(function () {
    $(this).animate({
      fontSize: '30px'
    });
  });
});
//H2 Destacado
$(document).ready(function () {
  $("#h2-destacado").mouseenter(function () {
    $("#h2-destacado").animate({
      fontSize: '50px'
    });
  }).mouseleave(function () {
    $(this).animate({
      fontSize: '30px'
    });
  });
});
//H2 Contacto
$(document).ready(function () {
  $("#h2-contacto").mouseenter(function () {
    $("#h2-contacto").animate({
      fontSize: '50px'
    });
  }).mouseleave(function () {
    $(this).animate({
      fontSize: '30px'
    });
  });
});