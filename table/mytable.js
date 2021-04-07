// FOLLOW THE COMMENTS STEP BY STEP
// log in to you your Airtable account
// make sure you have a base set up with at least one table with data inside it
// go to Account settings
// click the generate API key button
// copy and paste it into line 13 below
// then go to this link https://airtable.com/api?utm_source=google&utm_medium=cpc&utm_extra5=kwd-826617918193&utm_extra2=936407691&utm_extra10=110555501161&creative=465926015426&device=c&cx=us&targetid=kwd-826617918193&campaignid=936407691&adgroupid=110555501161&utm_campaign=brand_creator&utm_content=bofu_freetrial&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_5ScBkfOcfy68SuLtNsXhLoTp8JoYwFlBuOK6yDpmKnA_eCAXZ3kKsaAptkEALw_wcB
// select your base
// copy and paste the base ID into line 14 below

// the next two lines are calling the Airtable API!!
var Airtable = require('airtable');
var base = new Airtable({ apiKey: "key8cwPepdzTnEIGn" }).base(
  "appysIBPSBODSgD5v"
);

// create an empty array for all of your items to go into
let allItems = [];

// inside the () after base put the name of YOUR spreadsheet
base('my-dinner-table').select({}).eachPage(function page(tableItems, fetchNextPage) {
  tableItems.forEach(function(item) {
    // push each item received into the allItems array on line 16
    allItems.push(item);
  });


  // if there is another page of items, get those too
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }

  // all items received, no errors!!
  // console log the allItems array, you should see all of your data in there now.
  console.log(allItems);

  // now, call a new function to do stuff with your data and pass the allItems array into it
  setTable(allItems);
});


function setTable(allItems) {
  // make a container div and append it to the body
  // this way we can append all of our items to a div which we can style later
  let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  // run a forEach loop on your array, with each item
  // then make a new HTML element and position it somewhere on the page 
  allItems.forEach(function(item) {
    // store the name of the item (from your spreadsheet) into a variable
    let name = item.fields.items;
    // store the image for the item into a variable
    let imageUrl = item.fields.images[0].url;


    // let itemImage = document.createElement('img');
    // itemImage.src = imageUrl;
    // itemImage.classList.add(item.fields.kind_of_item);
    // container.appendChild(itemImage);

    // the following code is for making multiple cups and plates etc out of just one Airtable record and then positioning them in specific spots on the table. these are the names I used in my airtable, yours will be different!!
    // here i want to do different things with different items
    // so if the item is a Cup, I want to add a class name of cup, and put each one in a different position on the page.
    // dont forget, some of the styling for my page here in JS and some is in my CSS file, for example I know that my .cup class has position: absolute set in CSS, which means that style.left and style.top will work here in the JS.
    
    if (name === "Cup") {
      for (var i=0; i<3; i++) {
        let cup = document.createElement('img');
        cup.src = imageUrl;
        cup.classList.add("cup");

        if (i === 0) {
          cup.style.left = "80%";
        }
        if (i === 1) {
          cup.style.left = "80%";
          cup.style.top = "60%";
        }
        if (i === 2) {
          cup.style.left = "10%";
          cup.style.top = "10%";
        }

        container.appendChild(cup);
      }
    }

      if (name === "Bowl") {
      for (var i=0; i<3; i++) {
        let bowl = document.createElement('img');
       bowl.src = imageUrl;
        bowl.classList.add("bowl");

        if (i === 0) {
          bowl.style.left = "80%";
        }
        if (i === 1) {
          bowl.style.left = "80%";
          bowl.style.top = "60%";
        }
        if (i === 2) {
          bowl.style.left = "10%";
          bowl.style.top = "10%";
        }

        container.appendChild(bowl);
      }
    }

        if (name === "Spoon") {
      for (var i=0; i<3; i++) {
        let spoon = document.createElement('img');
        spoon.src = imageUrl;
        spoon.classList.add("spoon");

        if (i === 0) {
         spoon.style.left = "80%";
        }
        if (i === 1) {
          spoon.style.left = "80%";
          spoon.style.top = "60%";
        }
        if (i === 2) {
          spoon.style.left = "10%";
          spoon.style.top = "10%";
        }

        container.appendChild(spoon);
      }
    }



        if (name === "Flowers") {
      for (var i=0; i<3; i++) {
        let flowers = document.createElement('img');
        flowers.src = imageUrl;
        flowers.classList.add("flowers");

        if (i === 0) {
          flowers.style.left = "80%";
        }
        if (i === 1) {
          flowers.style.left = "80%";
          flowers.style.top = "60%";
        }
        if (i === 2) {
          flowers.style.left = "10%";
          flowers.style.top = "10%";
        }

        container.appendChild(flowers);
      }
    }

        if (name === "Candle") {
      for (var i=0; i<3; i++) {
        let candle = document.createElement('img');
        candle.src = imageUrl;
        candle.classList.add("candle");

        if (i === 0) {
          candle.style.left = "80%";
        }
        if (i === 1) {
          candle.style.left = "80%";
          candle.style.top = "60%";
        }
        if (i === 2) {
          candle.style.left = "10%";
          candle.style.top = "10%";
        }

        container.appendChild(candle);
      }
    }

            if (name === "Tablecloth") {
      for (var i=0; i<3; i++) {
        let tablecloth = document.createElement('img');
       tablecloth.src = imageUrl;
       tablecloth.classList.add("tablecloth");
       container.appendChild(tablecloth);
      }
    }



    // Same idea with the plates.
    // if (name === "Plate") {
    //   for (var i=0; i<3; i++) {
    //     let plate = document.createElement('img');
    //     plate.src = imageUrl;
    //     plate.classList.add("plate");

    //     if (i === 0) {
    //       plate.style.left = "70%";
    //       plate.style.top = "20%";
    //     }
    //     if (i === 1) {
    //       plate.style.left = "55%";
    //       plate.style.top = "60%";
    //     }
    //     if (i === 2) {
    //       plate.style.left = "5%";
    //       plate.style.top = "25%";
    //     }

    //     container.appendChild(plate);
    //   }
    // }

    // Same idea with the tablecloth.
    // if (name === "Tablecloth") {
    //   let tablecloth = document.createElement('img');
    //   tablecloth.src = imageUrl;
    //   tablecloth.classList.add("tablecloth");
    //   container.appendChild(tablecloth);
    // }
  })
}