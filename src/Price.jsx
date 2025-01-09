export default function Price({oldPrice, newPrice}){
    let old={
        textDecorationLine:"line-through",
    };
    
    let newPre={
        fontWeight:"bold"
    }
    let styles= {
        backgroundColor:"yellow",
        height:"30px",
        borderBottomLeftRadius:"10px",
        borderBottomRightRadius:"10px"
    }
    return(
        <div style={styles}>
            <span style={old}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newPre}>{newPrice}</span>
        </div>
    )
}