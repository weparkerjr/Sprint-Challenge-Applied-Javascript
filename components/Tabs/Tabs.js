// STEP 3: Create the class. Classes aren't hoisted!
class TabLink {
  constructor(tabElement){
    // console.log(tabElement);

// STEP 4: Matched the data-set values between our links and our content

  // assign this.tabElement to the tabElement DOM reference
    // this.tabElement = document.querySelector(`.card[data-tab="${link.dataset.tab}"]`);
    this.cardsContainer = document.querySelector(`.card[data-tab="${tabElement.dataset.tab}"]`);
// STEP 5: Created a new content object from our matched data-set content tab    
  // Get the `data-tab` value from this.tabElement and store it here
    // this.tabData = ; 
    this.cardsContainer = new TabCard(this.cardsContainer);
    






    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
// <- Delete this comment block when you work on the if statement

    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === 'all'){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = ;
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = ;
    }
  
//<- Delete this comment block when you work on the if statement

// Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(card => new TabCard(card));
    //this.cards = Array.from(this.cards).map((card) => new TabCard(card));






// STEP 9: Adding an event listener for our link and binding 'this'
  // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => this.selectTab());
  }

// STEP 10: Have the tabContent toggle off and on based on our Content class's method
  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach.remove('activeClass');

    // Select all of the elements with the .card class on them
    const cards = ;

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach.display('none');
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement;
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
  }
}
// STEP 6: Create Content class and passin the tabContent reference to the DOM element
class TabCard {
  constructor(cardElement){
// STEP 7: setting up the 'this' keyword for the Content class
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
    // console.log(cardElement);
  }
// STEP 8: Creating a method that can be called to toggle our contentTab off and on
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.classList.toggle('active-tab');
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/

// STEP 1: Get all the elements from the DOM
const tabs = document.querySelectorAll('.tab');
// console.log(tabs);

// STEP 2: Iterate over each element from our NodeList and create a new object
tabs.forEach(function(tab){
  return new TabLink(tab);
})