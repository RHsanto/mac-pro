// Memory Price function
function getMemoryPrice(memoryPrice) {
  const memoryCostPrice = document.getElementById('memory-cost');
  memoryCostPrice.innerText = memoryPrice;
  updateTotalPrice();
}

// Storage Price function
function getStoragePrice(storagePrice) {
  const storageCostPrice = document.getElementById('storage-cost');
  storageCostPrice.innerText = storagePrice;
  updateTotalPrice();
}

// Delivery Charge function
function getDelivery(deliveryCharge) {
  const deliveryCostPrice = document.getElementById('delivery-cost');
  deliveryCostPrice.innerText = deliveryCharge;
  updateTotalPrice();
}



// update Total price
function updateTotalPrice() {
  
  const totalCostPrice = document.getElementById('all-Total-price')
  const memoryCostPrice = document.getElementById('memory-cost');
  const storageCostPrice = document.getElementById('storage-cost');
  const deliveryCostPrice = document.getElementById('delivery-cost');
  const finatTotalPrice = document.getElementById('final-total-price');

  const allTotalPrice = totalCostPrice.innerText= 1299 + parseFloat(memoryCostPrice.innerText) + parseFloat(storageCostPrice.innerText) + parseFloat(deliveryCostPrice.innerText);
  finatTotalPrice.innerText = allTotalPrice;
  return allTotalPrice;

}

//Memory button 
document.getElementById('frist-memory-btn').addEventListener('click', function(){
getMemoryPrice(0);

});

document.getElementById('second-memory-btn').addEventListener('click', function(){
  getMemoryPrice(180);
});

// storage Cost button

document.getElementById('frist-ssd-btn').addEventListener('click', function(){
  getStoragePrice(0);
})
document.getElementById('second-ssd-btn').addEventListener('click', function(){
  getStoragePrice(100); 
});
document.getElementById('third-ssd-btn').addEventListener('click', function(){
  getStoragePrice(180); 
});



//delivery Cost button 

document.getElementById('frist-delivery-btn').addEventListener('click', function(){
  
  getDelivery(0);
})
document.getElementById('second-delivery-btn').addEventListener('click', function(){
  getDelivery(20) ;
})


// discount total price 

document.getElementById('promo-code-btn').addEventListener('click', function () {

const finalTotalAmount = document.getElementById('final-total-price');

  const promoCode = document.getElementById('copun-input');
  const discount = (updateTotalPrice() / 100) * 20;
  const finalDiscount = updateTotalPrice() - discount;
  if (promoCode.value == 'stevekaku') {
      finalTotalAmount.innerText = finalDiscount;
  }
  promoCode.value = '';

})

