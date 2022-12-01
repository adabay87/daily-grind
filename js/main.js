//alert("hola!");

/*
This page Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page 
that rotates unique colors and content for each weekday (Sunday to Saturday) 
into the page.  The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph 
must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content

the items we need are:
image(a pic of the coffee)
alt ( a description of the pic for the people who can't see it)
description ( a note about the coffee)
weekday
color(to support the coffee)

The unique color could affect the background HTML, or an element on the page 
for each day of the week.  All of the above must occur within one page.

*/

function coffeeTemplate(coffee){
    return `<p>
    <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee"/>
   <strong> ${coffee.day}'s Coffee Special:</strong>${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>, ${coffee.desc}
</p>`;
}



let myDate=new Date();
let today=myDate.getDay();
let coffee="";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }


 //convert the string to an integer
 today= parseInt(today);

switch(today){
    case 1:
        today="Monday";
        coffee = {
           color:"pink",
           name:"Bubble Tea",
           pic:"bubble-tea.jpg",
           alt:"a picture of a bubble tea",
           day:"Monday",
           desc:'i like me some bubble tea!'
        };

    break;

    case 2:
        today="Tuesday";
        coffee = {
           color:"brown",
           name:"Caramel latte",
           pic:"caramel-latte.jpg",
           alt:"a picture of a caramel latte",
           day:"Tuesday",
           desc:'it"s a cold, so a caramel latte sounds good right now!'
        };

    break;

    case 3:
        today="Wensday";
        coffee = {
           color:"#001f24",
           name:"Cold Brew",
           pic:"cold-brew.jpg",
           alt:"a picture of a cold brew",
           day:"Wensday",
           desc:'i need caffien give me a cold brew!'
        };

    break;

    
    case 4:
        today="Thursday";
        coffee = {
           color:"black",
           name:"Drip",
           pic:"drip.jpg",
           alt:"a picture of a drip",
           day:"Thursday",
           desc:'i like a Drip!'
        };

    break;
    case 5:
        today="Friday";
        coffee = {
           color:"orange",
           name:"Mocha",
           pic:"mocha.jpg",
           alt:"a picture of a Mocha",
           day:"Friday",
           desc:'Friday is the right Day for Mocha!'
        };

    break;


    break;

    case 6:
        today="Saturday";
        coffee = {
           color:"purple",
           name:"Frappaccino",
           pic:"frappaccino.jpg",
           alt:"a picture of a frappaccino",
           day:"Thursday",
           desc:'What a Day! to enjoy a nice frappaccino!'
        };

    break;

    

    break;
    
    case 0:
        today="Sunday";
        coffee = {
           color:"white",
           name:"Pumpkin-spice-latte",
           pic:"Pumpkin-spice-latte.jpg",
           alt:"a picture of a Pumkin-spice-latte",
           day:"Sunday",
           desc:'its a sunny day try our Pumkin-spice-latte!'
        };

    break;








    default:
        alert("Something went wrong!")
}

console.log(coffee);

 document.getElementById("coffee-template").innerHTML=coffeeTemplate(coffee);
  
   //here we are changing the background color of html tag
   document.querySelector("html").style.backgroundColor =coffee.color;