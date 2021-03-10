var x = document.getElementById("genderlist");
var y = document.getElementById("brandlist");
var z = document.getElementById("popularlist");
function show_hide(){
    if(x.style.display === 'none'){
        x.style.display = 'inline';
    }else{
        x.style.display = 'none'
    }
    if(y.style.display === 'none'){
        y.style.display = 'inline';
    }else{
        y.style.display = 'none'
    }
    if(z.style.display === 'none'){
        z.style.display = 'inline';
    }else{
        z.style.display = 'none'
    }
}
