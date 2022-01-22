const store = ['🌮', '🍕', '🥑', '🥖', '🧄', '🧇', '🫐', '🥦', '🥟', '🍙', '🌯', '🥗', '🍣', '🍩', '🥮', '🍦'];
const cus = "👱";
const ser = "🕵";

const grabItem = (store) => {
  const numOptions = store.length;
  const randomId = Math.round(Math.random() * (numOptions - 1));
  const randomItem = store[randomId];
  return randomItem;
};

const checkout = (customerNum, item) => {
  console.log(`(${customerNum}) 🛒 Thank you for buying ${item}. Ya slut!`);
}; 

const checkoutAllItems = (customerNum, cart) => {
  for(const item of cart) {
    checkout(customerNum, item);
  } 
}

const askCustomerService = (item) => {
  console.log(`\t 🤷 Hello, customer service, where can I find ${item}?`);
  const timer = Math.round(Math.random() * 3) * 1000;
  console.log(`\t🕵️‍♀️ let me go grab them ${item} for you. it will take me ${timer/1000} seconds`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() < 0.5) {
        reject(`\t🚨🕵️‍♀️ Sorry, I couldn't find ${item}`)
      } else {
        console.log(`\t 🕵️‍♀️ He is that there ${item}`)
        resolve(item);
      }
    }, timer)


  })
}

askCustomerService('🍕')
  .then((res) => {
    console.log(res)
    return askCustomerService('🌯')
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

  //how to retrieve asynk data from a synk function:
  const higherOrder = (callback) => {
    let data = {
      name: "mulder"
    }
    setTimeout(() => {
      data.name = "scully";
      callback(data)
    }, 2)
    console.log(data)
  }

  higherOrder((obj) => {  
  console.log(obj)
  })
