
import './App.css'
import Navbar from './Components/NavBar/Navbar';
// import DaisyNav from './Components/DaisyNav/DaisyNav';
import PriceOption from './Components/PriceOption/PriceOption'
function App() {


  return (
    <>
   <div className='bg-zinc-800 text-white w-[100%] h-[100vh]'>
   <Navbar></Navbar>
    <PriceOption></PriceOption>
     {/* <DaisyNav></DaisyNav> */}
     
      
   </div>
    </>
  )
}

export default App;
