

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
  $("#ingredientes").dblclick(function(){
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