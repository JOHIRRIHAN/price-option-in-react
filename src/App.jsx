import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
// import DaisyNav from './Components/DaisyNav/DaisyNav';
import PriceOption from "./Components/PriceOption/PriceOption";
import RenderLineChart from "./Components/RenderLineChart/RenderLineChart";
import Phones from "./Components/Phones/Phones";
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      </ThemeProvider>
      <div>
        <Navbar></Navbar>
        <div className="px-20">
          <PriceOption></PriceOption>
        </div>
        <RenderLineChart></RenderLineChart>
        <Phones></Phones>
        {/* <DaisyNav></DaisyNav> */}
      </div>
    </>
  );
}

export default App;
