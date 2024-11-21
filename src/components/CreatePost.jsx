import React, { useContext, useRef } from "react";
import { UserContext } from "../store/reducer";

function CreatePost() {
  const Title = useRef();
  const Thought = useRef();
  const Tag = useRef();
  const { addpost, setState } = useContext(UserContext);
  
  const handlepost = (e) => {
    e.preventDefault();
    
    const file = Title.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        addpost(reader.result, Thought.current.value, Tag.current.value.trim().split(" "));
        Title.current.value = "";
        Thought.current.value = "";
        Tag.current.value = "";
        setState("Home");
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <form className="ms-4 " onSubmit={handlepost}>
      <div className="mb-3">
        <label htmlFor="Title" className="form-label">
          Picture
        </label>
        <input ref={Title} type="file" className="form-control" id="Title" />
      </div>
      <div className="mb-3">
        <label htmlFor="Thought" className="form-label">
          Thoughts
        </label>
        <input
          ref={Thought}
          type="text"
          className="form-control"
          id="Thought"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Tags" className="form-label">
          Tags
        </label>
        <input ref={Tag} type="text" className="form-control" id="Tags" />
      </div>
      <button type="submit" className="btn btn-primary">
        Share
      </button>
    </form>
  );
}

export default CreatePost;
