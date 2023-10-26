function fishTank (input) {
    let lenght = Number(input[0]);
    let widht = Number(input[1]);
    let height = Number(input[2]);
    let takenSpacePercent = Number(input[3]);
    let takenSpaceDecimal = takenSpacePercent / 100;
    let tankVolume = lenght * widht * height;
    let tankVolumeL = tankVolume * 0.001;
    let spaceTaken = takenSpaceDecimal * tankVolumeL;
    let spaceLeft = tankVolumeL - spaceTaken;

    console.log(spaceLeft);

}
fishTank (["85", "75", "47", "17"])