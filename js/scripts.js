

function updatePrice(getId, price){
  const currentPrice = document.getElementById(getId);
  currentPrice.innerText = price;

  // total price update here
  const allPrice = document.getElementById('all-price');
  const totalPriceInNumber = parseFloat(allPrice.innerText);

 
   if(price == 180 ){
      allPrice.innerText = totalPriceInNumber + price;
  }

  // else if(price == 100 ){
  //   allPrice.innerText = totalPriceInNumber +100;
  // }
  // else if(price == 0  && totalPriceInNumber > 1299){
  //   allPrice.innerText = totalPriceInNumber -180;
  // }
}


//frist memort btn
document.getElementById('frist-memory-btn').addEventListener('click', function(){
  updatePrice('memory-cost', 0);
});

// second memory btn
document.getElementById('second-memory-btn').addEventListener('click', function(){
  updatePrice('memory-cost', 180);
});


// function updateStoragePrice(getIdCost, storagePrice){
//   const currentPrice = document.getElementById(getIdCost);
//   currentPrice.innerText = storagePrice;

//   // total price update here
//   const allCost = document.getElementById('all-price');
//   const totalCostNumber = parseFloat(allCost.innerText);

 
//    if(storagePrice == 180  && totalCostNumber == 1299){
//       allCost.innerText = totalCostNumber + storagePrice;
//   }

  
//   else if(storagePrice == 0 ){
//     allCost.innerText = totalCostNumber + storagePrice;
//   }
//   else{
//     allCost.innerText = totalCostNumber + storagePrice;
//   }


// }

//frist storage btn
document.getElementById('frist-ssd-btn').addEventListener('click', function(){
  updatePrice('storage-cost', 0);
});

// second storage  btn
document.getElementById('second-ssd-btn').addEventListener('click', function(){
  updatePrice('storage-cost', 100);
});
// secondstorage  btn
document.getElementById('third-ssd-btn').addEventListener('click', function(){
  updatePrice('storage-cost', 180);
});


function updateDeliveryCost(getId, deliveruCost){
  const currentPrice = document.getElementById(getId);
  currentPrice.innerText = deliveruCost;

  // total price update here
  const allCost = document.getElementById('all-price');
  const totalCostPrice = parseFloat(allCost.innerText);

 
  //  if(deliveruCost == 0 ){
  //   allCost.innerText = totalCostPrice -20;
  // }

  // else if(deliveruCost == 20){
  //   allCost.innerText = totalCostPrice +20;
  // }


  if(price == 20 ){
    allPrice.innerText = totalPriceInNumber + price;
}


else if(price == 0  && totalPriceInNumber > 1299){
  allPrice.innerText = totalPriceInNumber -20;
}
}


//frist memort btn
document.getElementById('prime-delivery-btn').addEventListener('click', function(){
  updatePrice('delivery-cost', 0);
});

// second memory btn
document.getElementById('delivery-btn').addEventListener('click', function(){
  updatePrice('delivery-cost', 20);
});