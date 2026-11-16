
$(document).ready(function(){

    $("#zelena").on("click", function(){
        $("ul").first().addClass("zelena");
    });

    $(".slike img")
    .on("mouseenter", function(){
        $(this).addClass("obrub");
    })
    .on("mouseleave", function(){
        $(this).removeClass("obrub");
    })
    .on("click", function(){
        $(this).hide();
    });

    let skrivene = false;

    $("#abrakadabra").on("click", function(){
        const slike = $(".slike img");
        slike.stop(true,true);

        if(!skrivene){
            slike.eq(0).fadeOut("fast");
            slike.eq(1).fadeOut("slow");
            slike.eq(2).fadeOut(6000);
        } else {
            slike.show().removeClass("obrub");
        }

        skrivene = !skrivene;
    });

});
