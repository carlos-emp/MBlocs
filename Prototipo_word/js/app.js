(function(){
  'use strict';
  var todosPAP={};
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert(''+device.uuid);
      }, 100);
    };
  });

  module.factory('$data', function() {
      var data = {};
      
      data.items = todosPAP;
      
      return data;
  });



/*evento de me gusta o no me gusta*/
 module.controller('likeBottom', function($scope, $data, $http) {
  
     if($(".like-conten").text()==="favorite_border")
        {
          $(".like-conten").text("favorite");
          $(".like-conten").parent().find(".like").text("Me gusta");
        }else{
          $(".like-conten").text("favorite_border");
          $(".like-conten").parent().find(".like").text("No me gusta");
        }
});



/*obtengo todos los datos de el php y los muestro en pantalla*/
  module.controller('GetDataDB', function($scope, $data, $http) {
    
    //evento para me gusta o no me gusta
    $scope.no_like = function() {
                like_noLike();
          }


    $scope.share = function(){
          shareItem();
    }

    $scope.fullscreen = function(){
           var target = $('.screen-content')[0];
            if (screenfull.enabled) {
            screenfull.request(target);
        }
    }


    $scope.items = todosPAP;  
    $http.get('http://www.empowerlabs.com/intellibanks/data/Sandbox/AlejandroLuna/Prototipo_word/WebService.php').
  success(function(data, status, headers, config) {
    
    data.forEach(function(element,index,array)
                          {
                            
                              $(".title-content").text(element.Name);
                              $(".description-content").text(element.Description);
                              $("#show-content").attr("src","http://docs.google.com/gview?url="+element.Url+"&embedded=true")
                            

                          });


        



  }).
  error(function(data, status, headers, config) {
    
  });
  });



/*obtengo el evento de enter en los text area*/
 app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                  
                ///ya tengo el comentario
               
                    if(attrs.action==="commit")
                    {
                      eventAddCommit();
                    }else
                    if(attrs.action==="email")
                    {
                          eventAddEmail();
                    }
                

                event.preventDefault();
            }
        });
    };
});








/*evento para agregar correos*/
function eventAddEmail(){
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
}

/*evento para agregar comentarios*/
function eventAddCommit(){
  var commit=$("#commit-content").val().trim();

                       if(commit.length>0)
                        {
                            var inyectHTML='<ul class="list-contact">'+
                                    
                                   '<li><img width="100" src="https://desk-cdn.s3.amazonaws.com/unknown.png"></li>'+
                                    '<li><div><span class="name"> Alejandro Luna ... </span>'+
                                      '<br>'+
                                      '<span class="commit" >'+commit+'</span><div></li>'+
                                    '</ul> ';

                                   
                              $(".inyect-commit").prepend(inyectHTML);
                              $("#commit-content").val("");
                          }
}





/*funcion para like o no like*/
function like_noLike()
{
   if($(".like-conten").text()==="favorite_border")
        {
          $(".like-conten").text("favorite");
          $(".like-conten").parent().find(".like").text("Me gusta");
        }else{
          $(".like-conten").text("favorite_border");
          $(".like-conten").parent().find(".like").text("No me gusta");
        }
 }



 /*funcion para compartir*/
function shareItem()
{
    $(".form-group-email").html("");
    $(".close").click()
 }





 //funcion para validar el correo
    function validateEmail( email ) {
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
        {return false;}
      return true;
    }



})();
