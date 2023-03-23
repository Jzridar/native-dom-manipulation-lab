let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1- DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-titleID element. 
  //Remember there are a couple of ways to query id. Change the text of the title to something shorter.

  let shortTitle = document.querySelector('#main-title')
  shortTitle.textContent = "Welcome to DOM Toretto's homepage"
  console.log(shortTitle.textContent)


  // Part 2 -Select the body and change the background-color to a new color of your choice.

  document.body.style.background = "#ffffcc"


  // Part 3 -Select DOM's Favorite Things list and remove the last list item.
  let favThings = document.getElementById('favorite-things')
  favThings.removeChild(favThings.lastElementChild);
  console.log(favThings)

  // Part 4 -Select all .special-title class elements and change their font-sizeto 2rem. 
  //Remember you might have to iterate through the list of elements

  var fntSize = document.getElementsByClassName('special-title');
  console.log(`fnt size special ${fntSize.length}`)
  for (var i = 0; i < fntSize.length; i++) {
    fntSize[i].style.fontSize = "2em";
  }

  // Part 5 -Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  //let races = document.querySelector("div.side-bar ul[id='past-races']")
  let races = document.querySelector('#past-races').children
  console.log(`Races count - ${races.length}`)
  for (var i = 0; i < races.length; i++) {

    if (races[i].innerHTML === "Chicago") {
      console.log(`Remove  child- ${races[i]}`)
      races[i].remove()

    }
  }


  // Part 6 -Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
  const newList = document.createElement("li");
  const newCity = document.createTextNode("Boston");
  newList.appendChild(newCity);
  document.getElementById("past-races").appendChild(newList);

  // Part 7-Create a new .blog-post corresponding to the new city added in Part 6. 
  //You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. 
  //Think about what order you want to create the elements, and what order you want to append them in.
  let blgPost = document.querySelector(".main")
  blgPost.innerHTML = blgPost.innerHTML + `<div class="blog-post purple">
<h1>Boston</h1>
<p>I RACED PAUL WALKER AND WON HIS CAR WITH MY CAR!</p>
</div>`




  // Part 8-
  //Query select the #quote-titleID element and add a click event handler. 
  // That event handler should use the function randomQuotewhenever #quote-titleis clicked.
  quotetitle = document.getElementById('quote-title')
  quotetitle.addEventListener('click',(event) => {
    randomQuote();
  })


  // Part 9-Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. 
  //The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.
  // The mouseouthandler should toggle the class .purple
  // The mouseenterhandler should toggle the class .red
  // Test it out!
  // Hint:
  // Remember the document node property .classListand the document node method .toggle().
  let blogs = document.querySelectorAll('.blog-post')
  console.log(`blog ${blogs.length}`)
  blogs.forEach((blog) => {
    blog.addEventListener("mouseenter", (event) => {
      console.log(`Mouse enter ${event}`)
      blog.classList.remove("purple")
      blog.classList.add("red")
    });


    blog.addEventListener("mouseout", (event) => {
      console.log("Mouse out")
      blog.classList.remove("red")
      blog.classList.add("purple")
     
    });
  })







});
