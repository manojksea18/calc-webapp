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
      <div className='w-full max-w-sm p-6 bg-white rounded-lg shadow-md'> 
        <h1 className='text-2xl font-bold text-center mb-6'>Calculator</h1>
        <div className='mb-4'>
    <input type='text' placeholder='0' value={input} className='w-full p-4 text-right text-xl border-gray-300 rounded shadow-md'readOnly/>
    <input type='text' placeholder='Result' value={result} className='mt-4 w-full p-4 text-right text-xl border-gray-300 rounded' readOnly />
    </div>

        <div className='grid grid-cols-4 gap-4'>
          <button onClick={clear} id='clear' className=' bg-red-300 text-white rounded p-3'>
            Clear </button>

            <button onClick={backspace} id='backspace' className='col-span-2 bg-orange-300 text-white rounded p-3'>
            Backspace</button>

             <button name="/" onClick={handleClick} className='text-black bg-gray-300 rounded p-3' >
             &divide;</button>
             <button name="7" onClick={handleClick} className='text-black bg-gray-300 rounded p-3' >
             7 </button>
             <button name="8" onClick={handleClick} className='text-black bg-gray-300 rounded p-3' >
             8 </button>
             <button name="9" onClick={handleClick} className='text-black bg-gray-300 rounded p-3' >
             9 </button>
             <button name="*" onClick={handleClick} className='text-black bg-gray-300 rounded p-3' >
             &times;</button>
             <button name="4" onClick={handleClick} className='text-black bg-gray-300 rounded p-3' >
            4 </button>
             <button name="5" onClick={handleClick} className='text-black bg-gray-300 rounded p-3' >
            5 </button>
             <button name="6" onClick={handleClick} className='text-black bg-gray-300 rounded p-3' >
            6 </button>
             <button name="-" onClick={handleClick} className='text-black bg-gray-300 rounded p-3' >
             &ndash;</button>
             <button name="1" onClick={handleClick} className='text-black bg-gray-300 rounded p-3' >
             1 </button>
             <button name="2" onClick={handleClick} className='text-black bg-gray-300 rounded p-3' >
             2 </button>
             <button name="3" onClick={handleClick} className='text-black bg-gray-300 rounded p-3'>
             3 </button>
             <button name="+" onClick={handleClick} className='text-black bg-gray-300 rounded p-3'>
            + </button>
             <button name="0" onClick={handleClick} className='text-black bg-gray-300 rounded p-3'>
             0 </button>
             <button name="." onClick={handleClick} className='text-black bg-gray-300 rounded p-3'>
             . </button>
             <button onClick={calculate} id='result' className='text-black bg-purple-400 rounded p-3'>
              =
             </button>

          
             </div>
        </div>
       
      </div>
    
    </>
  )
}

export default App;
