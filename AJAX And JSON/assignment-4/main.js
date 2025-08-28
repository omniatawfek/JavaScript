const jsonObject = `[
    {
        "id": 100,
        "name": "jonas",
        "department": "drama",
        "title":"hello",
        "content":"hello it is an article"
    },
    {
        "id":100,
        "name": "jonas",
        "department": "drama",
        "title":"hello",
        "content":"hello it is an article"
    },
    {
        "id":100,
        "name": "jonas",
        "department": "drama",
        "title":"hello",
        "content":"hello it is an article"
    },
    {
        "id":100,
        "name": "jonas",
        "department": "drama",
        "title":"hello",
        "content":"hello it is an article"
    },
    {
        "id":100,
        "name": "jonas",
        "department": "drama",
        "title":"hello",
        "content":"hello it is an article"
    }
]`;
const obj = JSON.parse(jsonObject);

let div =`<div id="data">`;


for(let i = 0; i < obj.length; i++){
    div  += `
  <div>
    <h2>Title: ${obj[i].title}</h2>
    <p>Content: ${obj[i].content}</</p>
    <p>Author: ${obj[i].name}</</p>
    <p>Department: ${obj[i].department}</</p>
  </div>
    `
}
div += `<\div>`;
document.write(div);