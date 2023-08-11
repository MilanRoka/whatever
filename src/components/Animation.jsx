import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const Animation = () => {
    useEffect(() => {
        // Code to run when the component mounts
        const typewriter = new Typewriter('#typewriter', {
            strings: [
                'I am a React Developer',
                'I am a Tech Enthusiast',
                'and Good Team Player',
            ],
            autoStart: true,
            loop: true,
        });

        return () => {
            // Code to run when the component unmounts
            typewriter.stop(); // Stop the typewriter animation to prevent memory leaks

        };
    }, []); // Empty dependency array ensures that this effect runs only once

    return (
        <div id="typewriter">
            {/* The typewriter animation will be rendered inside this div */}
        </div>
    );
};

export default Animation
