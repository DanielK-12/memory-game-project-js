/*
TASK
THE FORTUNE TELLER
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call the function 3 times with 3 different values for the arguments.
*/

function tellFortune(x, y, z, n) {
    let fortune = x + y + z + n;
    console.log("You will be a " + x + " " + "in " + y + " " + "and married to " + z + " " + "with " + n + " " + "kids")
}

tellFortune("developer", "Puerto Rico", "Sofia Vokhmina", 3);
tellFortune("Nba player", "Chicago", "Viki Odintcova", 2);
tellFortune("Pilot", "Rio De Janeiro", "Kendall Jenner", 4);