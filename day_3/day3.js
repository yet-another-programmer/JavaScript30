var blur=document.getElementById("blur");
console.log(blur.value);

var space=document.getElementById("space");
console.log(space.value);

var color=document.getElementById("color");
console.log(color.value);

blur.oninput= function()
{
    
    var set=document.getElementById("blur")
    console.log(set.value);
    var px=set.dataset.sizing;
    document.getElementById("im").style.setProperty('--bl',set.value+px);

}

space.oninput= function()
{
    
    var set=document.getElementById("space")
    console.log(set.value);
    var px=set.dataset.sizing;
    document.getElementById("im").style.setProperty('--pd',set.value+px);

}

color.oninput= function()
{
    
    var set=document.getElementById("color")
    console.log(set.value);
    document.getElementById("im").style.setProperty('--cl',set.value);
    document.getElementById("jas").style.setProperty('--cl',set.value);
    

}