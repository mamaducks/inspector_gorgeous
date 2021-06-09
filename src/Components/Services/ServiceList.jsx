import Plug from "./plugSVG.svg";
import Attic from "./atticSVG.svg";
import Basement from "./basementSVG.svg";
import Drainage from "./drainageSVG.svg";
import Gutter from "./gutterSVG.svg";
import HeatCool from "./heatcoolSVG.svg";
import Plumb from "./plumbSVG.svg";
import Roof from "./roofSVG.svg";
import Wall from "./wallImg.svg";
import Wind from "./winDoorSVG.svg";

export var services = [
  {
    image: Plug,
    text: "Electrical Panels & Breakers",
  },
  {
    image: Wall,
    text: "Walls, Ceilings, & Floors",
  },
  {
    image: Wind,
    text: "Windows & Doors",
  },
  {
    image: Basement,
    text: "Basement & Foundation",
  },
  {
    image: Drainage,
    text: "Grading & Drainage",
  },
  {
    image: Roof,
    text: "Roof, Flashings, & Trim",
  },
  {
    image: Gutter,
    text: "Gutters & Downspouts",
  },
  {
    image: HeatCool,
    text: "Heating & Cooling",
  },
  {
    image: Plumb,
    text: "Interior Plumbing System",
  },
  {
    image: Attic,
    text: "Attic & Visible Insulation",
  },
];

export var newServices = [
  {
    id: 1,
    title: "TOWNHOME, MANUFACTURED HOME, DUPLEX, MULTIPLEX INSPECTION",
    text: "There are many aspects of condominiums, townhomes, manufactured and mobile homes, duplexes and multiplexes that differ from a permanent residence. Similar to a full home inspection, the home inspector reviews all visual aspects of all major systems specific to these types of homes.",
  },
  {
    id: 2,
    title: "PRE-LISTING INSPECTION",
    text: "A WIN pre-listing home inspection provides you with comprehensive information on the current condition of your home and includes recommendations for property repairs and enhancements to improve the home’s value and marketability.",
  },
  {
    id: 3,
    title: "PRE-OFFER INSPECTION ",
    text: "More common in competitive real estate markets with multiple offers, this preliminary, information-only home inspection evaluates a home’s major systems and any potential issues, giving home buyers the information to make an informed decision on whether to place an offer on a property.",
  },
  {
    id: 4,
    title: "NEW CONSTRUCTION INSPECTION",
    text: "Buying a newly constructed home gives you the opportunity to pick the colors, finishes, and other details that truly make a house your own. But how can you be sure that the quality of your new home isn’t only skin deep? New construction inspections from WIN monitor the home building process at critical building stages to verify that the construction is sound and provides you with the information you need to make informed decisions about your new home.",
  },
  {
    id: 5,
    title: "LIGHT COMMERCIAL INSPECTION",
    text: "Commercial property inspections are a growing portion of the inspection industry. Evaluation of acommercial property has many of the same attributes as a residential home inspection. Our qualified inspectors will evaluate the property under the guidance of the nationally accepted Standards of Practice for Commercial Buildings.",
  },
  {
    id: 6,
    title: "WOOD DESTROYING ORGANISMS / INSECTS (WDO/WDI) INSPECTION",
    text: "WIN's wood destroying organism/insect inspection can be performed at the same time as one of our other inspections, or on its own, so you'll know if termites, ants, dry rot, or another type of destructive organism has worked its way into your house, and your home inspector will provide you with advice on how to handle the problem.",
  },
  {
    id: 7,
    title: "RADON TESTING",
    text: "WIN Home Inspection provides radon testing so you will have peace of mind regarding the safety of your home.",
  },
  {
    id: 8,
    title: "IR THERMOGRAPHY",
    text: "An Infrared (IR) thermal scan can help find anomalies that may otherwise remain hidden in walls, floors and ceilings.",
  },
];

export var prices = [
  {
    id: 1,
    service: "Average Single Family Home (max 4 bed, 2 bath)",
    secondaryText: "up to 2000 sq ft.",
    price: "$425.00",
  },
  {
    id: 2,
    service: "Large Single Family Home, (max 5 bed, 4 bath) ",
    price: "$500.00",
  },
  {
    id: 3,
    service: "Larger Single Family Home",
    price: "schedule for price quote",
  },
  {
    id: 4,
    service: "Condo / Townhouse",
    price: "$375.00",
  },
  {
    id: 5,
    service: "Two-family home",
    price: "$550.00",
  },
  {
    id: 6,
    service: "Three-Four Family Home",
    price: "$650.00",
  },
  {
    id: 7,
    service: "Radon gas test",
    price: "$125.00 ",
  },
  {
    id: 8,
    service: "Radon Test Only (No Home Inspection)",
    price: "$150.00",
  },
  {
    id: 9,
    service: "House is over 75 years old additional fee ",
    price: "$75.00",
  },
];

export var priceCard = [
  {
    id: 1,
    summary: "(Up to 2,500 sq. ft.) Single-family homes/townhomes",
    price: "$395",
  },
  {
    id: 2,
    summary: "Condominiums",
    price: "$325",
  },
  {
    id: 3,
    summary: "*Properties over 2,500 sq. ft.",
    price: "request a free quote today!",
  },
];

export var bundlePrice = [
  {
    id: 1,
    summary: "Home Inspection Radon Testing Termite",
    price: "$540",
  },
  {
    id: 1,
    summary: "Radon Testing",
    secondaryText: "w/ Home Inspection:",
    price: "$125",
    secondaryPrice: "$100",
  },
  {
    id: 2,
    summary: "Termite testing",
    secondaryText: "w/ Home Inspection:",
    price: "$110",
    secondaryPrice: "$90",
  },
];
