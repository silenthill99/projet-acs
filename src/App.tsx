import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/home.tsx";
import {useState} from "react";
import Presentation from "./pages/presentation.tsx";

function App() {

    const [showMenu, setShowMenu] = useState(false);

    function closeMenu() {
        return setShowMenu(false);
    }

    return (
        <section className={"min-h-screen flex flex-col font-roboto bg-amber-950"}>
            <header className={"min-h-12.5 bg-gray-300"}>
                <nav className={"container mx-auto flex items-center justify-between"}>
                    <h1 className={"text-center ps-2"}>MineAnime</h1>
                    {/*Menu classique*/}
                    <ul className={"hidden md:flex gap-3 text-xl"}>
                        <li>
                            <NavLink to={"/"}
                                     className={(nav) => `hover:underline ${nav.isActive && "border-x px-2"}`}>Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/presentation"}
                                     className={(nav) => `hover:underline ${nav.isActive && "border-x px-2"}`}>Qui
                                sommes-nous ?</NavLink>
                        </li>
                    </ul>

                    {/*Menu mobile*/}
                    <button className={"md:hidden p-5"} onClick={() => setShowMenu(true)}>
                        <img src="/burger-bar.svg" alt="Burger" className={"h-6.25"}/>
                    </button>
                    <ul className={`${!showMenu && "hidden"} md:hidden bg-white fixed left-0 top-0 bottom-0 right-0 flex justify-center items-center
                        flex-col gap-3`}>
                        <button className={"absolute top-5 right-5 active:bg-gray-400"} onClick={closeMenu}>
                            <img src="/croix.svg" alt="Fermer" className={"w-6.25"}/>
                        </button>
                        <NavLink to={"/"} onClick={closeMenu}>Page d'accueil</NavLink>
                        <NavLink to={"/presentation"} onClick={closeMenu}>Qui sommes-nous ?</NavLink>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/presentation"} element={<Presentation/>}/>
            </Routes>
        </section>
    )
}

export default App
