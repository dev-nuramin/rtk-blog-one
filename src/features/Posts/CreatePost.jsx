import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Posts.scss";
import { useCreateItemMutation } from "./postSlice";
const CreatePost = () => {
  // create post data from form
  const [input, setInput] = useState({
    title: "",
    desc: "",
    photo: "",
  });
  //
  // declear data from form

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // get data from rtk store;
  const [createItem, isError, isSuccess, isLoading, error] =
    useCreateItemMutation();

  // now submit form for create new data

  const handleSubmitForm = (e) => {
    e.preventDefault();
    createItem(input);
    setInput("");
  };
  return (
    <div className="create-post">
      <div className="container my-5 justify-content-center">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form action="" onSubmit={handleSubmitForm}>
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={input.title}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Desc"
                    name="desc"
                    value={input.desc}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="photo"
                    name="photo"
                    value={input.photo}
                    onChange={handleInputChange}
                  />
                  <div className="btns">
                    <button type="submit" className="btn btn-primary">
                      Create post
                    </button>{" "}
                    &nbsp;
                    <Link to="/" href="" className="back-to-home-btn">
                      Back to home
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
