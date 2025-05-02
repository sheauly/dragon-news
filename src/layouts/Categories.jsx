import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div>
            <h2 className='font-bold'>All Category ({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(category => (
                        <NavLink 
                            key={category.id} 
                            to={`/category/${category.id}`} 
                            className="btn border-0  hover:bg-base-100 font-semibold text-accent"
                        >
                            {category.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;
