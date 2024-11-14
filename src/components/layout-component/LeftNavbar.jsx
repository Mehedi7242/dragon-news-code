import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category))
        .catch(error=>console.log(error))
    },[])
    return (
        <div className=" w-11/12 mx-auto">
            <h2 className=" font-extrabold text-lg ">Category</h2>
            {
                categories.map(category=>
                <NavLink to={`/category/${category.category_id}`}
                 className="btn flex flex-col btn-ghost  items-start" 
                 key={category.category_id}>{category.category_name}
                </NavLink>)
            }
        </div>
    );
};

export default LeftNavbar;