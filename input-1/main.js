// create an empty array for all of your items to go into
let allItems = [];

// inside the () after base put the name of YOUR spreadsheet
base('objects').select({}).eachPage(function page(tableItems, fetchNextPage) {
  tableItems.forEach(function(item) {
    // push each item received into the allItems array on line 16
    allItems.push(item);
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
    let itemImage = document.createElement('img');
    itemImage.src = imageUrl;
    itemImage.classList.add(item.fields.shape);
    // since were in the for each loop here, it will call getRandomPlace for each image, over and over
    let randomPointOnPage = getRandomPlace();
    // the function returns an array [randomHorizontal, randomVertical], so lets console log the first and the second item in the array
    console.log(randomPointOnPage[0],randomPointOnPage[1]);
    // the add a position to each image and a left and top value with the randomHorizontal=[0] and the randomVertical= [1]
    itemImage.style.position = "absolute";
    itemImage.style.left = `${randomPointOnPage[0]}px`;
    itemImage.style.top = `${randomPointOnPage[1]}px`;

    // FUNCTION: draggable img
function makeObjectsDraggable(dragItems) {
  const container = document.body;
};
