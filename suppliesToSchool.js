// Пакет химикали - 5.80 лв.
// • Пакет маркери - 7.20 лв.
// • Препарат - 1.20 лв (за литър

function suppliesToSchool(input) {
    let pen = Number(input[0]);
    let marker = Number(input[1]);
    let boardCleaner = Number(input[2]);
    let totalPrice = (pen * 5.80) + (marker * 7.20) + (boardCleaner * 1.20);
    let discountedPrice = totalPrice - (totalPrice * 0.25);

    console.log(discountedPrice);

}
suppliesToSchool(["2", "3", "4", "25"]);