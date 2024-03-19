const fp=document.querySelector("#container1")
const sBox=document.querySelector("#sBox")
const apiKey="76f8f9c9";
const googleApiKey="AIzaSyBGh2NURdIC06m3FMCspVyz7N5MuU5MooI"
const genreIds = ["action", "animation", "comedy", "crime", "drama", "family", "fantasy", "fiction", "horror", "mystery", "mythology", "thriller", "romance", "sci-fi", "18+"];

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



const movieLists = {
    list1: [
        "Avatar",
        "Spider-Man: No Way Home",
        "Dune",
        "The Batman",
        "Shang-Chi and the Legend of the Ten Rings",
        "The Matrix Resurrections",
        "Black Widow",
        "Eternals",
        "No Time to Die",
        "The Suicide Squad",
        "Venom: Let There Be Carnage",
        "Joker",
        "Fast & Furious 9",
        "Godzilla vs. Kong",
        "Mortal Kombat",
        "The Falcon and the Winter Soldier",
        "Luca",
        "Raya and the Last Dragon",
        "Cruella",
        "A Quiet Place Part II"
    ],
    list2: [
        "Shang-Chi and the Legend of the Ten Rings",
        "Eternals",
        "Black Widow",
        "No Time to Die",
        "The Matrix Resurrections",
        "Spider-Man: No Way Home",
        "Dune",
        "The Batman",
        "Venom: Let There Be Carnage",
        "Mortal Kombat",
        "The Suicide Squad",
        "Free Guy",
        "The Green Knight",
        "Candyman",
        "The Forever Purge",
        "Jungle Cruise",
        "The Marksman",
        "F9: The Fast Saga",
        "The Night House",
        "Cry Macho"
    ],
    list3: [
        "The Matrix Resurrections",
        "The Suicide Squad",
        "Venom: Let There Be Carnage",
        "Joker",
        "Black Widow",
        "Spider-Man: No Way Home",
        "Dune",
        "The Batman",
        "Fast & Furious 9",
        "Godzilla vs. Kong",
        "A Quiet Place Part II",
        "Luca",
        "Raya and the Last Dragon",
        "The Falcon and the Winter Soldier",
        "Cruella",
        "The Green Knight",
        "The Forever Purge",
        "Jungle Cruise",
        "Shang-Chi and the Legend of the Ten Rings",
        "The Marksman"
    ],
    list4: [
        "Gully Boy",
        "Padmaavat",
        "3 Idiots",
        "Dilwale Dulhania Le Jayenge",
        "Bahubali: The Beginning",
        "Lagaan",
        "PK",
        "Kabhi Khushi Kabhie Gham",
        "Bajrangi Bhaijaan",
        "Chak De! India",
        "Dangal",
        "Pad Man",
        "Gangs of Wasseypur",
        "Uri: The Surgical Strike",
        "Bajirao Mastani",
        "Raazi",
        "Queen",
        "Andhadhun",
        "Article 15",
        "Mardaani 2"
    ]
};





const genres = {
    action: [
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
    ],
    animation: [
      "Turning Red",
      "Puss in Boots: The Last Wish",
      "The Ice Age Adventures of Buck Wild",
      "Luca",
      "Raya and the Last Dragon",
      "The Mitchells vs. the Machines",
      "Encanto",
      "Luca",
      "Sing 2",
      "Hotel Transylvania: Transformania",
      "Ron's Gone Wrong",
      "The Boss Baby: Family Business",
      "Spirit Untamed",
      "Tom and Jerry",
      "The Addams Family 2",
      "Rumble",
      "Arlo the Alligator Boy",
      "Extinct",
      "Trollhunters: Rise of the Titans",
      "Wish Dragon"
    ],
    comedy: [
      "Jackass Forever",
      "Marry Me",
      "Dog",
      "Everything Everywhere All at Once",
      "Bad Boys 4",
      "Palm Springs",
      "Free Guy",
      "Red Notice",
      "The French Dispatch",
      "Vacation Friends",
      "The Hitman's Wife's Bodyguard",
      "Jungle Cruise",
      "Fatherhood",
      "The Lovebirds",
      "Coming 2 America",
      "Barb and Star Go to Vista Del Mar",
      "The Mitchells vs. the Machines",
      "Bad Trip",
      "Zola",
      "Plan B"
    ],
    crime: [
      "The Little Things",
      "No Sudden Move",
      "The Many Saints of Newark",
      "The Guilty",
      "The Woman in the Window",
      "The Gentlemen",
      "I Care a Lot",
      "Those Who Wish Me Dead",
      "Wrath of Man",
      "The Devil All the Time",
      "The Courier",
      "The Vault",
      "The Card Counter",
      "The Burnt Orange Heresy",
      "The Virtuoso",
      "The Informer",
      "The Tax Collector",
      "The Mauritanian",
      "The Gentlemen",
      "The Gentlemen",
      "The White Tiger"
    ],
    drama: [
      "The Shawshank Redemption",
      "The Godfather",
      "Schindler's List",
      "Forrest Gump",
      "The Dark Knight",
      "The Godfather: Part II",
      "The Green Mile",
      "One Flew Over the Cuckoo's Nest",
      "Goodfellas",
      "Fight Club",
      "The Silence of the Lambs",
      "Se7en",
      "City of God",
      "Saving Private Ryan",
      "The Pianist",
      "American History X",
      "Interstellar",
      "The Departed",
      "Gladiator",
      "Whiplash",
      "The Prestige"
    ],
    family: [
      "Toy Story",
      "Finding Nemo",
      "The Lion King",
      "Shrek",
      "Frozen",
      "Harry Potter and the Sorcerer's Stone",
      "The Incredibles",
      "Beauty and the Beast",
      "Up",
      "Home Alone",
      "Despicable Me",
      "Moana",
      "Aladdin",
      "Coco",
      "The Princess Bride",
      "Willy Wonka & the Chocolate Factory",
      "Matilda",
      "Mary Poppins",
      "The Sound of Music",
      "Charlie and the Chocolate Factory",
      "Paddington"
    ],
    fantasy: [
      "Harry Potter and the Sorcerer's Stone",
      "The Lord of the Rings: The Fellowship of the Ring",
      "Alice in Wonderland",
      "Pan's Labyrinth",
      "Stardust",
      "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      "Fantastic Beasts and Where to Find Them",
      "Willow",
      "The Princess Bride",
      "The NeverEnding Story",
      "Maleficent",
      "The Secret Garden",
      "Hook",
      "The Wizard of Oz",
      "Jumanji",
      "Harry Potter and the Chamber of Secrets",
      "Harry Potter and the Prisoner of Azkaban",
      "Harry Potter and the Goblet of Fire",
      "Harry Potter and the Order of the Phoenix",
      "Harry Potter and the Half-Blood Prince"
    ],
    fiction: [
      "Inception",
      "Interstellar",
      "The Matrix",
      "Blade Runner 2049",
      "Eternal Sunshine of the Spotless Mind",
      "The Truman Show",
      "Minority Report",
      "The Prestige",
      "District 9",
      "Looper",
      "Cloud Atlas",
      "The Adjustment Bureau",
      "A Clockwork Orange",
      "The Fifth Element",
      "Donnie Darko",
      "Gattaca",
      "The Island",
      "Edge of Tomorrow",
      "The Fountain",
      "Children of Men"
    ],
    horror: [
      "The Conjuring: The Devil Made Me Do It",
      "A Quiet Place Part II",
      "Malignant",
      "Candyman",
      "Halloween Kills",
      "The Forever Purge",
      "Antlers",
      "The Night House",
      "Last Night in Soho",
      "The Green Knight",
      "The Empty Man",
      "Escape Room: Tournament of Champions",
      "The Little Things",
      "Fear Street Trilogy",
      "Don't Breathe 2",
      "The Conjuring 3: The Devil Made Me Do It",
      "The Babysitter: Killer Queen",
      "Spiral: From the Book of Saw",
      "Censor",
      "Saint Maud"
    ],
    mystery: [
      "Knives Out",
      "Gone Girl",
      "Sherlock Holmes",
      "Prisoners",
      "The Girl with the Dragon Tattoo",
      "Shutter Island",
      "The Prestige",
      "Se7en",
      "Zodiac",
      "Identity",
      "The Sixth Sense",
      "Mystic River",
      "Oldboy",
      "The Others",
      "The Secret in Their Eyes",
      "The Da Vinci Code",
      "Enemy",
      "The Vanishing",
      "Chinatown",
      "Murder on the Orient Express"
    ],
    mythology: [
      "300",
      "Clash of the Titans",
      "Troy",
      "Jason and the Argonauts",
      "The Odyssey",
      "Percy Jackson & the Olympians: The Lightning Thief",
      "The Immortals",
      "Hercules",
      "Gods of Egypt",
      "Thor",
      "Immortals",
      "Wrath of the Titans",
      "Perseus",
      "The Legend of Hercules",
      "The Scorpion King",
      "Troy: Fall of a City",
      "Percy Jackson: Sea of Monsters",
      "Hercules",
      "Jason and the Argonauts",
      "Clash of the Titans"
    ],
    thriller: [
      "Se7en",
      "Gone Girl",
      "The Silence of the Lambs",
      "Prisoners",
      "Zodiac",
      "Shutter Island",
      "The Sixth Sense",
      "Psycho",
      "The Prestige",
      "The Girl with the Dragon Tattoo",
      "Memento",
      "Nightcrawler",
      "Oldboy",
      "No Country for Old Men",
      "The Departed",
      "Vertigo",
      "Black Swan",
      "The Usual Suspects",
      "The Others",
      "The Vanishing",
      "Saw",
      "The Machinist",
      "Identity",
      "Don't Breathe",
      "The Ring",
      "The Game",
      "Cape Fear",
      "Insomnia",
      "Fatal Attraction",
      "Basic Instinct"
    ],
    romance: [
      "Titanic",
      "The Notebook",
      "Pride & Prejudice",
      "La La Land",
      "Romeo + Juliet",
      "A Walk to Remember",
      "The Fault in Our Stars",
      "Before Sunrise",
      "500 Days of Summer",
      "Notting Hill",
      "Dirty Dancing",
      "Eternal Sunshine of the Spotless Mind",
      "Casablanca",
      "Pretty Woman",
      "The Princess Bride",
      "When Harry Met Sally...",
      "Love Actually",
      "The Shape of Water",
      "Silver Linings Playbook",
      "Her",
      "Brokeback Mountain",
      "Before Sunset",
      "Blue Valentine",
      "About Time",
      "Crazy, Stupid, Love",
      "Sleepless in Seattle",
      "Amélie",
      "Ghost",
      "Serendipity",
      "The Proposal"
    ],
    scifi: [
      "Interstellar",
      "Inception",
      "The Matrix",
      "Blade Runner 2049",
      "Avatar",
      "Star Wars: Episode IV - A New Hope",
      "Star Wars: Episode V - The Empire Strikes Back",
      "Star Wars: Episode VI - Return of the Jedi",
      "The Fifth Element",
      "2001: A Space Odyssey",
      "The Martian",
      "Jurassic Park",
      "The Terminator",
      "Back to the Future",
      "Arrival",
      "The Day the Earth Stood Still",
      "The Matrix Reloaded",
      "The Matrix Revolutions",
      "Minority Report",
      "District 9",
      "Star Trek",
      "Star Trek Into Darkness",
      "Star Trek Beyond",
      "Close Encounters of the Third Kind",
      "Guardians of the Galaxy",
      "The Avengers",
      "The Hunger Games",
      "The Hunger Games: Catching Fire",
      "The Hunger Games: Mockingjay - Part 1",
      "The Hunger Games: Mockingjay - Part 2",
      "The Hobbit: An Unexpected Journey"
    ],
    adult: [
      "Fifty Shades of Grey",
      "Fifty Shades Darker",
      "Fifty Shades Freed",
      "Nymphomaniac: Vol. I",
      "Nymphomaniac: Vol. II",
      "Blue Is the Warmest Color",
      "Basic Instinct",
      "Eyes Wide Shut",
      "Showgirls",
      "American Psycho",
      "Requiem for a Dream",
      "Shame",
      "Crash",
      "The Brown Bunny",
      "Love",
      "Caligula",
      "The Dreamers",
      "9 Songs",
      "Secretary",
      "Shortbus",
      "Irreversible",
      "Boogie Nights",
      "The Reader",
      "Eyes Wide Shut",
      "Y Tu Mamá También",
      "Boogie Nights",
      "Boys Don't Cry",
      "The Piano Teacher",
      "The Idiots",
      "In the Realm of the Senses"
    ]
  };




  

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
document.querySelector("#lists").addEventListener("click",(event)=>{
let promise2Arr=[]
    movieLists[event.target.id].forEach((names)=>{
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
    document.querySelector("#container2").addEventListener("click",(event)=>{
        let promisearr=[]
        // use big bracket in wants value of it 
        genres[event.target.id].forEach(names=>{
            promisearr.push(getM(names))  
            })
            Promise.all(promisearr).then((d)=>{
                let i=1;
                let combiner=""
                d.forEach((dd)=>{
                    combiner=combiner+`<div class="box">
                    <div class="id${i} common flex"><img src=${dd.Poster}></div>
                    <p>${dd.Title}</p>
                </div> `

                    i++;
                })
                document.querySelector("#container1").innerHTML=combiner;

            })
            .catch((error)=>{
                console.log("error 404",error)
            })

        })
    
sBox.addEventListener("keyup",()=>{

    if(sBox.value==""){
        document.querySelector(".searchC").style.display="none"
        document.querySelector("#container1").style.display="flex"
        document.querySelector("#container2").style.display="flex"
    }
    else {
        let pa=[]
        let vUrl=""
    pa.push(getTailer(sBox.value))
    pa.push( getM(sBox.value))
    Promise.all(pa).then(ddd=>{
        let data=ddd[0];
        vUrl=`https://www.youtube.com/embed/${data.items[0].id.videoId}`
        let d=ddd[1];
         document.querySelector(".searchC").style.display="flex"
        document.querySelector("#container1").style.display="none"
        document.querySelector("#container2").style.display="none"
        document.querySelector(".searchC").innerHTML=`<div class="trailer">
<iframe width="100vw" height="100vh" src=${vUrl} frameborder="0" allowfullscreen></iframe>
</div>
<div class="details">
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
</div>

`
})
    }
})
async function getM(mName){
const p1=await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${mName}`)
const data=await p1.json();
return data;
}

// for trailer
async function getTailer(names){
    const p1=await fetch(`https://www.googleapis.com/youtube/v3/search?key=${googleApiKey}&q=${names} trailer&type=video`)
    const p2=await p1.json();
    return p2;
}