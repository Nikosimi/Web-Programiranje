let smjesteno = 0;

$(".kvadrat").draggable({
    revert: "invalid"
});

function spusti(boja){
    return function(event, ui){
        $(this).css("background-color", boja);
        ui.draggable.position({
            my: "center",
            at: "center center+12",
            of: this});
        ui.draggable.draggable("disable");
        $(this).droppable("disable");
        smjesteno++;
        if(smjesteno===2){
            $("#poruka").text("Bravo!");
        }
    };
}

$("#spremnikCrno").droppable({
    accept: "#crni",
    classes: {"ui-droppable-hover": "aktivan"},
    drop: spusti("#90EE90")
});

$("#spremnikCrveno").droppable({
    accept: "#crveni",
    classes: {"ui-droppable-hover": "aktivan"},
    drop: spusti("#90EE90")
});