
export default function Form(){
   return(
    <form onSubmit={Submit}>
        <input type="text" placeholder="Enter Name" required />
        <button>Submit</button>
    </form>
   )
}

function Submit(event){
    event.preventDefault();
    console.log("Form was submitted");
    
    
}