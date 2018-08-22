let search=document.getElementById("searchBar");
let search_btn=document.getElementById("searchButton")
let output=document.getElementById("output_area");
let params=document.getElementById("params");
let search_value;
let json,size;
function searchparam(){
    param=params.options[params.selectedIndex].value;
    console.log("param="+param);
    search_value=search.value;
    handle(param,search.value);
}

function handle(param,search_value){
    let html_text="";
    const request = new XMLHttpRequest();
    const url="https://jsonplaceholder.typicode.com/comments?";
    console.log(url+param+"="+search_value);
    if(param=="all"){console.log(param);    request.open("GET",url, false);}
    else;{console.log(param);     request.open("GET",url+param+"="+search_value, false);}
    request.send(null);
    json=JSON.parse(request.responseText);
    if(!Object.keys(json).length){
        html_text+="<div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 warning\">";
        html_text+="<p warning>"+"NO DATA FOUND"+"</p></br>";
        html_text+="</div>";
        output.innerHTML=html_text;
    }
    else{
    for (let i in json) {
        console.log(Object.keys(json).length);
        html_text+="<div class=\"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 output\">";
        html_text+="<p class=\"text\">Thread ID: "+json[i].postId+"</p></br>";
        html_text+="<p class=\"text\">Post ID: "+json[i].id+"</p></br>";
        html_text+="<p class=\"text\">"+json[i].body+"</p></br>";
        html_text+="<p class=\"text\">E-mail adress: "+json[i].email+"</p></br>";
        html_text+="</div>";
    }
    output.innerHTML=html_text;
}
}

$('#searchBar').on('keyup keypress', function(e) {
    let keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
        searchparam(); 
      e.preventDefault();
      return false;
    }
  });


document.body.onkeyup=function(e){
	switch(e.keyCode){
		case 13: searchparam(); break;
		default: break;
	}
}


search_btn.addEventListener("click",searchparam());
search.addEventListener("submit",searchparam());
