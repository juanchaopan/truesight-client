import "./pixi.ts";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './pages/landing/Landing.tsx';
import Playground from "./pages/playground/Playground.tsx";
import Playground2 from "./pages/playground/Playground2.tsx";
import Playground3 from "./pages/playground/Playground3.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/playground" element={<Playground/>}/>
                <Route path="/playground2" element={<Playground2/>}/>
                <Route path="/playground3" element={<Playground3/>}/>
            </Routes>
        </BrowserRouter>
    );
}
