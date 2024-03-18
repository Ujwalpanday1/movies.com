const fp=document.querySelector("#container1")
const sBox=document.querySelector("#sBox")
const apiKey="76f8f9c9";
const landingArr=[ "avatar",
"THE BOYS",
"THE SHAWSHANK REDEMPTION",
"DOCTOR STRANGE",
"DUNE",
"HER",
"JOHN WICK",
"1917",
"LORD OF WAR",
"JOKER",
"OPPENHEIMER",
"PARASITE",
"R.R.R",
"STRANGER THINGS",
"THOR LOVE AND THUNDER",
"TITANIC",
"TOYSTORY:4",
"THE NUN:11",
"BATMAN:BEGINS",
"NEPOLEON",
"A BEAUTIFUL MIND",
"ALADDIN",
"ASUR:WELCOME TO YOUR DARK SIDE",
"K.G.F.CHAPTER 1",
"THE FLASH",
"BREAKING BAD",
"DEADPOOL",
"LA LA LAND",
"INVINCIBLE",
"THE LAST OF US",
"LOKI",
"THE PURSUIT OF HAPPPYNESS",
"LUCY",
"MOONLIGHT",
"SPIDER-MAN:NO WAY HOME",
"WANDA VISION"];
const trendingArr = [
    
    "Spider-Man: No Way Home",
    "The Matrix Resurrections",
    "Dune",
    "Black Panther: Wakanda Forever",
    "Doctor Strange in the Multiverse of Madness",
    "Thor: Love and Thunder",
    "Avatar: The Way of Water",
    "Indiana Jones 5",
    "The Batman",
    "Jurassic World: Dominion",
    "Mission: Impossible 7",
    "The Flash",
    "Guardians of the Galaxy Vol. 3",
    "Fantastic Beasts: The Secrets of Dumbledore",
    "The Suicide Squad",
    "Avatar 2",
    "Top Gun: Maverick",
    "The Northman",
    "The Lost City",
    "The Adam Project",
    "Sonic the Hedgehog 2",
    "Uncharted",
    "Marry Me",
    "Nope",
    "Bullet Train",
    "Scream",
    "The Unbearable Weight of Massive Talent",
    "The King's Man",
    "Jackass Forever",
    "Untitled Elvis Presley Project",
    "Ambulance",
    "Deep Water",
    "Dog",
    "Turning Red",
    "Everything Everywhere All at Once",
    "The Outlaws",
    "Bad Boys 4",
    "Moonfall",
    "Black Adam",
    "The Nightingale",
    "The Ice Age Adventures of Buck Wild",
    "Nightmare Alley",
    "Morbius",
    "Puss in Boots: The Last Wish",
    "Fantastic Beasts: The Secrets of Dumbledore"
];
const actionArr= [
    "The Batman",
    "Spider-Man: No Way Home",
    "The Matrix Resurrections",
    "Black Panther: Wakanda Forever",
    "Doctor Strange in the Multiverse of Madness",
    "Thor: Love and Thunder",
    "Avatar: The Way of Water",
    "Jurassic World: Dominion",
    "The Flash",
    "Guardians of the Galaxy Vol. 3",
    "The Suicide Squad",
    "Top Gun: Maverick",
    "The Northman",
    "The Adam Project",
    "Sonic the Hedgehog 2",
    "Uncharted",
    "Nope",
    "Bullet Train",
    "The King's Man",
    "k.g.f",
    "Ambulance",
    "Moonfall",
    "Black Adam",
    "Morbius"
];

// for trending page
let promiseArr=[]
landingArr.forEach((names)=>{
   promiseArr.push( getM(names));

})
Promise.all(promiseArr).then((d)=>{
    let combiner=""
    let i=1;
        d.forEach((dd)=>{
            combiner=combiner+ `<div class="box">
            <div class="id${i} common flex"><img src=${dd.Poster}></div>
            <p>${dd.Title}</p>
        </div> `
        i++;
        })
        document.querySelector("#container1").innerHTML=combiner;
})
.catch((error) => {
    console.error('Error occurred:', error);
});
let promise2Arr=[]
document.querySelector(".list1").addEventListener("click",()=>{


    trendingArr.forEach((names)=>{
        promise2Arr.push( getM(names));
     
     })
     Promise.all(promise2Arr).then((d)=>{
         let combiner=""
         let i=1;
             d.forEach((dd)=>{
                 combiner=combiner+ `<div class="box">
                 <div class="id${i} common flex"><img src=${dd.Poster}></div>
                 <p>${dd.Title}</p>
             </div> `
             i++;
             })
             document.querySelector("#container1").innerHTML=combiner;
     })
     .catch((error) => {
         console.error('Error occurred:', error);
     });
     promise2Arr=[]
})
let promise4Arr=[]
document.querySelector(".list2").addEventListener("click",()=>{


    landingArr.forEach((names)=>{
        promise4Arr.push( getM(names));
     
     })
     Promise.all(promise4Arr).then((d)=>{
         let combiner=""
         let i=1;
             d.forEach((dd)=>{
                 combiner=combiner+ `<div class="box">
                 <div class="id${i} common flex"><img src=${dd.Poster}></div>
                 <p>${dd.Title}</p>
             </div> `
             i++;
             })
             document.querySelector("#container1").innerHTML=combiner;
     })
     .catch((error) => {
         console.error('Error occurred:', error);
     });
    });
let promise3Arr=[]
document.querySelector("#action").addEventListener("click",()=>{

console.log("ok")
    actionArr.forEach((names)=>{
        promise3Arr.push( getM(names));
     
     })
     Promise.all(promise3Arr).then((d)=>{
         let combiner=""
         let i=1;
             d.forEach((dd)=>{
                 combiner=combiner+ `<div class="box">
                 <div class="id${i} common flex"><img src=${dd.Poster}></div>
                 <p>${dd.Title}</p>
             </div> `
             i++;
             })
             document.querySelector("#container1").innerHTML=combiner;
     })
     .catch((error) => {
         console.error('Error occurred:', error);
     });
     promise3Arr=[]
})
sBox.addEventListener("keyup",()=>{

    if(sBox.value==""){
        document.querySelector(".searchC").style.display="none"
        document.querySelector("#container1").style.display="flex"
        document.querySelector("#container2").style.display="flex"
    }
    else {
    
    getM(sBox.value).then((d)=>{

        console.log(d)
        document.querySelector(".searchC").style.display="flex"
        document.querySelector("#container1").style.display="none"
        document.querySelector("#container2").style.display="none"
        document.querySelector(".searchC").innerHTML=`<div class="details">
        <div class="detail-item">
            <h4>Title:</h4>
            <p>${d.Title}</p>
        </div>
        <div class="detail-item">
            <h4>Actors:</h4>
            <p>${d.Actors}</p>
        </div>
        <div class="detail-item">
            <h4>Genre:</h4>
            <p>${d.Genre}</p>
        </div>
        <div class="detail-item">
            <h4>Language:</h4>
            <p>${d.Language}</p>
        </div>
        <div class="detail-item">
            <h4>Awards:</h4>
            <p>${d.Awards}</p>
        </div>
        <div class="detail-item">
            <h4>Box Office:</h4>
            <p>${d.BoxOffice}</p>
        </div>
        <div class="detail-item">
            <h4>Country:</h4>
            <p>${d.Country}</p>
        </div>
        <div class="detail-item">
            <h4>DVD:</h4>
            <p>${d.DVD}</p>
        </div>
        <div class="detail-item">
            <h4>Director:</h4>
            <p>${d.Director}</p>
        </div>
        <div class="detail-item">
            <h4>Metascore:</h4>
            <p>${d.Metascore}</p>
        </div>
        <div class="detail-item">
            <h4>Plot:</h4>
            <p>${d.Plot}</p>
        </div>
        <div class="detail-item">
            <h4>Production:</h4>
            <p>${d.Production}</p>
        </div>
        <div class="detail-item">
            <h4>Rated:</h4>
            <p>${d.Rated}</p>
        </div>
        <div class="detail-item">
            <h4>Released:</h4>
            <p>${d.Released}</p>
        </div>
        <div class="detail-item">
            <h4>Response:</h4>
            <p>${d.Response}</p>
        </div>
        <div class="detail-item">
            <h4>Runtime:</h4>
            <p>${d.Runtime}</p>
        </div>
        <div class="detail-item">
            <h4>Type:</h4>
            <p>${d.Type}</p>
        </div>
        <div class="detail-item">
            <h4>Website:</h4>
            <p>${d.Website}</p>
        </div>
        <div class="detail-item">
            <h4>Writer:</h4>
            <p>${d.Writer}</p>
        </div>
        <div class="detail-item">
            <h4>Year:</h4>
            <p>${d.Year}</p>
        </div>
        <div class="detail-item">
            <h4>IMDb Rating:</h4>
            <p>${d.imdbRating}</p>
        </div>
        <div class="detail-item">
            <h4>IMDb Votes:</h4>
            <p>${d.imdbVotes}</p>
        </div>

       </div>
<div class="poster">
<img src="${d.Poster}">
</div>`

    })
    .catch(()=>{
        console.log("error fetching the data")
    })
}
})
async function getM(mName){
const p1=await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${mName}`)
const data=await p1.json();
return data;
}