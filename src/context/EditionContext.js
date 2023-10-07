
import React, { useState } from 'react'
import { useContext } from 'react';


const EditionContext = React.createContext()


export function EditionContextProvider({ children }) {
    const [edition, setEdition] = useState('honduras')

    return <EditionContext.Provider value={{ edition, setEdition }}>
        {children}
    </EditionContext.Provider >
}

export const useEditionContext = () => {
    return useContext(EditionContext);
};