async function getData(){
    let response = await fetch("data.json");
    let data = await response.json();
    data.length = 5;
    data.forEach((data) => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let h3 = document.createElement("h3");
        h3.textContent = data.title;
        p.textContent = data.description;
        div.appendChild(h3);
        div.appendChild(p);
        document.body.appendChild(div);
    });
}

getData();
