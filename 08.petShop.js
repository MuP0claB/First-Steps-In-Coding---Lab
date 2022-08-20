function petShop(input) {  
    let packsDogFood = Number(input[0]);
    let packsCatFood = Number(input[1]);
    let priceDogFood = packsDogFood * 2.50;
    let priceCatFood = packsCatFood * 4.00;
    let totalPrice = priceDogFood + priceCatFood; 

        console.log (`${totalPrice} lv.`);   
} 

    petShop(["13","9"]);        