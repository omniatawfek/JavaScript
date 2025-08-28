function getData(Odata){
    return new Promise((resolve,reject)=>{
        let data = new XMLHttpRequest();
        data.open("GET",Odata);
        data.send();
        data.onload = function(){
            if(this.readyState === 4 && this.status === 200){
                resolve(JSON.parse(data.responseText));
            }else {
                reject(Error("wrong"));
            }
        }
    })
}
getData("data.json")
.then((data)=>{data.length = 5;
return data;
})
.then((showData)=>{
    showData.forEach(data => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let h3 = document.createElement("h3");
        h3.textContent = data.title;
        p.textContent = data.description;
        div.appendChild(h3);
        div.appendChild(p);
        document.body.appendChild(div);
    });
    
})
