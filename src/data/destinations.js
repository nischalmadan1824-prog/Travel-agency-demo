import kashmirImg from "../assets/home/kashmir.jpg";
import ladakhImg from "../assets/home/ladakh.jpg";
import goaImg from "../assets/home/goa.jpg";
import keralaImg from "../assets/home/kerala.jpg";
import rajasthanImg from "../assets/home/rajasthan.jpg";
import andamanImg from "../assets/home/andaman.jpg";

const destinations = [
    {
        id: "kashmir",
        name: "Kashmir",
        region: "North India",
        category: "Mountains",
        tagline: "Heaven on Earth",
        description:
            "Snowy peaks, quiet valleys and unforgettable Himalayan landscapes.",
        image: kashmirImg,
        duration: "6 Days / 5 Nights",
        price: "₹18,999",
        startingPoint: "Bengaluru",
        includes: ["Hotels", "Breakfast", "Sightseeing"],
        highlights: [
            "Srinagar",
            "Gulmarg",
            "Pahalgam",
            "Dal Lake",
        ],
    },

    {
        id: "ladakh",
        name: "Ladakh",
        region: "North India",
        category: "Mountains",
        tagline: "Where the mountains call",
        description:
            "High-altitude roads, dramatic mountains and endless open skies.",
        image: ladakhImg,
        duration: "7 Days / 6 Nights",
        price: "₹24,999",
        startingPoint: "Delhi",
        includes: ["Hotels", "Transfers", "Permits"],
        highlights: [
            "Leh",
            "Nubra Valley",
            "Pangong Lake",
            "Khardung La",
        ],
    },

    {
        id: "goa",
        name: "Goa",
        region: "West India",
        category: "Beaches",
        tagline: "Sun, sand & slow days",
        description:
            "Golden sunsets, coastal roads and slow beachside days.",
        image: goaImg,
        duration: "5 Days / 4 Nights",
        price: "₹12,999",
        startingPoint: "Bengaluru",
        includes: ["Hotels", "Breakfast", "Transfers"],
        highlights: [
            "North Goa",
            "South Goa",
            "Beaches",
            "Old Goa",
        ],
    },

    {
        id: "kerala",
        name: "Kerala",
        region: "South India",
        category: "Nature",
        tagline: "God's own country",
        description:
            "Backwaters, lush landscapes and peaceful escapes into nature.",
        image: keralaImg,
        duration: "6 Days / 5 Nights",
        price: "₹16,999",
        startingPoint: "Bengaluru",
        includes: ["Hotels", "Breakfast", "Houseboat"],
        highlights: [
            "Munnar",
            "Alleppey",
            "Thekkady",
            "Kochi",
        ],
    },

    {
        id: "rajasthan",
        name: "Rajasthan",
        region: "West India",
        category: "Heritage",
        tagline: "Royal stories & golden sands",
        description:
            "Palaces, forts, desert skies and stories from another era.",
        image: rajasthanImg,
        duration: "7 Days / 6 Nights",
        price: "₹21,999",
        startingPoint: "Delhi",
        includes: ["Hotels", "Breakfast", "Sightseeing"],
        highlights: [
            "Jaipur",
            "Jodhpur",
            "Jaisalmer",
            "Udaipur",
        ],
    },

    {
        id: "andaman",
        name: "Andaman",
        region: "Island India",
        category: "Beaches",
        tagline: "Into the blue",
        description:
            "Turquoise waters, island adventures and tropical calm.",
        image: andamanImg,
        duration: "6 Days / 5 Nights",
        price: "₹22,999",
        startingPoint: "Chennai",
        includes: ["Hotels", "Breakfast", "Island Transfers"],
        highlights: [
            "Port Blair",
            "Havelock Island",
            "Radhanagar Beach",
            "Neil Island",
        ],
    },
];

export default destinations;