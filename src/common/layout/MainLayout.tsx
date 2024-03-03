import Footer from "./Footer";
import NavBar from "./NavBar";

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <NavBar />
            { children }
            <Footer />
        </>
    )
}

type MainLayoutProps = {
    children: React.ReactNode;
}

export default MainLayout;