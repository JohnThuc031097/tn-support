import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({
    mode: 'light',
    toggleColorMode: () => { }
})

export function ColorModeProvider({ children }) {
    const [mode, setMode] = useState('light')
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const nextMode = prevMode === 'light' ? 'dark' : 'light'
                    document.documentElement.setAttribute('data-mode', nextMode)
                    return nextMode
                });

            },
        }),
        [],
    );

    return (
        <ColorModeContext.Provider value={{ mode, ...colorMode }}>
            {children}
        </ColorModeContext.Provider>
    )
}
