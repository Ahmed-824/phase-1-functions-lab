// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks >= 42) {
        return blocks - 42;
    } else {
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264; 
}

function distanceTravelledInFeet(startBlock, endBlock) {
    let blocksTravelled = Math.abs(startBlock - endBlock);
    return blocksTravelled * 264; 
}
function calculatesFarePrice(startBlock, endBlock) {
    let feetTravelled = distanceTravelledInFeet(startBlock, endBlock);
    
    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25;
    } else if(feetTravelled > 2500){
        return 'cannot travel that far';
    }
}
