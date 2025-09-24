'use client'

import React, { createContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export const NavbarContext = createContext<[boolean, (value: boolean) => void]>([false, () => {}])
export const NavbarColorContext = createContext<[string, (value: string) => void]>(['white', () => {}])

const NavContext = ({ children }: { children: React.ReactNode }) => {

    const [navColor, setNavColor] = useState('white')
    
    const [navOpen, setNavOpen] = useState(false)

    const locate = usePathname()
    useEffect(function(){
        if(locate == '/projects' || locate == '/agence'){
            setNavColor('black')
        }else{
            setNavColor('white')
        }
    },[locate])
    

    return (
        <div>
            <NavbarContext.Provider value={[navOpen, setNavOpen]}>
                <NavbarColorContext.Provider value={[navColor,setNavColor]}>
                    {children}
                </NavbarColorContext.Provider>
            </NavbarContext.Provider>
        </div>
    )
}

export default NavContext
