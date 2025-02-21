const itemname = document.querySelector('#item');
const itemcost = document.querySelector('#itemcost');
const list = document.querySelector('#list');
const btn = document.querySelector('#addItems');

const cBalance = document.querySelector('#cbalanceNum'); 
const tBalance = document.querySelector('#tcost'); 

function isNum(cost) {
    return !isNaN(cost) && cost > 0;
}


function enterAmount() {
    let tcost = prompt("Enter the total cost");
    while (!isNum(parseFloat(tcost))) {
        tcost = prompt("Enter a valid total cost");
    }
    tcost = parseFloat(tcost);
    // document.getElementById("tcost").textContent = tcost;
    // document.getElementById("cbalanceNum").textContent = tcost;

    tBalance.textContent = `₹${tcost.toFixed(2)}`; 
cBalance.textContent = `${tcost.toFixed(2)}`; 
}


btn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    const iname = itemname.value;
    const icost = parseFloat(itemcost.value);
    if(!isNum(icost)){
        alert('enter valid item cost');
    }

    if (iname === '' || isNaN(icost) || icost <= 0) {
        alert('Please enter a valid item name and cost.');
        return;
    }

    
    addList(iname, icost);
    calculate(parseFloat(icost));

    itemname.value = '';
    itemcost.value = '';
});

function calculate(icost){
    let currentBalance = parseFloat(cBalance.textContent);
    if (icost > currentBalance) {
        alert('Not enough balance!');
        return;
    }
    currentBalance -= icost;
    cBalance.textContent = `${currentBalance.toFixed(2)}`;
}

function addList(iname, icost) {
    const newitem = document.createElement('li');
    newitem.className = "list-group-item d-flex justify-content-between align-items-center";
    newitem.innerHTML = `<span class="badge bg-info">${iname}</span> - <span class="badge bg-info">  ₹${icost.toFixed(2)}</span>
    <button class="btn btn-danger btn-sm" onclick="removeProduct(this , ${icost})">Remove</button> `;
    list.appendChild(newitem);
}


function removeProduct(button,addcost) {
    
    let currentBalance = parseFloat(cBalance.textContent);
    currentBalance += addcost;
    cBalance.textContent = `${currentBalance.toFixed(2)}`;
    button.parentElement.remove();
}
//delete
// list.addEventListener('click' , (e)=>{
//     e.target.remove();
// });