//for tiles
//for carousel

function forLeftImage(){
    var image1 = document.getElementById("cbi1");
    var im1sr = image1.src;
    var cimage2 = document.getElementById("ccbi2");
    var image2 = document.getElementById("cbi2");
    var im2sr = image2.src;
    var image3 = document.getElementById("cbi3");
    var im3sr = image3.src;

    image1.src = im2sr;
    cimage2.style.backgroundImage = 'url(' +im3sr+ ')';
    image2.src = im3sr;
    image3.src = im1sr;

}

function forRightImage(){
    var image1 = document.getElementById("cbi1");
    var im1sr = image1.src;
    var cimage2 = document.getElementById("ccbi2");
    var image2 = document.getElementById("cbi2");
    var im2sr = image2.src;
    var image3 = document.getElementById("cbi3");
    var im3sr = image3.src;

    image1.src = im3sr;
    cimage2.style.backgroundImage = 'url(' +im1sr+ ')';
    image2.src = im1sr;
    image3.src = im2sr;
   
}



//for songs list
//queue
//queue drop-down

function dropmenu(){
    var drplst = document.getElementById("dropdown-list");
    var drplstval = drplst.style.display;
    var drpsign = document.getElementById("dropdown-symbol");
    if (drplstval == "none"){
        drplst.style.display = "inline-block";
        drpsign.style.transform = "rotate(180deg) translateY(-1px)";
    }
    else if(drplstval != "none"){
        drplst.style.display = "none";
        drpsign.style.transform = "rotate(0deg) translateY(0px)";
    }
}

