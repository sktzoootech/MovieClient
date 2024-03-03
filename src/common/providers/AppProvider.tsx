import MainLayout from "../layout/MainLayout";
import RootRouter from "../routers/RootRouter";
import { LoaderProvider } from "./LoaderContext";

const AppProvider = () => {
    return (
        <LoaderProvider>
            <MainLayout>
                <RootRouter />
            </MainLayout>
        </LoaderProvider>
    )
}

export default AppProvider;