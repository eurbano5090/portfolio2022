

$("#correo").click(function () {
    alert("correo ha sido enviado");
  });
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  $(document).ready(function () {
    $("#").click(function () {
      var gato = this.hash
      $("html, body").animated(
        {
          scrollTop: $(gato).offset().top
        },
        3000
      )
    })
  })
  $("#mis_servicios").dblclick(function(){
    $(this).css({
        "color": "red" })
  } );
  
    $(window).scroll(function(){
      if($("#menu").offset().top >150){
         $("#menu").addClass("bg-inverse");
      }else{
         $("#menu").removeClass("bg-inverse");
      }
   });
   $("#card-1").click(function(){
    $(p).togle(1000);
   });
   $("#card-2").click(function(){
    $(p).togle(1000);
   });
   $("#card-3").click(function(){
    $(p).togle(1000);
   });
   $("#card-4").click(function(){
    $(p).togle(1000);
   });
   $("#card-5").click(function(){
    $(p).togle(1000);
   });
   $("#card-6").click(function(){
    $(p).togle(1000);
   });