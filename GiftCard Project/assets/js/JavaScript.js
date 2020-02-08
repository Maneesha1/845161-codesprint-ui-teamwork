function myFunction(event) {
    var x = event.charCode;
    if ((x > 64 && x < 91) || (x > 96 && x < 123)) { }
    //{
    //    a1 = document.getElementById("x").innerHTML;
    //}

    else {

        alert("enter valid name");
        event.preventDefault();

    }

}



function myFunction1(event) {
    //var x = event.charCode;
    var y = event;
    if ((y > 0 && y < 100)) { }
    //{
    //    a1 = document.getElementById("x").innerHTML;
    //}

    else {

        alert("enter valid number");
        event.preventDefault();

    }

}

function myFunction2(event) {
    var x = event.charCode;
    if ((x > 64 && x < 91) || (x > 96 && x < 123)) {
        alert("enter valid pincode");
        event.preventDefault();
    }


    else {

    }

}
function myfun1() {
    document.getElementById("ph2").focus();
}
function myfun2() {
    document.getElementById("ph3").focus();
}
function myfun3() {
    document.getElementById("ph4").focus();
}
function myfun4() {
    document.getElementById("ph5").focus();
}
function myfun5() {
    document.getElementById("ph6").focus();
}
function myfun6() {
    document.getElementById("ph7").focus();
}
function myfun7() {
    document.getElementById("ph8").focus();
}
function myfun8() {
    document.getElementById("ph9").focus();
}
function myfun9() {
    document.getElementById("ph10").focus();
}
function myfun10() {
    document.getElementById("email").focus();
} 








const PRODUCTS_KEY = "gifts";

getProductsFromLocalStorage = () => {
    let gifts = [];

    if (localStorage.getItem(PRODUCTS_KEY)) {
        gifts = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
    }

    return gifts;
}


addBuyerFormSubmit = () => {
    let gifts = getProductsFromLocalStorage();
    let BFirstName = document.querySelector("#bname1");
    let BlastName = document.querySelector("#bname2");
    let streetAdress = document.querySelector("#sh1");
    let state = document.querySelector("#sh3");
    let country = document.querySelector("#sh4");
    let pincode = document.querySelector("#sh5");
    let city = document.querySelector("#sh2");
    let Inr = document.querySelector("#am1");

    let paise = document.querySelector("#am2");
    let phnnum = document.querySelector("#phn");

    let product = {
        name: BFirstName.value,
        ShippingAddress: streetAdress.value,
        City: city.value,
        Amount: parseFloat(Inr.value),
        Phnnum: parseInt(phnnum.value)
    };


    gifts.push(product);
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(gifts));
}

LoadBuyers = () => {
    let gifts = getProductsFromLocalStorage();

    let tableBody = document.querySelector("#Data");
    for (let product of gifts) {
        let prdRow = createProductRow(product);
        tableBody.append(prdRow);
    }
}
createProductRow = (product) => {

    let nameCol = document.createElement("td");
    nameCol.textContent = product.name;

    let ShippingAddressCol = document.createElement("td");
    ShippingAddressCol.textContent = product.ShippingAddress;

    let CityCol = document.createElement("td");
    CityCol.textContent = product.City;


    let AmountCol = document.createElement("td");
    AmountCol.textContent = product.Amount;

    let phnnumCol = document.createElement("td");
    phnnumCol.textContent = product.phnnum;

    let prdRow = document.createElement("tr");
    prdRow.append(nameCol);
    prdRow.append(ShippingAddressCol);
    prdRow.append(CityCol);
    prdRow.append(AmountCol);
    prdRow.append(AmountCol);

    return prdRow;
}