import React, { useState } from 'react'

const ThemeContext = React.createContext(null); 

export const ThemeContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
  return (
      <ThemeContext.Provider value={{isDark,setIsDark}}>
          {children}
    </ThemeContext.Provider>
  )
}

 export default ThemeContext