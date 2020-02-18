//sort method
let names=["mane","salah","kane","firmino"];
console.log(names.sort());

let scores=[30,50,40,70,80];
console.log(scores.sort());

let players=[
    {name:"mane",score:90},
    {name:"salah",score:100},
    {name:"kane",score:70},
    {name:"firmino",score:30},
    {name:"arnold",score:8}
];
players.sort((a,b)=>{
    if(a.score>b.score){
        return 1;
    }else if(b.score>a.score){
        return -1;
    }else{
        return 0;
    }
});
console.log(players);

//find method
const scroes=[30,50,60,90];
const answer=scores.find(score=>score>60);
console.log(answer);

//filter method
let marks=[40,30,60,70];
let filtermark=marks.filter(mark=>mark>30);
console.log(filtermark);

let name=[
    {name:"John",premium:true},
    {name:"Mike",premium:false},
    {name:"Johson",premium:true},
    {name:"Mary",premium:false}
];

let namefilter=name.filter((names)=>{
    return names.premium;
});
console.log(namefilter);
