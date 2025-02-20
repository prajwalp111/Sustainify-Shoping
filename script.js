const itemname = document.querySelector('#item');
const itemcost = document.querySelector('#itemcost');
const list = document.querySelector('#list');
const btn = document.querySelector('#addItems');

let tcost = prompt('Enter the total cost');

function isNum(cost) {
    return !isNaN(cost) && cost > 0;
}

while (!isNum(parseFloat(tcost))) {
    tcost = prompt('Enter a valid total cost');
}

tcost = parseFloat(tcost);

const cBalance = document.querySelector('#cbalanceNum'); 
const tBalance = document.querySelector('#tcost'); 

tBalance.textContent = `₹${tcost.toFixed(2)}`; 
cBalance.textContent = `${tcost.toFixed(2)}`; 

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
    newitem.textContent = `${iname} - ₹${icost.toFixed(2)}`;
    list.appendChild(newitem);
}

//delete
list.addEventListener('dblclick' , (e)=>{
    e.target.remove();
});