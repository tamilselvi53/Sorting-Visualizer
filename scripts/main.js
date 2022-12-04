//array size specified by user
var size_obj = document.getElementById('a_size')
array_size = size_obj.value;

//algo speed specified by user
var speed_obj = document.getElementById('algo_speed')
algo_speed = speed_obj.value;

//Random array clicked details
var gen_obj = document.getElementById('a_generate')
gen_arr = gen_obj.value;

//To display array
var cont=document.getElementById("array_container");
var butts_algos=document.querySelectorAll(".algos");
gen_obj.addEventListener("click",generate_array);
size_obj.addEventListener("input",update_array_size);


var div_sizes = []; //array of bar height
var divs = []; //div to represent a bar 
var margin_size=0.1;
function generate_array() {
    cont.innerHTML="";
    for (var i = 0; i < array_size; i++) {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(size_obj.max - size_obj.min) ) + 10;
        //div_sizes[i] = Math.floor(Math.random * 100 + 10);
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        var margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
function update_array_size()
{
    array_size=size_obj.value;
    generate_array();
}
window.onload=update_array_size();

for(var i=0;i<butts_algos.length;i++)
{
    //alert("butt");
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");
        butts_algos[i].disabled=true;
        size_obj.disabled=true;
        gen_obj.disabled=true;
        speed_obj.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();
    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}