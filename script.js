// Mapbox Token
// mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';





/** ---------------- PRODUCT CARD DATA -------------- */
const games = [
    // FIRST ROW - Sims Games
    {
        id: 1,
        name: "The Sims Online",
        price: "$0.00",
        date: "04/04/2000",
        images: ["/img/games/sims1-game(1).webp", "/img/games/sims1-game(2).webp", "/img/games/sims1-game(3).webp"],
        description: "lorem lorem lorem",
        category: "Base Game"

    },
    {
        id: 2,
        name: "The Sims 2",
        price: "$49.88",
        date: "14/09/2004",
        images: ["/img/games/sims2-game(1).webp", "/img/games/sims2-game(2).webp", "/img/games/sims2-game(3).webp"],
        description: "lorem lorem lorem",
        category: "Base Game"
    },
    {
        id: 3,
        name: "The Sims 3",
        price: "$39.99",
        date: "02/06/2009",
        images: ["/img/games/sims3-game(1).webp", "/img/games/sims3-game(2).webp", "/img/games/sims3-game(3).webp"],
        description: "lorem lorem lorem",
        category: "Base Game"
    },
    {
        id: 4,
        name: "The Sims 4",
        price: "$0.00",
        date: "02/09/2014",
        images: ["/img/games/sims4-game(1).webp", "/img/games/sims4-game(2).webp", "/img/games/sims4-game(3).webp"],
        description: "lorem lorem lorem",
        category: "Base Game",
    },

    // SECOND ROW - Sims Packs (two expansions for sims 3 and sims 4)
    {
        id: 5,
        name: "The Sims 3 Late Night",
        price: "$19.99",
        date: "10/10/2010",
        images: ["/img/expansion/sims3-latenight-expansion(1).webp", "/img/expansion/sims3-latenight-expansion(2).webp", "/img/expansion/sims3-latenight-expansion(3).webp"],
        description: "lorem lorem lorem",
        category: "Expansion Pack",
    },
    {
        id: 6,
        name: "The Sims 4 Get To Work",
        price: "$39.99",
        date: "30/03/2015",
        images: ["/img/expansion/sims4-get-to-work-expansion(1).webp", "/img/expansion/sims4-get-to-work-expansion(2).webp", "/img/expansion/sims4-get-to-work-expansion(3).webp"],
        description: "lorem lorem lorem",
        category: "Expansion Pack"
    },
    {
        id: 7,
        name: "The Sims 3 Seasons",
        price: "$19.99",
        date: "13/11/2012",
        images: ["/img/expansion/sims3-seasons-expansion(1).webp", "/img/expansion/sims3-seasons-expansion(2).webp", "/img/expansion/sims3-seasons-expansion(3).webp"],
        description: "lorem lorem lorem",
        category: "Expansion Pack"
    },
    {
        id: 8,
        name: "The Sims 4 For Rent",
        price: "$49.95",
        date: "07/12/2023",
        images: ["/img/expansion/sims4-for-rent-expansion(1).webp", "/img/expansion/sims4-for-rent-expansion(2).webp", "/img/expansion/sims4-for-rent-expansion(3).webp"],
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
        name: "The Sims 4 Tiny Living",
        price: "$29.95",
        // change to just the year 
        date: "07/06/2016",
        images: ["/img/addons/sims4-tiny-living-addon(1).webp", "/img/addons/sims4-tiny-living-addon(2).webp", "/img/addons/sims4-tiny-living-addon(3).webp"],
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
                        <h3>${game.category} </h3> 
                        </p>${game.date}</p>
                        <div class="price-add"> <button> <i class="fa-solid fa-cart-plus"></i> </button> <h4> ${game.price}</h4> </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
             `;
            resultsDiv.innerHTML += gameCardHTML;
            attachModalToImages(); // attaching event listeners straight after population

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


/** ------------- MODAL FUNCTIONS ------------ */

// this is attaching a click event to each card and opens the modal
function attachModalToImages() {
    // first step, grab all the images of the cards
    const imageS = document.querySelectorAll('.game-image');
    // second step, get the details modal from the html
    const detailsModal = document.getElementById('detailsModal');

    // third step, run a for loop over the images array to add the click event to each image
    for (let i = 0; i < imageS.length; i++) {
        imageS[i].addEventListener('click', function(event) {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            detailsModal.dataset.scrollPosition = scrollPosition // this stores the scroll position in the modal's dataset (smart modal hehe)
            const rect = event.target.getBoundingClientRect(); // this is letting the coder know that it is going to get the position of the clicked image, relative to the viewport
            const imageTop = rect.top + scrollPosition; // this calculates the top position of the clicked image
            const windowHeight = window.innerHeight;
            const dialogHeight = detailsModal.offsetHeight // this is the height of the modal
            const viewportTop = scrollPosition;

            let dialogTop = viewportTop + (windowHeight - dialogHeight) / 2; // this will calculate the top position

            //  these lines of code above are defining the scroll position for the modal

            // this is to ensure that the dialog doesn't go above or below the device viewport
            if (dialogTop < imageTop) {
                dialogTop = imageTop; // this places the dialog just below the clicked image, if there is enough space for it
            } else if (dialogTop + dialogHeight > windowHeight + viewportTop){
                dialogTop = windowHeight + viewportTop - dialogHeight; // this will place the dialog at the bottom of the device viewport if there was enough space (if the statement above is false)
            };

            detailsModal.style.top = dialogTop + 'px'; // this sets the top position of the dialog

            console.log('image click is working');
            detailsModal.showModal(); // this will open the modal when images are clicked
            document.body.classList.add('modal-open'); // this adds the class to disable any scrolling
            // add the close function
            closeDetailsModal();
            // this populates the modal with the correct information
            console.log(event.target.getAttribute('value')); 
            populateModal(event.target.getAttribute('value'));
        });
    };
};

// Closing Modal Function
function closeDetailsModal() {
    // first step, grab the close button of modal from html
    const close = document.getElementById('closeModal');
    // second step, grab the modal
    const detailsModal = document.getElementById('detailsModal');

    // third step, add the click event onto the close modal, to close the modal
    close.addEventListener('click', function () {
        detailsModal.close();
        document.body.classList.remove('modal-open'); // this removes the 'scroll lock' that we placed above
        const scrollPosition = detailsModal.dataset.scrollPosition || 0;
        window.scrollTo(0, scrollPosition);
    });
};

// population of the modal
function populateModal(imagesId) {
    // first step, grab the modal
    const detailsModal = document.querySelector('.modal-content');

     // Get the game object based on imagesId
     const game = games.find(game => game.id === parseInt(imagesId));

     // Create HTML for images
     const imagesHTML = game.images.map((imageUrl, index) => `
         <img src="${imageUrl}" alt="${game.name} image ${index + 1}" class="modal-image">
     `).join('');

    // the content within the modal
    detailsModal.innerHTML = `
         
        ${imagesHTML}
        <h2>${games[imagesId - 1].name}</h2>
        <p>${games[imagesId - 1].category}</p>
        <p>${games[imagesId - 1].date}</p>
        <p class="game-description">${games[imagesId - 1].description}</p>
        <div class="modal-price">
            <h4>${games[imagesId - 1].price}</h4>
        </div>
        <button class="purchase-button"> Add To Cart </button>
    `;
} ;











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
