// Предпазен найлон - 1.50 лв. за кв. метър
//· Боя - 14.50 лв. за литър
//· Разредител за боя - 5.00 лв. за литър

function painting (input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hoursNeeded = Number(input[3]);

    let PriceForNylon = (nylon + 2) * 1.5;
    let priceForPaint = (paint * 1.1) * 14.5;
    let priceForPT = paintThinner * 5;

    let priceForMaterials = PriceForNylon + priceForPaint + priceForPT + 0.4;
    let priceForWorkers = (priceForMaterials * 0.3) * hoursNeeded;

    console.log(priceForMaterials + priceForWorkers);
    
}
painting (["10", "11", "4", "8"]);