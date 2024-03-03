import Footer from "./Footer";
import LoadingSpinner3 from "../components/LoadingSpinner"
import { useLoader } from "../hooks/useLoader";
import Header from "./Header";

const MainLayout = ({ children }: MainLayoutProps) => {

    const loader = useLoader()
    
    return (
        <>
            <div>{loader?.isLoading ? <LoadingSpinner3 /> : <></> }</div>
            <Header />
            { children }
            <Footer />
        </>
    )
}

type MainLayoutProps = {
    children: React.ReactNode;
}

export default MainLayout;