import { createContext, useReducer, useState } from "react";

export const UserContext = createContext();
let newid = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "add-post":
      return [
        {
          id: newid++,
          Title: action.payloads.Title,
          Thoughts: action.payloads.Thought,
          tags: action.payloads.Tags,
        },
        ...state,
      ];
    case "onDelete":
      return state.filter((post) => post.id !== action.payloads.id); 
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [curr, dispatch] = useReducer(reducer, []);
  const [state, setState] = useState("Create Post");

  const addpost = (Title, Thought, Tags) => {
    dispatch({
      type: "add-post",
      payloads: {
        Title,
        Thought,
        Tags,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "onDelete", 
      payloads: {
        id,
      },
    });
  };

  return (
    <UserContext.Provider value={{ curr, addpost, state, setState, onDelete }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
