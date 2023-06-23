// const input = require("sync-input");
const input = require("prompt-sync")();

console.log(
    "WELCOME TO THE CARNIVAL GIFT SHOP!\n" +
        "Hello friend! Thank you for visiting the carnival!"
);

let totalTickets = 100;
const menu = {
    1: { name: "Teddy Bear", price: 10 },
    2: { name: "Big Red Ball", price: 5 },
    3: { name: "Huge Bear", price: 50 },
    4: { name: "Candy", price: 8 },
    5: { name: "Stuffed Tiger", price: 15 },
    6: { name: "Stuffed Dragon", price: 30 },
    7: { name: "Skateboard", price: 100 },
    8: { name: "Toy Car", price: 25 },
    9: { name: "Basketball", price: 20 },
    10: { name: "Scary Mask", price: 75 },
};

function buyTicket() {
    const giftId = input("Enter the number of the gift you want to get:");
    console.log(
        `Here you go, one ${menu[Number(giftId)].name}!\nTotal tickets: ${
            totalTickets - menu[giftId].price
        }`
    );
}

function addTicket() {
    const inputAmount = input("Enter the ticket amount:");
    totalTickets += Number(inputAmount);
    console.log(`Total tickets: ${totalTickets}`);
}

function checkTickets() {
    console.log(`Total tickets: ${totalTickets}`);
}

function showGifts() {
    console.log("Here's the list of gifts:\n");
    for (let i in menu) {
        console.log(`${i}- ${menu[i].name}, Cost: ${menu[i].price} tickets`);
    }
}

showGifts();

console.log(
    "\nWhat do you want to do?\n" +
        "1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts"
);
const menuInput = input();

switch (menuInput) {
    case "1":
        buyTicket();
        break;

    case "2":
        addTicket();
        break;

    case "3":
        checkTickets();
        break;

    case "4":
        showGifts();
        break;
}

console.log("Have a nice day!");
