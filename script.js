const fp=document.querySelector("#container1")
const sBox=document.querySelector("#sBox")
let f=0;
const apiKey="76f8f9c9";
const googleApiKey2="AIzaSyBGh2NURdIC06m3FMCspVyz7N5MuU5MooI"
const googleApiKey=	"AIzaSyDODbPBPyncuOeuIOnR4jbHRiaAbBwp5sE"
const genreIds = ["action", "animation", "comedy", "crime", "drama", "family", "fantasy", "fiction", "horror", "mystery", "mythology", "thriller", "romance", "sci-fi", "18+"];

const landingArr=[ 
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
"RRR",
"avatar",
"THE BOYS",
"STRANGER THINGS",
"THOR LOVE AND THUNDER",
"TITANIC",
"spider-man",
"THE NUN",
"BATMAN:BEGINS",
"NAPOLEON",
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
"The Pursuit of Happyness",
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
        "Baahubali: The Beginning",
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
      "Encanto",
      "Luca",
      "Sing 2",
      "Ron's Gone Wrong",
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
      "Jungle Cruise",
      "Fatherhood",
      "The Lovebirds",
      "Coming 2 America",
      "Barb and Star Go to Vista Del Mar",
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
      "Fear Street",
      "Don't Breathe 2",
      "The Conjuring: The Devil Made Me Do It",
      "The Babysitter: Killer Queen",
      "Spiral",
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
    ],
    y2024: ["The Batman", "Spider-Man: No Way Home", "The Matrix Resurrections", "Black Panther: Wakanda Forever", "Doctor Strange in the Multiverse of Madness", "Thor: Love and Thunder", "Avatar: The Way of Water", "Jurassic World: Dominion", "The Flash", "Guardians of the Galaxy Vol. 3", "The Suicide Squad", "Top Gun: Maverick", "The Northman", "The Adam Project", "Sonic the Hedgehog 2", "Uncharted", "Nope", "Bullet Train", "The King's Man", "k.g.f", "Ambulance", "Moonfall", "Black Adam", "Morbius"],
    y2023: [
        "Guardians of the Galaxy Vol. 3",
        "The Flash",
        "Black Panther: Wakanda Forever",
        
        "Fast & Furious 11",
        "Mission: Impossible ",
        "Aquaman and the Lost Kingdom",
        "Doctor Strange in the Multiverse of Madness",
        "Thor: Love and Thunder",
        "Top Gun: Maverick",
        "Shazam! Fury of the Gods",
        "The Suicide Squad "
    ],
    y2022: ["Turning Red", "Puss in Boots: The Last Wish", "The Ice Age Adventures of Buck Wild", "Luca", "Raya and the Last Dragon", "The Mitchells vs. the Machines", "Encanto", "Luca", "Sing 2", "Hotel Transylvania: Transformania", "Ron's Gone Wrong", "The Boss Baby: Family Business", "Spirit Untamed", "Tom and Jerry", "The Addams Family 2", "Rumble", "Arlo the Alligator Boy", "Extinct", "Trollhunters: Rise of the Titans", "Wish Dragon"],
    y2021: ["Jackass Forever", "Marry Me", "Dog", "Everything Everywhere All at Once", "Bad Boys 4", "Palm Springs", "Free Guy", "Red Notice", "The French Dispatch", "Vacation Friends", "The Hitman's Wife's Bodyguard", "Jungle Cruise", "Fatherhood", "The Lovebirds", "Coming 2 America", "Barb and Star Go to Vista Del Mar", "The Mitchells vs. the Machines", "Bad Trip", "Zola", "Plan B"],
    y2020: ["The Little Things", "No Sudden Move", "The Many Saints of Newark", "The Guilty", "The Woman in the Window", "The Gentlemen", "I Care a Lot", "Those Who Wish Me Dead", "Wrath of Man", "The Devil All the Time", "The Courier", "The Vault", "The Card Counter", "The Burnt Orange Heresy", "The Virtuoso", "The Informer", "The Tax Collector", "The Mauritanian", "The Gentlemen", "The Gentlemen", "The White Tiger"],
    y2019: ["Toy Story 4", "Frozen II", "The Lion King", "Spider-Man: Far from Home", "Joker", "Captain Marvel", "Star Wars: The Rise of Skywalker", "Avengers: Endgame", "Jumanji: The Next Level", "The Irishman", "Once Upon a Time in Hollywood", "Knives Out", "Aladdin", "It Chapter Two", "Fast & Furious Presents: Hobbs & Shaw", "Maleficent: Mistress of Evil", "The Secret Life of Pets 2", "Godzilla: King of the Monsters", "Terminator: Dark Fate", "Hustlers"],
    y2018: ["Avengers: Infinity War", "Black Panther", "Deadpool 2", "Aquaman", "Bohemian Rhapsody", "Fantastic Beasts: The Crimes of Grindelwald", "Spider-Man: Into the Spider-Verse", "Venom", "Mission: Impossible - Fallout", "A Star Is Born", "Ant-Man and the Wasp", "Ralph Breaks the Internet", "The Meg", "Solo: A Star Wars Story", "Ready Player One", "Mary Poppins Returns", "Bumblebee", "Jurassic World: Fallen Kingdom", "Mamma Mia! Here We Go Again", "The Grinch"],
    y2017: ["Star Wars: The Last Jedi", "Beauty and the Beast", "Wonder Woman", "Jumanji: Welcome to the Jungle", "Guardians of the Galaxy Vol. 2", "Spider-Man: Homecoming", "It", "Thor: Ragnarok", "Despicable Me 3", "Justice League", "Logan", "The Fate of the Furious", "Coco", "Dunkirk", "The Greatest Showman", "War for the Planet of the Apes", "Pirates of the Caribbean: Dead Men Tell No Tales", "Kong: Skull Island", "Transformers: The Last Knight", "Get Out"],
    y2016: ["Captain America: Civil War", "Rogue One: A Star Wars Story", "Finding Dory", "Zootopia", "The Jungle Book", "The Secret Life of Pets", "Batman v Superman: Dawn of Justice", "Deadpool", "Suicide Squad", "Moana", "Doctor Strange", "Sing", "Fantastic Beasts and Where to Find Them", "Moana", "Trolls", "La La Land", "Arrival", "The Angry Birds Movie", "X-Men: Apocalypse", "Kung Fu Panda 3"],
    y2015: ["Star Wars: The Force Awakens", "Jurassic World", "Avengers: Age of Ultron", "Inside Out", "Furious 7", "Minions", "Spectre", "The Hunger Games: Mockingjay - Part 2", "The Martian", "Cinderella", "The Revenant", "Ant-Man", "Mission: Impossible - Rogue Nation", "Mad Max: Fury Road", "The Good Dinosaur", "Creed", "The SpongeBob Movie: Sponge Out of Water", "San Andreas", "The Hateful Eight", "Straight Outta Compton"],
    y2014: ["Guardians of the Galaxy", "Transformers: Age of Extinction", "Maleficent", "The Hobbit: The Battle of the Five Armies", "Big Hero 6", "Interstellar", "Dawn of the Planet of the Apes", "The Amazing Spider-Man 2", "Godzilla", "X-Men: Days of Future Past", "The Hunger Games: Mockingjay - Part 1", "The LEGO Movie", "Captain America: The Winter Soldier", "Teenage Mutant Ninja Turtles", "Gravity", "The Hobbit: The Desolation of Smaug", "The Maze Runner", "The Fault in Our Stars", "Gone Girl"],
    y2013: ["Frozen", "Iron Man 3", "Despicable Me 2", "The Hobbit: The Desolation of Smaug", "The Hunger Games: Catching Fire", "Man of Steel", "Gravity", "Thor: The Dark World", "The Croods", "World War Z", "Oz the Great and Powerful", "Star Trek Into Darkness", "The Wolverine", "Pacific Rim", "The Conjuring", "The Great Gatsby", "The Secret Life of Walter Mitty", "Now You See Me", "The Heat", "We're the Millers"],
    y2012: ["The Avengers", "The Dark Knight Rises", "The Hobbit: An Unexpected Journey", "Skyfall", "The Twilight Saga: Breaking Dawn - Part 2", "The Amazing Spider-Man", "Brave", "The Hunger Games", "Men in Black 3", "Wreck-It Ralph", "Les Misérables", "Django Unchained", "The Expendables 2", "Ice Age: Continental Drift", "Madagascar 3: Europe's Most Wanted", "Life of Pi", "Ted", "Taken 2", "21 Jump Street"],
    y2011: ["Harry Potter and the Deathly Hallows: Part 2", "Transformers: Dark of the Moon", "Pirates of the Caribbean: On Stranger Tides", "The Twilight Saga: Breaking Dawn - Part 1", "Mission: Impossible - Ghost Protocol", "The Hangover Part II", "Fast Five", "Cars 2", "Sherlock Holmes: A Game of Shadows", "Thor", "Captain America: The First Avenger", "Rise of the Planet of the Apes", "The Smurfs", "Kung Fu Panda 2", "X-Men: First Class", "The Adventures of Tintin", "Rio", "Rango", "Super 8", "Green Lantern"],
    y2010: ["Toy Story 3", "Alice in Wonderland", "Harry Potter and the Deathly Hallows: Part 1", "Inception", "Shrek Forever After", "The Twilight Saga: Eclipse", "Iron Man 2", "Tangled", "Despicable Me", "How to Train Your Dragon", "The Karate Kid", "Clash of the Titans", "The Chronicles of Narnia: The Voyage of the Dawn Treader", "Tron: Legacy", "The King's Speech", "Megamind", "The Last Airbender", "Percy Jackson & the Olympians: The Lightning Thief", "Salt", "The Social Network"],
    y2009: ["Avatar", "Harry Potter and the Half-Blood Prince", "Ice Age: Dawn of the Dinosaurs", "Transformers: Revenge of the Fallen", "2012", "Up", "The Twilight Saga: New Moon", "The Hangover", "Star Trek", "The Blind Side", "Monsters vs. Aliens", "X-Men Origins: Wolverine", "Night at the Museum: Battle of the Smithsonian", "Fast & Furious", "Cloudy with a Chance of Meatballs", "G.I. Joe: The Rise of Cobra", "Taken", "Sherlock Holmes", "Paul Blart: Mall Cop", "Inglourious Basterds"],
    y2008: ["The Dark Knight", "Iron Man", "Indiana Jones and the Kingdom of the Crystal Skull", "Hancock", "WALL·E", "Kung Fu Panda", "Twilight", "Madagascar: Escape 2 Africa", "Quantum of Solace", "Bolt", "Mamma Mia!", "Slumdog Millionaire", "The Chronicles of Narnia: Prince Caspian", "Wanted", "Horton Hears a Who!", "Gran Torino", "Step Brothers", "Marley & Me", "Cloverfield", "Bedtime Stories"],
    y2007: ["Pirates of the Caribbean: At World's End", "Harry Potter and the Order of the Phoenix", "Spider-Man 3", "Shrek the Third", "Transformers", "Ratatouille", "I Am Legend", "The Simpsons Movie", "National Treasure: Book of Secrets", "300", "Live Free or Die Hard", "The Bourne Ultimatum", "Juno", "Enchanted", "Superbad", "Knocked Up", "American Gangster", "Bee Movie", "Rush Hour 3", "Fantastic Four: Rise of the Silver Surfer"],
    y2006: ["Pirates of the Caribbean: Dead Man's Chest", "The Da Vinci Code", "Ice Age: The Meltdown", "Casino Royale", "Night at the Museum", "Cars", "X-Men: The Last Stand", "Mission: Impossible III", "Superman Returns", "Happy Feet", "Over the Hedge", "The Devil Wears Prada", "Click", "Talladega Nights: The Ballad of Ricky Bobby", "Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan", "The Departed", "Dreamgirls", "The Pursuit of Happyness", "Apocalypto", "Flushed Away"],
    y2005: ["Harry Potter and the Goblet of Fire", "Star Wars: Episode III - Revenge of the Sith", "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", "War of the Worlds", "King Kong", "Madagascar", "Mr. & Mrs. Smith", "Charlie and the Chocolate Factory", "Batman Begins", "Hitch", "Wedding Crashers", "Fantastic Four", "Robots", "The 40-Year-Old Virgin", "Chicken Little", "Harry Potter and the Prisoner of Azkaban", "The Longest Yard", "The Island", "Madagascar", "Crash"],
    y2004: ["Shrek 2", "Spider-Man 2", "The Passion of the Christ", "Meet the Fockers", "The Incredibles", "Harry Potter and the Prisoner of Azkaban", "The Day After Tomorrow", "The Bourne Supremacy", "National Treasure", "The Polar Express", "Shark Tale", "I, Robot", "The Aviator", "Troy", "Meet the Parents", "Van Helsing", "Fahrenheit 9/11", "Lemony Snicket's A Series of Unfortunate Events", "Garfield", "The Village"],
    y2003: ["The Lord of the Rings: The Return of the King", "Pirates of the Caribbean: The Curse of the Black Pearl", "The Matrix Reloaded", "Finding Nemo", "The Last Samurai", "Bruce Almighty", "X2: X-Men United", "Elf", "Terminator 3: Rise of the Machines", "The Italian Job", "The Hulk", "Bad Boys II", "S.W.A.T.", "Seabiscuit", "Holes", "Master and Commander: The Far Side of the World", "School of Rock", "2 Fast 2 Furious", "The League of Extraordinary Gentlemen", "Underworld"],
    y2002: ["The Lord of the Rings: The Two Towers", "Spider-Man", "Star Wars: Episode II - Attack of the Clones", "Harry Potter and the Chamber of Secrets", "Men in Black II", "Ice Age", "My Big Fat Greek Wedding", "Signs", "Austin Powers in Goldmember", "Minority Report", "Chicago", "Lilo & Stitch", "Scooby-Doo", "XXX", "Catch Me If You Can", "The Ring", "The Santa Clause 2", "Blade II", "The Bourne Identity", "8 Mile"],
    y2001: ["Harry Potter and the Sorcerer's Stone", "The Lord of the Rings: The Fellowship of the Ring", "Shrek", "Monsters, Inc.", "Ocean's Eleven", "Pearl Harbor", "Jurassic Park III", "Planet of the Apes", "A Beautiful Mind", "Hannibal", "The Mummy Returns", "A.I. Artificial Intelligence", "The Fast and the Furious", "Atlantis: The Lost Empire", "Dr. Dolittle 2", "Black Hawk Down", "Moulin Rouge!", "The Princess Diaries", "Spy Kids", "Training Day"],
    y2000: ["Mission: Impossible 2", "Gladiator", "Cast Away", "What Women Want", "Dinosaur", "How the Grinch Stole Christmas", "Meet the Parents", "The Perfect Storm", "X-Men", "What Lies Beneath", "Scary Movie", "The Patriot", "Remember the Titans", "Chicken Run", "Meet the Fockers", "Gone in 60 Seconds", "Hollow Man", "The Emperor's New Groove", "Erin Brockovich", "The Flintstones in Viva Rock Vegas"]
};





  

// for trending page
function land(){
    let promiseArr=[]
landingArr.forEach((names)=>{
   promiseArr.push( getM(names));

})
Promise.all(promiseArr).then((d)=>{
    let combiner=""
    let i=1;
        d.forEach((dd)=>{
            combiner=combiner+ `<div class="box">
            <div class="id${i} common flex"><img id=${dd.Title} src=${dd.Poster}></div>
            <p>${dd.Title}</p>
        </div> `
        i++;
        })
        document.querySelector("#container1").innerHTML=combiner;
})
.catch((error) => {
    console.error('Error occurred:', error);
});
}
land();
let preId1="list1"
document.querySelector("#lists").addEventListener("click",(event)=>{
   
    // when something was searched and clicked on the lists it will not display unless this
    document.querySelector(".trailer").innerHTML=""
    document.querySelector("#sBox").value=""
    document.querySelector(".searchC").style.display="none"
    document.querySelector("#container1").style.display="flex"
    document.querySelector("#container2").style.display="flex"
   // reseting the earlier style 
   document.querySelector(`#${preId1}`).style.color="white";
    // changing the color of the list on click 
    document.querySelector(`#${event.target.id}`).style.color="coral";
    preId1=event.target.id;

let promise2Arr=[]

    movieLists[event.target.id].forEach((names)=>{
        promise2Arr.push( getM(names));
    })
     Promise.all(promise2Arr).then((d)=>{
         let combiner=""
         let i=1;
             d.forEach((dd)=>{
                 combiner=combiner+ `<div class="box">
                 <div class="id${i} common flex"><img id=${dd.Title} src=${dd.Poster}></div>
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
                 <div class="id${i} common flex"><img id=${dd.Title} src=${dd.Poster}></div>
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
    let preId2="action"
    document.querySelector("#container2").addEventListener("click",(event)=>{
        // reseting the color right after the click 
        console.log(event.target.id)
        document.querySelector(`#${preId2}`).style.color="white";

        // changing the color after click 
        document.querySelector(`#${event.target.id}`).style.color="coral";
        preId2=event.target.id;
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
                    <div class="id${i} common flex"><img id=${dd.Title} src=${dd.Poster}></div>
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
document.querySelector("#search").addEventListener("submit",(e)=>{
    e.preventDefault();
    search();
    console.log("searched")

})
    function search(){
     f=1;
    if(sBox.value==""){
        
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
}


    
async function getM(mName){
const p1=await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${mName}`)
const data=await p1.json();
return data;
}

// for trailer
async function getTailer(names){
    const p1=await fetch(`https://www.googleapis.com/youtube/v3/search?key=${googleApiKey}&q=${names} trailer&type=video`)
    const p2=await p1.json();
    console.log(p2)
    return p2;
}
document.querySelector("#Home").addEventListener("click",(event)=>{
        console.log("ok")
       if(f==1) 
       document.querySelector(".trailer").innerHTML=""
        document.querySelector("#sBox").value=""
        document.querySelector(".searchC").style.display="none"
        document.querySelector("#container1").style.display="flex"
        document.querySelector("#container2").style.display="flex"
        land();
        document.querySelector(`#${preId1}`).style.color="white"
        document.querySelector(`#${preId2}`).style.color="white"

})
document.querySelector("#container1").addEventListener("click",(event)=>{
    if(event.target.tagName.toLowerCase()=="img"){
    const p1=event.target.parentNode
    const mainp=p1.parentNode
    sBox.value=`${mainp.querySelector("p").innerHTML}`
    search();
    }
})

