$(document).ready(function () {

    var target = $('.screen-slide')[0]; // Get DOM element from jQuery collection
    //click para poder hacer un fuillscreen
    $('.fullscreen').click(function () {
        console.log("pantalla completa")
        if (screenfull.enabled) {
            screenfull.request(target);
        }

    });



//peticion ajax para mostrar las diapositivas
     $.ajax({
                    url : "http://www.empowerlabs.com/intellibanks/data/Sandbox/AlejandroLuna/Prototipo_word/WebService.php",
                    
                    dataType : "json",
                    type : "GET",
                    success : function(model, data, jqxhr){
                       
                          model.forEach(function(element,index,array)
                          {
                          	
                          		$(".title-slide").text(element.Name);
                          		$(".description-slide").text(element.Description);
                          		$("#show-slide").attr("src","http://docs.google.com/gview?url="+element.word+"&embedded=true")
                          	

                          });
                    },
                    error:function(xhr, status, error){
                     
                    }
                });



     //evento click me gusta slide

     $(".content-like").click(function(){

        if($(".like-Slide").text()==="favorite_border")
        {
          $(".like-Slide").text("favorite");
          $(".like-Slide").parent().find(".like").text("Me gusta");
        }else{
          $(".like-Slide").text("favorite_border");
          $(".like-Slide").parent().find(".like").text("No me gusta");
        }

        

     });


    


    //evento para obtener el enter del comentario
    $("#commit-slide").keypress(function(){

      var key = window.event.keyCode;
          if (key == 13) {
                var commit=$("#commit-slide").val().trim();
                ///ya tengo el comentario
                if(commit.length>0)
                {
                  var inyectHTML='<ul class="list-contact">'+
                          
                         '<li><img width="100" src="https://desk-cdn.s3.amazonaws.com/unknown.png"></li>'+
                          '<li><div><span class="name"> alejandro luna hernandez  </span>'+
                            '<br>'+
                            '<span class="commit" >'+commit+'</span><div></li>'+
                          '</ul> ';

                    $(".inyect-commit").prepend(inyectHTML);
                    $("#commit-slide").val("");
                    return false;
                }
          
          }

    });



//acepta compartir la publicacion
$("#share-slide").click(function(){
  $(".form-group-email").html("");
    $(".close").click()
});
    



    //evento para ingresar los correos
    $("#email-new").keypress(function(){

      var key = window.event.keyCode;
          if (key == 13) {
                var Email_=$("#email-new").val().trim();
                ///ya tengo el comentario
                if(Email_.length>0 && validateEmail(Email_))
                {
                  
                  $(".email-validate").addClass("hide");  
                  $("#email-new").val("");
                  $(".form-group-email").prepend('<span class="tag"><span >'+Email_+'</span> <span class="delete_share_user">x</span></span>');
                  

                  $($(".form-group-email").children()[0]).find(".delete_share_user").click(function(){
                    this.parentNode.remove();
                  })

                }else{
                  $(".email-validate").removeClass("hide");
                  $("#email-new").focus();
                }
          return false;
          }

    });



 //funcion para validar el correo
    function validateEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
        {return false;}
      return true;
    }






});