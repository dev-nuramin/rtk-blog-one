import React from "react";
import "./Posts.scss";
import { Link, useParams } from "react-router-dom";
import { useGetSingleItemQuery } from "./postSlice";
const SinglePosts = () => {
  // get id from outside
  const { id } = useParams();

  // get data from store
  const { data, isError, isSuccess, isLoading, error } =
    useGetSingleItemQuery(id);

  // var declear
  let content = "";

  // condition start
  if (isLoading) {
    content = "Loading . . . ";
  }

  if (isSuccess) {
    content = (
      <div className="card my-3">
        <div className="card-body">
          <div className="col-md-12">
            <div className="blog-single-item ">
              <img src={data.photo} alt="" />
               <div className="blog-info">
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
                <Link to="/" className="btn btn-success">
                  Back to blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="blog my-5">
      <div className="container">
        <div className="row">{content}</div>
      </div>
    </div>
  );
};

export default SinglePosts;
