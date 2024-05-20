$(document).ready(function () {

/** ---------------- GRAB THE PRODUCT CARD DATA -------------- */
const figures = [
     // FIRST ROW - DREAM WORKS COMPANY
    {
        id: 1,
        name: "Shrek Pop Figure",
        franchise: "Shrek",
        company: "DreamWorks",
        price: "$20.00",
        images: ["/img/shrek-pop(1).webp", "/img/shrek-pop(2).webp", "/img/shrek-pop(3).webp"],
        description: ""
       
    },
    {
        id: 2,
        name: "Fiona Pop Figure",
        franchise: "Shrek",
        company: "DreamWorks",
        price: "$20.00",
        images: ["/img/fiona-pop(1).webp", "/img/fiona-pop(2).webp", "/img/fiona-pop(3).webp"],
        description: ""
    },
    {
        id: 3,
        name: "Donkey Pop Figure",
        franchise: "Shrek",
        company: "DreamWorks",
        price: "$20.00",
        images: ["/img/donkey-pop(1).webp", "/img/donkey-pop(2).webp", "/img/donkey-pop(3).webp"],
        description: ""
    },
    {
        id: 4,
        name: "Puss in Boots Pop Figure",
        franchise: "Shrek, Puss in Boots",
        company: "DreamWorks",
        price: "$20.00",
        images: ["/img/puss-pop(1).webp", "/img/puss-pop(2).webp", "/img/puss-pop(3).webp"],
        description: ""
    },
    // SECOND ROW - DISNEY COMPANY
    {
        id: 5,
        name: "Ariel Pop Figure",
        franchise: "The Little Mermaid",
        company: "Disney",
        price: "$20.00",
        images: ["/img/ariel-pop(1).webp", "/img/ariel-pop(2).webp", "/img/ariel-pop(3).webp"],
        description: ""
    },
    {
        id: 6,
        name: "Ursula Pop Figure",
        franchise: "The Little Mermaid",
        company: "Disney",
        price: "$20.00",
        images: ["/img/ursula-pop(1).webp", "/img/ursula-pop(2).webp", "/img/ursula-pop(3).webp"],
        description: ""
    },
    {
        id: 7,
        name: "Prince Eric Pop Figure",
        franchise: "The Little Mermaid",
        company: "Disney",
        price: "$20.00",
        images: ["/img/eric-pop(1).webp", "/img/eric-pop(2).webp", "/img/eric-pop(3).webp"],
        description: ""
    },
    {
        id: 8,
        name: "Sebastian Pop Figure",
        franchise: "The Little Mermaid",
        company: "Disney",
        price: "$20.00",
        images: ["/img/sebastian-pop(1).webp", "/img/sebastian-pop(2).webp", "/img/sebastian-pop(3).webp"],
        description: ""
    },
    // THIRD ROW - PIXAR COMPANY
    {
        id: 9,
        name: "Joy Pop Figure",
        franchise: "Inside Out 2",
        company: "Pixar",
        price: "$20.00",
        images: ["/img/joy-pop(1).webp", "/img/joy-pop(2).webp", "/img/joy-pop(3).webp"],
        description: ""
    },
    {
        id: 10,
        name: "Embarrassment Pop Figure",
        franchise: "Inside Out 2",
        company: "Pixar",
        price: "$20.00",
        images: ["/img/embarassment-pop(1).webp", "/img/embarassment-pop(2).webp", "/img/embarassment-pop(3).webp"],
        description: ""
    },
    {
        id: 11,
        name: "Envy Pop Figure",
        franchise: "Inside Out 2",
        company: "Pixar",
        price: "$20.00",
        images: ["/img/envy-pop(1).webp", "/img/envy-pop(2).webp", "/img/envy-pop(3).webp"],
        description: ""
    },
    {
        id: 12,
        name: "Anxiety Pop Figure",
        franchise: "Inside Out 2",
        company: "Pixar",
        price: "$20.00",
        images: ["/img/anxiety-pop(1).webp", "/img/anxiety-pop(2).webp", "/img/anxiety-pop(3).webp"],
        description: ""
    },
   
];







// -----------------***************** SWIPER JAVASCRIPT ***********--------------- //

// initialise swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

}); // end of document