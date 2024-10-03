import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../UserItem.css";

export const UserItemComponent = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(
      "https://boolean-uk-api-server.fly.dev/h602121/contact/" + id.toString()
    )
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        console.log(x);

        setUser(x);
      });
  }, [id]);

  return (
    <div className="user-item">
      <h2>{user.firstName + " " + user.lastName}</h2>
      <p>{user.street + " " + user.city}</p>
    </div>
  );
};

export default UserItemComponent;
