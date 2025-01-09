export default function Btn(){
    return(
        <div>
            <button onClick={Hello}>Grab Now</button>
            <h2 onClick={say}>Hello Everyone Click Me</h2>
        </div>
    );
}

function Hello(){
    console.log("Welcome");
    
}

function say(){
    console.log("Pokiemon");
    
}