import React from "react";
import "./Posts.scss";
import { Link, useParams } from "react-router-dom";
import {
  useDeleteItemMutation,
  useGetItemQuery,
} from "./postSlice";
import { Button } from "bootstrap";

//home post
const Posts = () => {
  // get id from outside
  const { id } = useParams();

  // import data from store
  const { data, isError, isSuccess, isLoading } = useGetItemQuery();

  // import delete data from store
  const [
    deleteItem,
    {
      data: isData,
      isError: isRendarError,
      isSuccess: isSuccessOkay,
      isLoading: isLoadingRendar,
    },
  ] = useDeleteItemMutation(id);

  let content = "";

  if (isLoading) {
    content = "Loading . . .";
  }

  if (isSuccess) {
    return (content = (
      <div className="blog my-5">
        <div className="container">
          <Link to='/create' className="new-post-create-btn">Create new post</Link>
          
          <div className="row">
            <div className="col-md-12 my-3">
              {data.map(({ title, desc, photo, id }, index) => {
                return (
                  <div className="card my-3" key={index}>
                    <div className="card-body">
                      <div className="blog-item">
                        <img src={photo} alt="" />

                        <div className="blog-info">
                          <h2>{title}</h2>
                          <p>{desc}</p>
                          <Link to={`${id}`} className="btn btn-primary">
                            Read more
                          </Link>
                          &nbsp;
                          <button className="btn btn-danger" onClick={() => deleteItem(id)}>delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    ));
  }
};

export default Posts;
