const phones  = [
{
  phone : 'IPhone 15 Pro Max ',
  chip : 'A17 Pro chip',
  Price : '1299$ 512GB',
},
{
  phone : 'IPhone 15 Pro Max ',
  chip : 'A17 Pro chip',
  Price : '1299$ 512GB'
},
{
  phone : 'IPhone 15 Pro Max ',
  chip : 'A17 Pro chip',
  Price : '1299$ 512GB'
},
{
  phone : 'IPhone 15 Pro Max ',
  chip : 'A17 Pro chip',
  Price : '1299$ 512GB'
},
{
  phone : 'IPhone 15 Pro Max ',
  chip : 'A17 Pro chip',
  Price : '1299$ 512GB'
},
{
  phone : 'IPhone 15 Pro Max ',
  chip : 'A17 Pro chip',
  Price : '1299$ 512GB'
},
{
  phone : 'IPhone 15 Pro Max ',
  chip : 'A17 Pro chip',
  Price : '1299$ 512GB'
},
{
  phone : 'IPhone 15 Pro Max ',
  chip : 'A17 Pro chip',
  Price : '1299$ 512GB'
},
]

const div = document.querySelector('#render');
const btnn = document.querySelector('#btnn')



for(let i = 0; i < phones.length; i++){
    console.log(phones[i]);
    div.innerHTML += `<div class="card text-center" style="width: 18rem;">
    <div class="card-body"> 
    <img src="./assets/1phone.png" alt="">
      <h5 class="card-title mt-4">${phones[i].phone}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Chip${phones[i].chip}</h6>
      <p class="card-text">Price${phones[i].Price}</p>
      <button  class="btn btn-primary" id="btnn" onclick="addtocart(${i})">Add Cart</button>
    </div>
  </div>`
}

function addtocart(index){
  console.log('heloo' , index);
}
