
var search=document.getElementById("search");
var search_bar=document.getElementById("search-bar");
var close_search=document.getElementById("close-search");
var list=document.getElementById("list");
var list_icon=document.getElementById("list-icon");
var top_bar=document.getElementById("topbar");

var tele=document.getElementById("tele");
var search_icon=document.getElementById("search-icon");

search.onclick=function() { search_bar.style.display="block";
                           close_search.style.display="block";
search.style.display="none";                       
}

close_search.onclick=function (){
  search.style.display="block";
  search_bar.style.display="none";
  close_search.style.display="none";
}

  list_icon.onclick=function (){
   if(list.style.display==="block"){
  list.style.display="none";
 search.style.display="block";
 
   }
    else {
  search.style.display="none";   list.style.display="block";
   search_bar.style.display="none";
      close_search.style.display="none";
   }
  } 

search_icon.onclick=function (){
 var txt=document.getElementById("search-box").value;
  search_bar.style.display="none";
 close_search.style.display="none";

  search.style.display="block";
  if("pokemon season".includes(txt.toLowerCase())){
  open ("https://toonstamil.github.io/pokemon-season");
     }
  
  else if("pokemon season 14".includes(txt.toLowerCase())){
  open("https://toonstamil.github.io/pokemon-season/pokemon-season-14-black-and-white");
}
  else if("pokemon season 15".includes(txt.toLowerCase())){
  
  open ("https://toonstamil.github.io/pokemon-season/pokemon-season-15-bw-rival-destinies");
}
  else if("luca".includes(txt.toLowerCase())){
    open ("https://toonstamil.github.io/disney/luca");
  
  }
  else if("raya the last dragon".includes(txt.toLowerCase())){
    open("https://toonstamil.github.io/disney/raya-and-the-last-dragon");
  }
  else if("pokemon movie".includes(txt.toLowerCase())){
        open ("https://toonstamil.github.io/pokemon-movie");
  }
  else{
    alert ("Result Not Found");
  }
}

tele.onclick=function (){
  open('https://t.me/All_Toons_Tamil');
  }
