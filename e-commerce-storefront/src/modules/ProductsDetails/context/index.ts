import { GiWaterRecycling } from "react-icons/gi";
import { GiCircleForest } from "react-icons/gi";
import { GiCircularSaw } from "react-icons/gi";
import { GiMoebiusTriangle } from "react-icons/gi";
import { BiLogoYelp } from "react-icons/bi";




export const productsDetails = [
    {
        id:1,
        productsId:"TCW3532-3432-XS",
        title:"Cloud Shell Long Puffer",
        price:328.00,
        subtitle:"Women's Long Puffer Jacket",
        reviews:"141 reviews",
        colorTitle:"core colour",
        coreColor:[
            {
                id:1,
                color:"#ebe4da"
            },
            {
                id:2,
                color:"#48413b"
            },
            {
                id:3,
                color:"#27272a"
            }
        ],
        size: [
            { id: 1, name: "xs" },
            { id: 2, name: "s" },
            { id: 3, name: "m" },
            { id: 4, name: "l" },
            { id: 5, name: "xl" }
        ],
    
        title2:"Meet the product",
        desc:"This sustainable winter jacket uses the most eco-friendly tech out there. To keep you warm on the coldest of days, we've filled it with ecofriendly PrimaLoft® Black ThermoPlume for dynamic performance. "
    
    }
]


export const details = [
    {
        id: 1,
        logo: GiWaterRecycling, 
        title: "Water Repellent",
        desc: "This item is covered with a non-toxic, PFC-free DWR coating for enhanced water resistance."
    },
    {
        id:2,
        logo:GiCircleForest,
        title:"Cruelty-Free Insulation",
        desc:"No animals were harmed to create this item's insulation."
    },
    {
        id:3,
        logo:GiCircularSaw,
        title:"Bluesign Approved Materials",
        desc:"These materials were made in Bluesign® certified facilities, which are held to the highest standards of safety, environmental impact and responsible resource use."
    },
    {
        id:4,
        logo:GiMoebiusTriangle,
        title:"Made from recycled materials",
        desc:"This fabric is made with recycled fibers and/or materials such as plastic bottles/waste, textile waste, recycled clothing, fishing nets, etc."
    },
    {
        id:5,
        logo:BiLogoYelp,
        title:"Sustainable Trim",
        desc:"The trims used in this style are made from recycled or responsibly sourced materials."
    }
]


export const Features = [
    {
        id: 1,
        logo: GiWaterRecycling, 
        title: "Estimated Rating Warmer",
        desc: "This item is made to withstand temperatures down to -15 °C. This rating is an estimate, and may vary depending on factors like wind chill, humidity or the addition of performance base layers."
    },
    {
        id:2,
        logo:GiCircleForest,
        title:"Adjustable",
        desc:"This item includes drawcords, belts, straps or other features that can be adjusted for fit or style."
    },
    {
        id:3,
        logo:GiCircularSaw,
        title:"Bluesign Approved Materials",
        desc:"These materials were made in Bluesign® certified facilities, which are held to the highest standards of safety, environmental impact and responsible resource use."
    },
    {
        id:4,
        logo:GiMoebiusTriangle,
        title:"Removable Hood",
        desc:"This garment's hood can be completely removed."
    },
    {
        id:5,
        logo:BiLogoYelp,
        title:"Cell Phone Pocket",
        desc:"This item includes a specially designed pocket to store your cell phone."
    },
    {
        id:6,
        logo:BiLogoYelp,
        title:"Fully Lined",
        desc:"The hood, sleeves and body of this garment are all lined to reduce internal friction and maximize the life of your clothes."
    }
]

// Size and fit

export const Fit = [
    {
        id:1,
        title:"Fit: Relaxed Fit - This garment fits looser on the body, for a more relaxed feel and look."
    },
    {
        id:2,
        title:"Stretch: No/Minimal Stretch - This fabric does not stretch. Select the size that fits the widest part of your body for the best fit. Size up for a looser fit."
    },
    {
        id:3,
        title:"Below knee length"
    },
    {
        id:4,
        title:"Built to be layered over a sweater."
    },
    {
        id:5,
        title:"Size down for a slimmer fit."
    }
]

export const shipping = [
    {
        id:1,
        title:"Shipping & Delivery",
        desc:"Free Shipping on this item."
    },
    {
        id:2,
        title:"Returns & Exchanges",
        desc:"$10 returns (Shipping label fee). Valid within 30 days of purchase."
    },
    {
        id:3,
        title:"Customer Care",
        desc:"Our customer care team is ready to help. Typical 24 business hour response time."
    },
    {
        id:4,
        title:"Circularity",
        desc:"This item is eligible for our take back program that repurposes and recycles your old tentree clothing, so that nothing goes to waste."
    }
]



// Comment Sections
export const Comments = [
    {
        id:1,
        name:"Julie B.",
        tag:"Good undies",
        date:"26 March 2024",
        desc:"I like the fabric and the cut is comfortable. However, the fabric pills too quick. Considering I launder them in a laundry bag and air dry, the fabric should not pill so easily and the band not stretch as quickly. Purchased two more pairs to replace 1 pair that was unraveling at the seams.",
    },
    {
        id:2,
        name:"Fredella W.",
        tag:"Best underwear!",
        date:"26 Jan 2024",
        desc:"These are my new favourite underwear! I already had the same in pink and decided to get another pair while I was making another order.",
    },
    {
        id:3,
        name:"Lyndsay B.",
        tag:"Very comfy",
        date:"05 February 2024",
        desc:"Not a ton of stretch but the fabric is very comfortable. Good coverage. I've bought more pairs since trying out the first pair.",
    }
]