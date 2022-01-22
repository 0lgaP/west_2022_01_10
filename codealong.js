const store = ['🌮', '🍕', '🥑', '🥖', '🧄', '🧇', '🫐', '🥦', '🥟', '🍙', '🌯', '🥗', '🍣', '🍩', '🥮', '🍦'];

const grabItem = (store) => {
  const numOptions = store.length;
  const randomId = Math.round(Math.random() * (numOptions - 1)) // max # of options is the highest index of array
  const randomItem = store[randomId];
  return randomItem;
}

const checkout = (customerNum, item) => {
  console.log(`(${customerNum}) thank you for buying ${item} ya slut.`)
}

const askCustomerService = (customerNum, item, callback) => {
  console.log(`\t 👱 helo custormer service, where can I find ${item}`) 
  const timer = Math.round(Math.random() * 3) * 1000;
  console.log(`\t 🕵 let me go grab those ${item} for you. it will take me ${timer/1000} seconds`)
  setTimeout(() => {

  if(Math.random() < 0.5) {

    callback(`\t 🕵 Sorry, I could't find ${item}`);

  } else {
  
    console.log(`\t 🕵 here is your ${item}, you cna now checkout`);
    callback(null, customerNum, item)

  }
}, timer)

}
const checkoutAllItems = (customerNum, cart) => {
  for (const item of cart) {
    checkout(customerNum, item);
  }
}

const groceryCart = [];

askCustomerService(0, grabItem(store), (err, customerNum, foodItem) => {
  if(err){
    console.log(err)
    return checkoutAllItems(customerNum, groceryCart)
  }
  groceryCart.push(foodItem)
  askCustomerService(customerNum, grabItem(store), (err, customerNum, foodItem) => {
    if(err) {
      console.log(err)
      return checkoutAllItems(customerNum, groceryCart)

    }

    groceryCart.push(foodItem)
    checkout(customerNum, groceryCart)
  })
});
checkout(1, grabItem(store));
checkout(2, grabItem(store));

