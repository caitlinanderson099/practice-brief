// Mapbox Token
// mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';





/** ---------------- PRODUCT CARD DATA -------------- */
const games = [
    // FIRST ROW - Sims Games
    {
        id: 1,
        name: "The Sims",
        price: "$0.00",
        date: "04/04/2000",
        images: ["/img/games/sims1-game(1).webp", "/img/games/sims1-game(2).webp", "/img/games/sims1-game(3).webp"],
        description: "lorem lorem lorem",
        category: "Game Franchise"

    },
    {
        id: 2,
        name: "The Sims 2",
        price: "$49.88",
        date: "14/09/2004",
        images: ["/img/games/sims2-game(1).webp", "/img/games/sims2-game(2).webp", "/img/games/sims2-game(3).webp"],
        description: "lorem lorem lorem",
        category: "Game Franchise"
    },
    {
        id: 3,
        name: "The Sims 3",
        price: "$39.99",
        date: "02/06/2009",
        images: ["/img/games/sims3-game(1).webp", "/img/games/sims3-game(2).webp", "/img/games/sims3-game(3).webp"],
        description: "lorem lorem lorem",
        category: "Game Franchise"
    },
    {
        id: 4,
        name: "The Sims 4",
        price: "$0.00",
        date: "02/09/2014",
        images: ["/img/games/sims4-game(1).webp", "/img/games/sims4-game(2).webp", "/img/games/sims4-game(3).webp"],
        description: "lorem lorem lorem",
        category: "Game Franchise",
    },

    // SECOND ROW - Sims Packs (two expansions for sims 3 and sims 4)
    {
        id: 5,
        name: "The Sims 3 Late Night Expansion Pack",
        price: "$19.99",
        date: "10/10/2010",
        images: ["/img/expansion/sims3-latenight-expansion(1).webp", "/img/games/sims3-latenight-expansion(2).webp", "/img/games/sims3-latenight-expansion(3).webp"],
        description: "lorem lorem lorem",
        category: "Expansion Pack",
    },
    {
        id: 6,
        name: "The Sims 4 Get To Work Expansion Pack",
        price: "$39.99",
        date: "30/03/2015",
        images: ["/img/expansion/sims4-get-to-work-expansion(1).webp", "/img/expansion/sims4-get-to-work-expansion(2).webp", "/img/expansion/sims4-get-to-work-expansion(3).webp"],
        description: "lorem lorem lorem",
        category: "Expansion Pack"
    },
    {
        id: 7,
        name: "The Sims 3 Seasons Expansion Pack",
        price: "$19.99",
        date: "13/11/2012",
        images: ["/img/expansion/sims3-seasons-expansion(1).webp", "/img/expansion/sims3-seasons-expansion(1).webp", "/img/expansion/sims3-seasons-expansion(1).webp"],
        description: "lorem lorem lorem",
        category: "Expansion Pack"
    },
    {
        id: 8,
        name: "The Sims 4 For Rent Expansion Pack",
        price: "$49.95",
        date: "07/12/2023",
        images: ["/img/expansion/sims4-for-rent-expansion(1).webp", "/img/expansion/sims4-for-rent-expansion(1).webp", "/img/expansion/sims4-for-rent-expansion(1).webp"],
        description: "lorem lorem lorem",
        category: "Expansion Pack"
    },
    // THIRD ROW - Sims Add-Ons (two addons for sims 3 and sims 4)
    {
        id: 9,
        name: "The Sims 3 Roaring Heights",
        price: "$19.95",
        date: "12/12/2013",
        images: ["/img/addons/sims3-roaring-heights-addon(1).webp", "/img/addons/sims3-roaring-heights-addon(2).webp", "/img/addons/sims3-roaring-heights-addon(3).webp"],
        description: "lorem lorem lorem",
        category: "Add-ons"
    },
    {
        id: 10,
        name: "The Sims 4 Dine Out",
        price: "$29.95",
        date: "07/06/2016",
        images: ["/img/addons/sims4-dine-out-addon(1).webp", "/img/addons/sims4-dine-out-addon(2).webp", "/img/addons/sims4-dine-out-addon(3).webp"],
        description: "lorem lorem lorem",
        category: "Add-ons"

    },
    {
        id: 11,
        name: "The Sims 3 Barnacle Bay",
        price: "$19.95",
        date: "23/09/2010",
        images: ["/img/addons/sims3-barnacle-bay-addon(1).webp", "/img/addons/sims3-barnacle-bay-addon(2).webp", "/img/addons/sims3-barnacle-bay-addon(3).webp"],
        description: "lorem lorem lorem",
        category: "Add-ons"
    },
    {
        id: 12,
        name: "The Sims 4 Laundry Day",
        price: "$14.95",
        date: "16/01/2018",
        images: ["/img/addons/sims4-laundry-addon(1).webp", "/img/addons/sims4-laundry-addon(2).webp", "/img/addons/sims4-laundry-addon(3).webp"],
        description: "The Sims 4 Laundry Day Stuff Pack is an expansion for the popular life simulation game The Sims 4. It introduces the concept of laundry management to gameplay, allowing players to add washing machines, dryers, and laundry-related items to their Sims' homes. ",
        category: "Add-ons"
    },

]; // end of array data

// grab the input elements - the filters
const gameFilter = document.getElementById('game');
const categoryFilter = document.getElementById('category');
const dateFilter = document.getElementById('date');

// grab the sorting buttons
const highToLowBtn = document.getElementById('price-high-to-low-btn');
const lowToHighBtn = document.getElementById('price-low-to-high-btn');
const alphabeticalBtn = document.getElementById('alphabetical-btn');

/** --------- CLICK EVENT FUNCTIONS --------- */

// this is the onChange event on each filter

// Game Franchise:
gameFilter.addEventListener("change", function () {
    console.dir(gameFilter.value);
    filterAndPopulateCards(); // define this later down the code
});

// Category:
categoryFilter.addEventListener("change", function () {
    console.dir(categoryFilter.value);
    filterAndPopulateCards(); // define this later down the code
});

// Release Date:
dateFilter.addEventListener("change", function () {
    console.dir(dateFilter.value);
    filterAndPopulateCards(); // define this later down the code
});


// this is the click event on each sorting button

// High to Low Price:
highToLowBtn.addEventListener("click", function () {
    const filteredGames = filterGames();
    const sortedGames = sortGamesByPriceHighToLow(filteredGames); // this is sorting the filtered game cards by their price HIGH to LOW
    populateCards(sortedGames);
});

// Low to High Price:
lowToHighBtn.addEventListener("click", function () {
    const filteredGames = filterGames();
    const sortedGames = sortGamesByPriceLowToHigh(filteredGames); // this is sorting the filtered game cards by their price LOW to HIGH
    populateCards(sortedGames);
});

// Alphabetical Name:
alphabeticalBtn.addEventListener("click", function () {
    const filteredGames = filterGames();
    const sortedGames = sortGamesAlphabetical(filteredGames); // this is sorting the filtered game cards ALPHABETICALLY by NAME
    populateCards(sortedGames);
});

/** --------- FILTERING FUNCTION AND THEIR LOGIC --------- */

// Filter Cards - this will return an array of filtered game cards
function filterGames() {
    const filteredGames = games.filter(game => {
        // first check if game franchise matches
        const gameFranchise = game.name.toLowerCase();
        const filterValue = gameFilter.value.toLowerCase();
        // if it doesn't match, it will return as false and won't add to the array
        if (filterValue && !gameFranchise.includes(filterValue)) {
            return false
        };

        // come back to the other filtering buttons!!


        // if all of these conditions are true(pass), include the game cards in the filtered array
        return true;
    });

    // return the filtered games array
    return filteredGames;
};

/** --------- SORTING FUNCTIONS --------- */

// Sort the cards by price LOW to HIGH:
function sortGamesByPriceLowToHigh(games) {
    return games.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/\$/g, '').replace(/,/g, ''));
        const priceB = parseFloat(b.price.replace(/\$/g, '').replace(/,/g, ''));
        return priceA - priceB;
    })
};

// Sort the cards by price HIGH to LOW:
function sortGamesByPriceHighToLow(games) {
    return games.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/\$/g, '').replace(/,/g, ''));
        const priceB = parseFloat(b.price.replace(/\$/g, '').replace(/,/g, ''));
        return priceB - priceA;
    })
};

// Sort the cards ALPHABETICALLY by NAME:
function sortGamesAlphabetical(games) {
    return games.sort((a, b) => {
        const nameA = a.name.toLowerCase(); // this sets the game a name to lowercase
        const nameB = b.name.toLowerCase(); // this sets the game b name to lowercase
        return nameA.localeCompare(nameB);
    });
};

/** --------- POPULATING THE CARDS FUNCTIONS --------- */

// Filter then populate the cards
function filterAndPopulateCards() {
    const filteredGames = filterGames();
    // sort the games before populating
    populateCards(filteredGames);
};

// This is the initial population of the cards
filterAndPopulateCards();


// Populate Cards Function
function populateCards(filteredResults) {
    // grab the results(cards) div from html
    const resultsDiv = document.getElementById('cards');
    // clear any previous results
    resultsDiv.innerHTML = '';

    // to check if the filtered games is empty
    if (filteredResults.length === 0) {
        resultsDiv.innerHTML = ` <p class="no-results"> No Results Found </p> `
    } else {
        // if filteredResults is not empty
        filteredResults.forEach(game => {
            // create the card for that game:
            const gameCardHTML = `
                <div class="card">
                    <div class="swiper">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                            <!-- Slides -->
                            ${game.images.map((imageUrl, index) => `
                            <div class="swiper-slide">
                                <img src="${imageUrl}" alt="${game.name} image ${index + 1}" class="game-image" value="${game.id}">
                            </div>
                        `).join('')}
                         </div>
                         <div class="swiper-pagination"></div>
                    </div>
                    <div class="game-details">
                        <div class="more-details">
                        <h2>${game.name}</h2>
                        <p>${game.category} ${game.date}</p>
                        <h4>${game.price}</h4>
                        </div>
                    </div>
                    
                    </div>
                </div>
             `;
            resultsDiv.innerHTML += gameCardHTML;

            // Re-initialize Swiper Instances
            const swipers = document.querySelectorAll('.swiper');
            swipers.forEach(swiperEl => {
                new Swiper(swiperEl, {
                    direction: 'vertical',
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                })
            });


        });
    };
}











/** ------------- SWIPER JAVASCRIPT ------------ */

// Initialise Swiper JS
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // enable clickable pagination bullets
    }
});
