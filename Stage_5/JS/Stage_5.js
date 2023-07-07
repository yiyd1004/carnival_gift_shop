// const input = require("sync-input");
const input = require("prompt-sync")(); // To get user input in Node.js environment

console.log(
    "WELCOME TO THE CARNIVAL GIFT SHOP!\n" +
        "Hello friend! Thank you for visiting the carnival!"
);

let totalTickets = 0;
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
    if (Object.keys(menu).length === 0) {
        console.log("Wow! There are no gifts to buy.");
        return;
    }

    const giftId = input("Enter the number of the gift you want to get:");

    if (isNaN(Number(giftId))) {
        console.log("Please enter a valid number!");
        return;
    } else if (typeof menu[Number(giftId)] === "undefined") {
        console.log("There is no gift with that number!");
        return;
    } else if (totalTickets < menu[Number(giftId)].price) {
        console.log("You don't have enough tickets to buy this gift.");
        return;
    }

    totalTickets -= menu[Number(giftId)].price;
    console.log(
        `Here you go, one ${
            menu[Number(giftId)].name
        }!\nTotal tickets: ${totalTickets}`
    );
    delete menu[Number(giftId)];
}

function addTicket() {
    const inputAmount = input("Enter the ticket amount:");

    if (
        isNaN(Number(inputAmount)) ||
        Number(inputAmount) < 0 ||
        Number(inputAmount) > 1000
    ) {
        console.log("Please enter a valid number between 0 and 1000.");
        return;
    }

    totalTickets += Number(inputAmount);
    console.log(`Total tickets: ${totalTickets}`);
}

function checkTickets() {
    console.log(`Total tickets: ${totalTickets}`);
}

function showGifts() {
    console.log("Here's the list of gifts:\n");
    if (Object.keys(menu).length === 0) {
        console.log("Wow! There are no gifts to buy.");
        return;
    }

    for (let i in menu) {
        console.log(`${i}- ${menu[i].name}, Cost: ${menu[i].price} tickets`);
    }
}

showGifts();

let run = true;
while (run) {
    console.log(
        "\nWhat do you want to do?\n" +
            "1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop"
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

        case "5":
            run = false;
            break;

        default:
            console.log("Please enter a valid number!");
    }
}

console.log("Have a nice day!");
