import { createContext, useContext } from "react"
export type GlobalContent = {
  primary: string
  setPrimary:(c: string) => void
}
export const GlobalContext = createContext<GlobalContent>({
    primary: '#ffffff', // set a default value
    setPrimary: () => {},
})
export const useGlobalContext = () => useContext(GlobalContext)