function basketball(input) {
    let price = Number(input[0]);
    let sneakers = price - (price * 0.40);
    let team = sneakers - (sneakers *0.20);
    let ball = team / 4;
    let accessories = ball / 5;
    let totalPrice = price + sneakers + team + ball + accessories;
    console.log(totalPrice);
}
basketball (["365 "]);