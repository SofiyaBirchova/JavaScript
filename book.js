function compulsoryLit(input) {
    let currBookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let dayCount = Number(input[2]);
    let totalHours = currBookPages / pagesPerHour;
    let hoursPerDay = totalHours / dayCount;
    console.log(hoursPerDay);

}
compulsoryLit(['212', '20', '2']);