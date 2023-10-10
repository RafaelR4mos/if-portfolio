import { ArrowUp } from "@phosphor-icons/react";
import styles from "./ScrollToTop.module.css";
import { useEffect, useState } from "react";


export default function(){
    const [isVisible, setIsVisible] =  useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
    })

    const handleScroll = () =>{
        window.scrollY > 900? setIsVisible(true) : setIsVisible(false);
    }

    const handleClick = () =>{
        window.scroll(0,0);
    }

    return(
        <>
        {isVisible &&
            <div className={styles.topBttn}>     
            <ArrowUp 
            size={32}
            onClick={()=>{handleClick()}}
            />
            </div>
        }
        </>
        
    )
}