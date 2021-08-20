var index = 0;
var slides = document.querySelectorAll(".slides");


function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
  }
  
  slides[index].style.display= "block";
  
  index++;
  
  setTimeout(changeSlide,6000);
  
}

changeSlide();




var cursor = $(".cursor"),
cursor1 = $(".cursor1"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 20,
                    top: posY - 20
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    $('div').on("mouseover", function(){
        $('.cursor').css('scale(2)');
    });

    $('div').on("mouseleave", function(){  
        $('.cursor').css('scale(1)');
    });


    $(".pro1-flex").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
        cursor1.addClass("active");
    });

    $(".pro1-flex").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
        cursor1.removeClass("active");
    });


    $(".pro2-flex").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
        cursor1.addClass("active");
    });

    $(".pro2-flex").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
        cursor1.removeClass("active");
    });

    $(".pro3-flex").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
        cursor1.addClass("active");
    });

    $(".pro3-flex").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
        cursor1.removeClass("active");
    });























