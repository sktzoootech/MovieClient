import { useContext  } from "react"
import { loaderContext } from "../providers/LoaderContext";

export const useLoader = () => {
    return useContext(loaderContext);
}