let request = new XMLHttpRequest();
request.open("GET","../assignment-1/articles.json");
request.send();

request.onload = function(){
    if(request.readyState === 4){
        console.log(request.responseText);
    }
    if(request.status === 200){
        console.log("Data Loaded");
    }
}


