import './App.css';
import  Navbar from "./features/navigation/Navbar"
import {Box} from "@mui/material";
import {BrowserRouter} from "react-router-dom"
import Approutes from "./features/navigation/Approutes";
import Appbar from "./features/navigation/Appbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className="App">
     <Appbar />

        { /* Routes */}
        <BrowserRouter>
            <Box mt={8} mb={4}>
                <Approutes />
            </Box>
            <Navbar />
        </BrowserRouter>
        { /* End Routes */}

    </div>
  );
}

export default App;

