import { useState, useEffect } from "react";
const NavScroller = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/v1/categories")
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories.data);
      })
      .catch((error) => console.log("error fetch categories", error));
  }, []);
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        {categories.map((cat) => {
          return (
            <a className="p-2 text-muted" href="#" key={cat.id}>
              {cat.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default NavScroller;
