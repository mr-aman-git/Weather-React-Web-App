import Product from "./Product";
let sty={
    display:"flex",
    flexWrap:"wrap",
    
    justifyContent:"center",
    alignItem:"center"
}

export default function ProductTab(){
    return(
        <div style={sty}>
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple Pencil (2nd gen)" idx={1} />
            <Product title="Iphone 15" idx={2} />
            <Product title="Electronics Gadgets" idx={3} />
        </div>
    );
}