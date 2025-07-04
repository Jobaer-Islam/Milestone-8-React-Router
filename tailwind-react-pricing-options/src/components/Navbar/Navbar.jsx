import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';


const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = navItems.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-around mt-5'>

            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <X className='md:hidden'></X> :
                        <Menu className='md:hidden'></Menu>
                }

                <ul className={`md:hidden absolute duration-1000
                     ${open? 'top-14' : '-top-40'}
                      bg-red-400`}>
                    {links}
                </ul>

                <h3 className='ml-4'>GYM Real</h3>
            </span>

            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>

            {/* <ul>
                {
                    navItems.map(route=><li className='mr-10'><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}
            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/About">About</a></li>
                <li className='mr-10'><a href="/Blogs">Blogs</a></li>
            </ul> */}
            <button className='btn btn-info'>Sign in</button>
        </nav>
    );
};

export default Navbar;