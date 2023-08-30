import React from "react";
import { useState } from "react";
import { useGetSingleItemQuery, useUpdateItemMutation } from "./postSlice";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

const EditPost = () => {
  // get id from outside
  const { id } = useParams();

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
  // get data from store
  const { data, isError, isSuccess, isLoading, error } =
    useGetSingleItemQuery(id);
  // getting data for edit
  useEffect(() => {
    if (isSuccess) {
      setInput({
        title: data.title,
        desc: data.desc,
        photo: data.photo,
        id: data.id,
      });
    }
  }, [isSuccess]);

  // get final update data
  const [updateItem] = useUpdateItemMutation()
  const handleUpdateData = (e) => {
   e.preventDefault();
   updateItem(input)
  }

  return (
    <div className="create-post">
      <div className="container my-5 justify-content-center">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form action="" onSubmit={handleUpdateData}>
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
                      Update post
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

export default EditPost;
