function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }
  distanceFromHqInBlocks(43);
  distanceFromHqInBlocks(50);
  distanceFromHqInBlocks(34);

function distanceFromHqInFeet(someValue) {
return Math.abs(distanceFromHqInBlocks(someValue) * 264);
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264;
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, end) {
    let farePrice = distanceTravelledInFeet(start, end);
    if (farePrice <= 400) {
        return 0;
    } else if (farePrice > 400 && farePrice <= 2000) {
        return (farePrice - 400) * 0.02;
    } else if (farePrice >= 2000 && farePrice < 2500) {
        return 25;
    } else if (farePrice > 2500) {
        return 'cannot travel that far';
    }
}

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32); 
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);


// if (farePrice = 400) {
//     return farePrice - 400;
// } else if (farePrice > 400 && farePrice <= 2000) {
//     return (farePrice - 400) * 0.02;
// } else if (farePrice > 2000) {
//     return 25;
// } else if (farePrice > 2500) {
//     return 'cannot travel that far'
    // }