import { TypeAnimation } from 'react-type-animation';

interface iProps {
    backLetters: number;
    speed: number;
    children: React.ReactNode;
}

export default function AnimatedCursor(props: iProps){
    const text =  props.children?.toString();
    const effectSpeed:any = props.speed || 50;


    return (
        <>
        {text && 
        <TypeAnimation 
        sequence={[
            text.substring(0 , text.length),
            1000,
            text.substring(0, props.backLetters)
        ]}
        wrapper='span'
        speed={effectSpeed}
        repeat={Infinity}
        />
        }
        </>
    )
}