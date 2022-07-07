//tb1 - head
//for buttons

//for play all



//for follow button
function followup(){
    var btn = document.getElementById("tb1-head-bt2");
    var value = btn.textContent;

    if (value == "Follow") {
        btn.innerHTML = "Following";
        btn.style.background = "darkslategray";
    }
    else{
        btn.innerHTML = "Follow";
        btn.style.background = "transparent";
    }
}