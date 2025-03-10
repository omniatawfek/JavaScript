let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = letter.indexOf("a");
for(let i = letter.indexOf("a"); i<friends.length; i++)
{
    if(friends[i][letter.indexOf("a")]==letter.toUpperCase())
        continue;
    else{
        console.log(`${++count} => ${friends[i]}`);
    } 
}
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"