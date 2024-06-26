// Mapbox Token
mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';



/** ---------------- PRODUCT CARD DATA -------------- */
const games = [
    // FIRST ROW - Sims Games
    {
        id: 1,
        name: "The Sims Online",
        price: "$0.00",
        date: "2000",
        images: ["/img/games/sims1-game(1).webp", "/img/games/sims1-game(2).webp", "/img/games/sims1-game(3).webp"],
        description: "The Sims Online takes the beloved life simulation series into the realm of multiplayer gaming, allowing players to interact and socialize in a virtual world populated by other players' Sims. Create your own unique Sim, build a home, and explore a dynamic online community where you can chat, form relationships, and collaborate with others. From pursuing careers and building businesses to participating in community events and activities, The Sims Online offers a vibrant and immersive multiplayer experience that brings the magic of the Sims universe to life in a whole new way.",
        category: "Base Games"

    },
    {
        id: 2,
        name: "The Sims 2",
        price: "$49.88",
        date: "2004",
        images: ["/img/games/sims2-game(1).webp", "/img/games/sims2-game(2).webp", "/img/games/sims2-game(3).webp"],
        description: "The Sims 2 Base Game introduces players to the iconic life simulation series with enhanced graphics, deeper gameplay mechanics, and a wealth of new features. Create and control virtual characters known as Sims, guiding them through life's journey from cradle to grave. Build and decorate homes, pursue careers, form relationships, and explore a vibrant neighborhood filled with opportunities and challenges. With improved AI, expanded customization options, and engaging storytelling tools, The Sims 2 Base Game offers an immersive and memorable gaming experience that captivates players of all ages.",
        category: "Base Games"
    },
    {
        id: 3,
        name: "The Sims 3",
        price: "$39.99",
        date: "2009",
        images: ["/img/games/sims3-game(1).webp", "/img/games/sims3-game(2).webp", "/img/games/sims3-game(3).webp"],
        description: "The Sims 3 Base Game sets the stage for endless possibilities in the world of simulation gaming. Players can create unique Sims with distinct personalities, aspirations, and appearances, then guide them through the ups and downs of life in a dynamic virtual world. From building dream homes and pursuing careers to forming relationships and exploring diverse neighborhoods, players have the freedom to shape every aspect of their Sims' lives. With innovative features like open-world exploration, deep customization options, and a wealth of content to discover, The Sims 3 Base Game offers an immersive and unforgettable experience for players to enjoy endless creativity and storytelling.",
        category: "Base Games"
    },
    {
        id: 4,
        name: "The Sims 4",
        price: "$0.00",
        date: "2014",
        images: ["/img/games/sims4-game(1).webp", "/img/games/sims4-game(2).webp", "/img/games/sims4-game(3).webp"],
        description: "The Sims 4 Base Game is the foundation of the beloved life simulation series, offering players the opportunity to create and control virtual lives in a dynamic and immersive world. From designing unique Sims with customizable personalities and appearances to building and decorating dream homes, players can unleash their creativity and shape the destinies of their Sims. Dive into a rich and vibrant neighborhood filled with diverse characters, explore exciting careers, and embark on countless adventures as you navigate the joys and challenges of everyday life. With endless possibilities for storytelling and self-expression, The Sims 4 Base Game is where the journey begins for players to craft their own unique Sims experience.",
        category: "Base Games",
    },

    // SECOND ROW - Sims Packs (two expansions for sims 3 and sims 4)
    {
        id: 5,
        name: "The Sims 3 Late Night",
        price: "$19.99",
        date: "2010",
        images: ["/img/expansion/sims3-latenight-expansion(1).webp", "/img/expansion/sims3-latenight-expansion(2).webp", "/img/expansion/sims3-latenight-expansion(3).webp"],
        description: "The Sims 3 Late Night invites players to experience the vibrant nightlife of a bustling city. From exclusive clubs to trendy lounges, Sims can revel in the excitement of urban nightlife. Explore glamorous hotspots, mingle with celebrities, and pursue fame and fortune as your Sims socialize, party, and network their way to the top. Whether they aspire to be a rockstar, a vampire, or a master mixologist, Late Night offers endless possibilities for thrilling adventures and unforgettable moments in the electrifying world of city nightlife.",
        category: "Expansion Packs",
    },
    {
        id: 6,
        name: "The Sims 4 Get To Work",
        price: "$39.99",
        date: "2015",
        images: ["/img/expansion/sims4-get-to-work-expansion(1).webp", "/img/expansion/sims4-get-to-work-expansion(2).webp", "/img/expansion/sims4-get-to-work-expansion(3).webp"],
        description: "The Sims 4 Get to Work empowers players to explore new career paths and take an active role in their Sims' professional lives. From opening a bustling retail store to solving crimes as a detective, players can delve into three dynamic careers: Doctor, Detective, and Scientist. Embark on thrilling adventures, solve mysteries, and conduct groundbreaking experiments while shaping the careers and aspirations of your Sims. With Get to Work, the world of The Sims 4 expands beyond the home, offering exciting opportunities for creativity, exploration, and success in the workplace.",
        category: "Expansion Packs"
    },
    {
        id: 7,
        name: "The Sims 3 Seasons",
        price: "$19.99",
        date: "2012",
        images: ["/img/expansion/sims3-seasons-expansion(1).webp", "/img/expansion/sims3-seasons-expansion(2).webp", "/img/expansion/sims3-seasons-expansion(3).webp"],
        description: "The Sims 3 Seasons adds dynamic weather and seasonal changes to the virtual world of The Sims 3. Players can experience the joys and challenges of each season, from summer heatwaves to winter snowstorms. Engage in seasonal activities such as gardening in spring, swimming in summer, harvesting crops in autumn, and skiing in winter. Witness the impact of weather on Sims' lives, relationships, and surroundings, as they celebrate holidays, festivals, and special events throughout the year. With Seasons, every day in The Sims 3 becomes a new and immersive journey through the ever-changing beauty and unpredictability of nature.",
        category: "Expansion Packs"
    },
    {
        id: 8,
        name: "The Sims 4 For Rent",
        price: "$49.95",
        date: "2023",
        images: ["/img/expansion/sims4-for-rent-expansion(1).webp", "/img/expansion/sims4-for-rent-expansion(2).webp", "/img/expansion/sims4-for-rent-expansion(3).webp"],
        description: "The Sims 4 For Rent is an expansion pack that revolutionizes the way players engage with the game's housing mechanics. Embracing the concept of rental properties, Sims can now invest in real estate and become landlords or tenants in a dynamic housing market. From managing properties and setting rental rates to dealing with unruly tenants or landlords, players navigate the challenges and rewards of property ownership in a bustling virtual world. Whether your Sims aim to build a rental empire or find their dream home, For Rent offers a fresh and immersive gameplay experience that expands the possibilities of life simulation in The Sims 4.",
        category: "Expansion Packs"
    },
    // THIRD ROW - Sims Add-Ons (two addons for sims 3 and sims 4)
    {
        id: 9,
        name: "The Sims 3 Roaring Heights",
        price: "$19.95",
        date: "2013",
        images: ["/img/addons/sims3-roaring-heights-addon(1).webp", "/img/addons/sims3-roaring-heights-addon(2).webp", "/img/addons/sims3-roaring-heights-addon(3).webp"],
        description: "The Sims 3 Roaring Heights whisks players away to a glamorous and bustling city inspired by the roaring twenties. Set against the backdrop of a vibrant metropolis, Sims can chase their dreams amidst towering skyscrapers and luxurious estates. From lavish parties to exciting career opportunities, experience the glitz and glamour of a bygone era. Whether your Sims aspire to be a dazzling socialite, a successful entrepreneur, or a daring adventurer, Roaring Heights offers endless possibilities for excitement and exploration in this dynamic urban playground.",
        category: "Add-ons"
    },
    {
        id: 10,
        name: "The Sims 4 Tiny Living",
        price: "$29.95", 
        date: "2016",
        images: ["/img/addons/sims4-tiny-living-addon(1).webp", "/img/addons/sims4-tiny-living-addon(2).webp", "/img/addons/sims4-tiny-living-addon(3).webp"],
        description: "The Sims 4 Tiny Living introduces a cozy and minimalist lifestyle to the beloved simulation game. In this expansion pack, players can downsize their Sims' living spaces and embrace the tiny house movement. From compact dwellings to space-saving furniture and décor, experience the charm and challenges of living with less. Whether your Sims seek eco-friendly living or crave the simplicity of a smaller home, Tiny Living offers unique opportunities for creativity and resourcefulness in shaping their virtual lives.",
        category: "Add-ons"

    },
    {
        id: 11,
        name: "The Sims 3 Barnacle Bay",
        price: "$19.95",
        date: "2010",
        images: ["/img/addons/sims3-barnacle-bay-addon(1).webp", "/img/addons/sims3-barnacle-bay-addon(2).webp", "/img/addons/sims3-barnacle-bay-addon(3).webp"],
        description: "The Sims 3 Barnacle Bay is an expansion pack for the popular life simulation game The Sims 3. Set in a picturesque coastal town, players can explore a vibrant community filled with new characters, activities, and locales. Dive into the mysteries of Barnacle Bay, uncover hidden treasures, and embark on exciting adventures as you shape the lives of your Sims in this captivating seaside setting.",
        category: "Add-ons"
    },
    {
        id: 12,
        name: "The Sims 4 Laundry Day",
        price: "$14.95",
        date: "2018",
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
        const filterGameValue = gameFilter.value.toLowerCase();
        // if it doesn't match, it will return as false and won't add to the array
        if (filterGameValue && !gameFranchise.includes(filterGameValue)) {
            return false
        };
        // this code above converts the game franchise of cards to lowercase which is easier to define when user clicks the filter button


        const gameCategory = game.category.toLowerCase();
        const filterCategoryValue = categoryFilter.value.toLowerCase();
        if (filterCategoryValue && gameCategory !== filterCategoryValue) {
            return false
        };
          // this code above converts the game category of cards to lowercase which is easier to define when user clicks the filter button

        const gameDate = game.date;
        const filterDateValue = dateFilter.value;
        if (filterDateValue && gameDate !== filterDateValue) {
            return false
        };
          // this code above converts the game release date of cards to lowercase which is easier to define when user clicks the filter button


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
            detailsModal.dataset.scrollPosition = scrollPosition // this stores the scroll position in the modal's dataset
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
     const imagesHTML = `<img src="${game.images[0]}" alt="${game.name} image 1" class="modal-image"> `

    // the content within the modal
    detailsModal.innerHTML = `
        ${imagesHTML}
        <h2>${games[imagesId - 1].name}</h2>
        <h3>${games[imagesId - 1].category}</h3>
        <h4>${games[imagesId - 1].date}</h4>
        <p class="game-description">${games[imagesId - 1].description}</p>
            <h4 class="modal-price">${games[imagesId - 1].price}</h4>
        <button class="purchase-button"> Add To Cart </button>
    `;
} ;




/** ---------------- MAPBOX JAVASCRIPT -------------- */
const locations = [
    // JBHIFI Location - store 
    {
        name: 'JBHIFI Queensgate',
        address: 'Westfield Shopping Centre 45 Knights Road, Lower Hutt',
        longitude:  174.90618511316538,
        latitude: -41.209787374508636,
    },
    {
        name: 'Noel Lemming Lower Hutt',
        address: '31 Knights Road, Lower Hutt',
        longitude:  174.90434298988296,
        latitude: -41.21054290147049,
    },
    {
        name: 'The Warehouse Stationary Petone',
        address: 'Annie Huggan Grove, Petone',
        longitude:  174.8704595543434,
        latitude: -41.22366919032168, 
    }
];

// Initialize the map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [174.90765, -41.212538],
    zoom: 12
});

// Add markers to the map
locations.forEach(location => {
    const marker = new mapboxgl.Marker()
        .setLngLat([location.longitude, location.latitude])
        .setPopup(new mapboxgl.Popup({ offset: 25})
        .setHTML(`<h3>${location.name}</h3><p>${location.address}</p>`))
        .addTo(map);
});

// Create buttons:
// Step 1: Get the button container
const buttonsContainer = document.querySelector('.buttons');

locations.forEach((location, index) => {
    const button = document.createElement('button'); // makes a button
    button.className = 'button'; // attach a class name to the button
    button.textContent = location.name; // places the name from the locations array inside the button
    // onClick to do the 'fly to'
    button.addEventListener('click', function() {
        map.flyTo({
            center: [location.longitude, location.latitude],
            essential: true,
            zoom: 15
        }); // end of fly to
    }); // end of onClick
    // append buttons to the container
    buttonsContainer.appendChild(button);
});


let openHam = document.getElementById ('openHam');
let closeHam = document.getElementById ('closeHam');                    //note: when using id's always have camel caps & for classes have hyphens//
let navigationItems = document.getElementById ('nav-items');

// Arrow Function with arguments and parameters //

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

// Add function to click events with the correct parameters //

openHam.addEventListener ('click', () => hamburgerEvent ("flex", "block", "none"));
closeHam.addEventListener ('click', () => hamburgerEvent ("none", "none", "block"));




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

/** ------------- END OF JAVASCRIPT ------------ */