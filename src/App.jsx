import react,{ useState } from 'react'

function App() {
const [input ,setInput]= useState("");
const[result ,setResult]=useState("");

const handleClick=(e)=>{
  setInput(input.concat(e.target.name))

}

  const clear =()=>{
    setInput("");
    setResult("");

  };
  const backspace =()=>{
    setInput(input.slice(0,-1));

  };

  const calculate =()=>{
    try{
      setResult(eval(input).toString());
    }
    catch(error){
      setResult("Error");

    };
    

  }

  return (
    <>
    <div className='mt-4 grid justify-items-center bg-gray-200 min-h-screen ml-64 mr-64' >
      <div className=''>
    <input type='text' placeholder='0' value={input} readOnly/>
    
    
    <input type='text' placeholder='Result' value={result} readOnly />
    </div>
      <div>
        <h1>Calculator</h1>
        <div className='keypad'>
          <button onClick={clear} id='clear'>
            Clear </button>
            <button onClick={backspace} id='backspace'>
            Backspace</button>

             <button name="/" onClick={handleClick} >
             &divide;</button>
             <button name="7" onClick={handleClick} >
             7 </button>
             <button name="8" onClick={handleClick} >
             8 </button>
             <button name="9" onClick={handleClick} >
             9 </button>
             <button name="*" onClick={handleClick} >
             &times;</button>
             <button name="4" onClick={handleClick} >
            4 </button>
             <button name="5" onClick={handleClick} >
            5 </button>
             <button name="6" onClick={handleClick} >
            6 </button>
             <button name="-" onClick={handleClick} >
             &ndash;</button>
             <button name="1" onClick={handleClick} >
             1 </button>
             <button name="2" onClick={handleClick} >
             2 </button>
             <button name="3" onClick={handleClick} >
             3 </button>
             <button name="+" onClick={handleClick} >
            + </button>
             <button name="0" onClick={handleClick} >
             0 </button>
             <button name="." onClick={handleClick} >
             . </button>
             <button onClick={calculate} id='result'>
              =
             </button>

          
             </div>
        </div>
       
      </div>
    
    </>
  )
}

export default App
