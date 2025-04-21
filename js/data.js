const gemstones = [
    {
        name: "Ruby",
        color: "Red",
        hardness: 9,
        description: "A precious gemstone known for its vibrant red color.",
        image: "assets/ruby.jpg",
        facts: [
            "Rubies are considered one of the four precious gemstones, along with sapphire, emerald, and diamond.",
            "The red color of rubies comes from the element chromium.",
            "Rubies are often associated with passion, protection, and prosperity."
        ]
    },
    {
        name: "Sapphire",
        color: "Blue",
        hardness: 9,
        description: "A beautiful gemstone often associated with royalty.",
        image: "assets/sapphire.jpg",
        facts: [
            "Sapphires come in many colors, but blue is the most iconic.",
            "Ancient Persians believed that the Earth rested on a giant sapphire, which made the sky blue.",
            "Sapphires symbolize wisdom, virtue, and good fortune."
        ]
    },
    {
        name: "Emerald",
        color: "Green",
        hardness: 7,
        description: "A stunning green gemstone symbolizing rebirth and love.",
        image: "assets/emerald.jpg",
        facts: [
            "Emeralds are part of the beryl mineral family.",
            "Their green color comes from trace amounts of chromium and vanadium.",
            "Cleopatra was known for her love of emeralds."
        ]
    },
    {
        name: "Diamond",
        color: "White",
        hardness: 10,
        description: "The hardest natural gemstone.",
        image: "assets/diamond.jpg",
        facts: [
            "Diamonds are made of carbon and are formed under high pressure and temperature.",
            "The word 'diamond' comes from the Greek word 'adamas,' meaning invincible.",
            "Diamonds have been used as decorative items for centuries, with the first diamond engagement ring given in 1477."
        ]
    }
];

function getGemstones() {
    return gemstones;
}