// src/providers/PreferencesContext.tsx
import React, { createContext, useState, useCallback, useMemo, ReactNode } from 'react';

type PreferencesContextType = {
    toggleTheme: () => void;
    isThemeDark: boolean;
};

export const PreferencesContext = createContext<PreferencesContextType>({
    toggleTheme: () => { },
    isThemeDark: false,
});

type PreferencesProviderProps = {
    children: ReactNode;
};

export const PreferencesProvider: React.FC<PreferencesProviderProps> = ({ children }) => {
    const [isThemeDark, setIsThemeDark] = useState(false);

    const toggleTheme = useCallback(() => {
        setIsThemeDark((prevTheme) => !prevTheme);
    }, []);

    const preferences = useMemo(
        () => ({
            toggleTheme,
            isThemeDark,
        }),
        [toggleTheme, isThemeDark]
    );

    return (
        <PreferencesContext.Provider value={preferences}>
            {children}
        </PreferencesContext.Provider>
    );
};
