  import React from "react";
  import { MdDeleteOutline } from "react-icons/md";

  function Card({ cur, onDelete }) {
  
    return (
      <center>
        <div className="card m-5 position-relative" style={{ width: "35rem" }}>
          <span
            className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger btn  cursor-pointer"
            style={{ width: "2.5rem", height: "2.5rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            onClick={() => onDelete(cur.id)} // Call the onDelete function with the card's ID
          >
            <MdDeleteOutline style={{ fontSize: "1.5rem" }} />
          </span>
          <div className="card-body">
            <img src={cur.Title} className="img-fluid" alt="..." />
            <h3 className="card-text m-2">{cur.Thoughts}</h3>
            {cur.tags.map((tag, index) => (
              <a key={index} href="#" className="btn btn-primary ms-3">
                {tag}
              </a>
            ))}
          </div>
        </div>
      </center>
    );
  }

  export default Card;
