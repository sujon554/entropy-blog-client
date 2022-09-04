import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Post = () => {
  const [success, setSuccess] = useState();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://still-lake-05294.herokuapp.com/post", data)
      .then((res) => {
        if (res.data.insertedId) {
          // alert("blog Addeded Successfully!");
          reset();
          setSuccess("blog Added Successfully !");
        }
      });
  };

  //Remove Success Text
  const successTextRemover = () => {
    setSuccess("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          placeholder="ID"
          label="Outlined" variant="outlined"
          {...register("id")}
          
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          placeholder="Title"
          label="Outlined" variant="outlined"
          {...register("title")}
         
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          placeholder="Body"
          label="Outlined" variant="outlined"
          {...register("body")}
          
        />
        <Button type="submit" variant="contained" color="primary">Add blog</Button>
      </form>
      <p>{success}</p>
    </div>
  );
};

export default Post;
