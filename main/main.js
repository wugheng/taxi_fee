module.exports = function main(distance) {
    let price;
    if(distance[0]-distance[1]<=2){
        price=shortdistance(distance[0]-distance[1]);
    }
    else if(distance[0]-distance[1]<=8){
        price=middistance(distance[0]-distance[1]);
    }
    else{
        price=fardistance(distance[0]-distance[1]);
    }
    if(distance[1]!=0){
        price=price+parkingprice(distance[1]);
    }
    return Math.round(price);
};

function shortdistance(distance) {
    let price=6;
    return price;
}

function middistance(distance){
    let price;
    price=0.8*(distance-2)+6;
    return price;
}

function fardistance(distance){
    let price=(distance-8)*1.2+0.8*6+6;
    return price;
}

function parkingprice(parkingtime) {
    return 0.25*parkingtime;
}