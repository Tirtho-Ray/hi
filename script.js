let totalPrice=0 ;

function handleCLikBtn(target){
    const pushItem = document.getElementById("Push-Item");
    const ItemName =target.parentNode.childNodes[1].childNodes[1].childNodes[3].childNodes[3].innerHTML;
    const li = document.createElement("ol");
    li.innerText = ItemName;
    pushItem.appendChild(li);
    const price = target.parentNode.childNodes[1].childNodes[1].childNodes[3].childNodes[5].childNodes[0].innerHTML;
    totalPrice = parseFloat(price)+parseFloat(totalPrice);
    document.getElementById("total-price").innerHTML=totalPrice;

    const grandTotal =document.getElementById("grandTotal");
    grandTotal.innerText=totalPrice;

    updateButtonState();  

}

function applyCoupon() {
    console.log("applyCoupon")
    const couponInput = document.getElementById("couponInput").value;
    if(couponInput ==="SELL200"){
        couponDiscount = totalPrice*0.2;
        totalPrice = couponDiscount;

        const couponDiscountElement =document.getElementById("couponDiscount");
        couponDiscountElement.innerText=couponDiscount.toFixed(2);
    }
    else{
        alert("Invited Your Coupon Code please enter your coupon code")
    }
    const totalElement =document.getElementById("total-price");
        const totalElementValue = totalElement.innerText;
        const total =parseFloat(totalElementValue);
        // console.log(total);
        mainTotal = total-couponDiscount;

        const grandTotal =document.getElementById("grandTotal");
        grandTotal.innerText=mainTotal.toFixed(2);
}

function updateButtonState() {
    const clickButton = document.getElementById("apply");
    const applyCouponButton = document.getElementById("apply");
    if (totalPrice === 200) {
        applyCouponButton.disabled = true;
    } else {
        applyCouponButton.disabled = false;
    }

    if (totalPrice >= 200) {
        clickButton.disabled = false;
    } else {
        clickButton.disabled = true;
    }
}

function reloadBtn(){
    window.location.reload();
}

