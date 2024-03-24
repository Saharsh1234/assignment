import React, { useRef, useEffect, useState } from 'react';
import logoImage from "../assets/Logo.png";
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import "../styles/Navbar/Navbar.css";

const navData = [
    'Home',
    'Electronics',
    'Books',
    'Music',
    'Movies',
    'Clothing',
    'Games',
    'Furniture',
    'Electronics',
    'Travel',
    'Botanical',
    'Category name'
];

const Navbar = () => {
    const containerRef = useRef(null);
    const [navItems, setNavitems ] = useState(navData)
    const [overflowItems, setOverflowItems] = useState([]);
    const [showDropDown, setShowDropDown] = useState(false)

    // useEffect(() => {
    //     for (let i = 0; i < navData.length; i++ ) {
    //         if (!overflowItems.includes(navData[i]) && !navItems.includes(navData[i])) {
    //             setNavitems(prev => {
    //                 const arr = [...prev] 
    //                 arr.push(navData[i])

    //                 return navData
    //             })
    //         }
    //     }
    // }, [overflowItems])

    useEffect(() => {
        const updateOverflowItems = () => {
            if (containerRef.current) {
                // const { width } = containerRef.current.getBoundingClientRect();
                const containerWidth = containerRef.current.offsetWidth;
                console.log(containerWidth)
                const itemsWidth = Array.from(containerRef.current.children).map(child => child.offsetWidth);
                console.log(itemsWidth)
                let totalWidth = 0;
                const overflowingItems = [];

                for (let i = 0; i < itemsWidth.length; i++) {
                    totalWidth += itemsWidth[i] + 44 // css gap;
                    if (totalWidth > containerWidth) {
                        overflowingItems.push(navData[i + 1]);

                        // if (navItems.includes(navData[i])) {
                        //     setNavitems(prev => prev.filter(item => item !== navData[i]))
                        // }
                        // setNavitems(prev => prev.filter(item => item !== navData[i]))
                    }
                }
                setOverflowItems(overflowingItems);
                console.log(overflowingItems)
            }
        };

        // Call updateOverflowItems initially and on window resize
        updateOverflowItems();
        window.addEventListener('resize', updateOverflowItems);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', updateOverflowItems);
        };
    }, []); // Empty dependency array to run effect only once on mount

    return (
        <div className='navbar-main-div'>
            <div className='logo-div'>
                <img
                    src={logoImage}
                    className='logo-main'
                    alt='e-comm'
                />
            </div>

            <div className='nav-items-main'>

            <div ref={containerRef} className='all-links-container'>
                {navItems.map((item, index) => (
                    <p 
                        className='nav-item-text'
                        key={index}
                    >
                        {item}
                    </p>
                ))}
            </div>

            <div className='more-dropdown'>
                <p onClick={() => setShowDropDown(prev => !prev)} className='more-text'>
                    MORE <span><FaChevronDown /></span>
                </p>
                {overflowItems && overflowItems.length > 0 && showDropDown &&
                <div className='drop-down'>
                    {overflowItems.map((item, id) => (
                        <div onClick={() => setShowDropDown(false)} key={id} className='drop-down-item'>
                            <p className='text'>{item}</p>
                        </div>
                    ))}
                </div>}
            </div>

            </div>

            <div className='search-div'>
                <p className='search-icon'>
                    <IoSearch />
                </p>
                <input
                    type='text'
                    placeholder='Search something'
                    className='search-input'
                />
            </div>
        </div>
    );
};

export default Navbar;