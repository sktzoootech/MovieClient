import React, {createContext, useState} from 'react';

export const loaderContext = createContext<LoaderContextType | null>(null);

export const  LoaderProvider = ({children} : LoaderContextProps) => {
    const [isLoading, setIsLoading] = useState<boolean | null>(false);

    return (
        <loaderContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </loaderContext.Provider>    
    );
}

type LoaderContextType = {
    isLoading: boolean | null,
    setIsLoading: (value: boolean) => void
}

type LoaderContextProps = {
    children: React.ReactNode
}