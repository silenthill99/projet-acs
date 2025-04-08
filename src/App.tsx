import {Route, Routes} from "react-router-dom";
import Home from "./pages/home.tsx";

function App() {
    return (
    <section className={"min-h-screen flex flex-col"}>
        <header className={"h-[50px] bg-gray-200"}>
        </header>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
        </Routes>
    </section>
  )
}

export default App
