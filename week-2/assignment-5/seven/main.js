let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i = start;i<mix.length;i++)
{
    if(typeof mix[i] ==='string' || mix[i]==start.toString().length)
        continue;
    else console.log(mix[i]);
}
// Output
2
3
4