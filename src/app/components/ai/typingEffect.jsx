import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50, onDone) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        setDisplayText('');

        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
                onDone && onDone();
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, onDone]);

    return displayText;
};



const Typewriter = ({ text, speed, onDone }) => {
    const displayText = useTypewriter(text, speed, onDone);
    return <p>{displayText}</p>;
};


export default Typewriter;