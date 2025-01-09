import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Footer } from "../sections";

    const GeneralLayouts = ()=> {
        return (
            <>
            <section className="relative">
                    <Nav />
            </section>

                <Outlet />

                <Footer />
            </>
        )
    }

    export default GeneralLayouts;