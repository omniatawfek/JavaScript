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
let mainData = JSON.parse(jsonObject);
for(let i = 0; i < mainData.length; i++){
    mainData[i].department = "All";
}
console.log(mainData);
let updateData = JSON.stringify(mainData);
console.log(updateData);