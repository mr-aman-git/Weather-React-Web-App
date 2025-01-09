import "./Product.css";
import Price from "./Price";
import Image from "./Image"

export default function Product({title, idx}){
    let oldPrices=["23,999", "2,999", "45,999", "4,999"];
    let newPrices=["13,999", "1,999", "40,999", "2,999"];
    let Description=[["Blockbuster Deals", "Grab Now"], ["Smart Pencil", "Electronics deal"], ["Apple Product", "Mobile Accessories"], ["Expensive Deal", "Bumber Offer"]];
    
    return(
        <div className="Product" onClick={Anchor}>
            <h4>{title}</h4>
            <Image />
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

function Anchor(){
    console.log("Clicked");
}