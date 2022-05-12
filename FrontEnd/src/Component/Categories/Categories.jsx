import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import "./Categories.css";

const Categories = (props) => {
  const [categoryList, setCategory] = useState([]);
  // const categoryList;
  useEffect(() => {
    fetch("http://localhost:4000/category").then((result) => {
      result.json().then((resp) => {
        console.log("result", resp);
        setCategory(resp);
      });
    });
  }, []);
  // .catch(error => console.error(error));
  //console.log(categoryList)
  // const [category,setCategory] = useState("");

  // async function submitForm(event) {
  //   event.preventDefault();
  //   const categoryList =await fetch('http://localhost:4000/category', {
  //     method: 'GET',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //         category,
  //     }),
  //   })
  //   const data = await categoryList.json();

  //   console.log("result",data);
  // }
  return (
    <>
      <h2 class="mb-4 mb-lg-6 text-center mt-4 ">Categories:</h2>
      <div className="booklist" data-aos="fade-left">
        {/* <Link className="Link" to="/Courses"><Sub /></Link>
            <Link className="Link" to="/Courses"><Sub /></Link>
            <Link className="Link" to="/Courses"><Sub /></Link>
            <Link className="Link" to="/Courses"><Sub /></Link> */}
        {categoryList.map((category) => (
          <Link className="Link" to={`/category/${category._id}`}>
            <Sub name={category.name} />
          </Link>
        ))}
      </div>
    </>
  );
};
const Sub = (props) => {
  return (
    <div className="Book1">
      {/* <div className="Book-inside"> */}
      <FontAwesomeIcon width={"2em"} icon={faPlane} />
      {/* </div> */}
      <h3 className="mt-2 Book-inside2">{props.name}</h3>
    </div>
  );
};

export default Categories;
