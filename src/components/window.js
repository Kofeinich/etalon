import React, {useEffect, useState} from 'react';

const useWindowWidth = () => {
    const [width,setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize',handleResize);
        console.log('resize');

        return () => window.removeEventListener('resize',handleResize);
    },[window.innerWidth]);

    return width;
}
export default useWindowWidth