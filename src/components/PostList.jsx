import React, { useContext } from "react";
import Card from "./Card";
import { UserContext } from "../store/reducer";

function PostList() {
  const { curr,onDelete } = useContext(UserContext);
  return (
    <>
      {curr.map((cur, index) => (
        <Card key={index} cur={cur} onDelete={onDelete} />
      ))}
    </>
  );
}

export default PostList;
