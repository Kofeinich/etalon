import React, {useEffect, useState} from 'react';

const useWindowWidth = () => {
    const isBrowser = typeof window !== "undefined"

    const [width,setWidth] = useState(1000);
    useEffect(() => {
        if (isBrowser) {
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize',handleResize);
            console.log('resize');
            return () => window.removeEventListener('resize',handleResize);
        } return null
    },[]);

    return width;

}
export default useWindowWidth