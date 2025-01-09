
import React,{useState} from "react";

export default function Filter(){
    let [Store, SetStore]= useState("");

    let Inp= (event)=>{
       SetStore(event.target.value);
       
    }
    
    let Btn = ()=>{
       
        let Product = [
            {Book:'React', Publish: '2001', Writer: 'Aman'},
            {Book:'SST', Publish: '2008', Writer: 'Sakshi'},
            {Book:'History', Publish: '2001', Writer: 'Khushi'},
            {Book:'JAVA', Publish: '2010', Writer: 'Vijay'},
            {Book:'Chemistry', Publish: '2001', Writer: 'Aman'},
            {Book:'CSS', Publish: '2019', Writer: 'Sonu'},
        ]; 
    
        let UserBook= Product.filter((bk)=> {
            return bk.Writer === Store || bk.Book === Store || bk.Publish > Store});
            console.log(UserBook);

        }


    return(
        <div>
            <input type="Select" onChange={Inp} />
            <button onClick={Btn}>Search</button>

            <ul>
                
            </ul>
        </div>
    );
}

