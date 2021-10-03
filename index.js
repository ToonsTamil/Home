
var search=document.getElementById("search");
var search_bar=document.getElementById("search-bar");
var close_search=document.getElementById("close-search");
var list=document.getElementById("list");
var list_icon=document.getElementById("list-icon");
var top_bar=document.getElementById("topbar");

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
