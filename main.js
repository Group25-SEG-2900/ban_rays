function handlePurchase() {
    window.alert("Coming soon.");
}

function purchasePage() {
    const checkedBtn = document.querySelector('input[type="radio"][value="cd"]:checked');
    if (checkedBtn) {
        window.open("https://www.paypal.com/signin", '_blank', "width=700,height=600");    
    }else {
        window.open("./payment.html", "_blank", "width=700,height=600")
    }
}
