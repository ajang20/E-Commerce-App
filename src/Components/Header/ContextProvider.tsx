import { createContext,useContext,useState, type ReactNode} from "react";



export  const themeContext = createContext<Context | null>(null)
function ContextProvider({children}:{children:ReactNode}) {
      const [themeToggle, setThemeToggle] = useState<string>('light')
     const theme = themeToggle ==='light'?'darkblue':'light';
     
function toggle(){
 setThemeToggle(theme)
 }
  
  return (
   <themeContext.Provider value ={{theme:themeToggle,toggleTheme:toggle}}>
    {children}
   </themeContext.Provider>
  )
}

export default ContextProvider




export function consumecontext (){
  const ctx = useContext(themeContext)

  if(!ctx){
    throw new Error('Context must be used inside Provider')
  }
  return ctx;
}

type Context = {
    theme:string,
    toggleTheme:()=>void
}