'use strict';

// Return a Silly Name
function sillyname() {
    // Basic Random
    function rnd(n) { return Math.floor(Math.random()*n) }

    // First Name
    return ["Runny","Buttercup","Dinky","Princess","Crusty",
    "Greasy","Gidget","Cheesypoof","Lumpy","Wacky","Tiny","Flunky",
    "Fluffy","Zippy","Doofus","Gobsmacked","Slimy","Grimy","Salamander",
    "Dr","Burrito","Bumpy","Loopy",
    "Snotty","Irving","Egbert"][rnd(25)] + "_" +

    // Last Name
    ["Waffer","Lilly","Bubblegum","Sand","Fuzzy","Kitty",
    "Puppy","Snuggles","SpacePrincess","Stinky","Lulu",
    "Lala","Sparkle","Glitter",
    "Silver","Golden","Rainbow","Cloud",
    "Rain","Stormy","Wink","Sugar",
    "Twinkle","Star","Halo","Angel"][rnd(25)];
}

// Return a Silly Name
function randcolor() {
    // Basic Random
    function rnd(n) { return Math.floor(Math.random()*n) }

    // First Name
    return ["red","pink","purple","deep-purple","indigo",
    "blue","light-blue","cyan","teal","green","light-green","lime",
    "khaki","yellow","amber","orange","deep-orange","blue-grey","brown",
    "grey","dark-grey","black","/w3schools"][rnd(25)]
}
