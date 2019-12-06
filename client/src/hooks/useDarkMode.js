import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (title, element) =>{
    const [darkMode, setDarkMode] = useLocalStorage(title, false);

    let queryElement = document.querySelector(element);

    useEffect(() =>{
        darkMode ? queryElement.classList.add('dark') : queryElement.classList.remove('dark');

    }, [darkMode, queryElement]);

    return [darkMode, setDarkMode];
};

export default useDarkMode;
