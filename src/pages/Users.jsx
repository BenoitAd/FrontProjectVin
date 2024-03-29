
import { useState, useEffect } from "react";
import User from "../components/users/User";
export default function Users() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://localhost/users/all")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(Object.values(result)[3]);
          console.log(result)
          console.log(Object.keys(result))
          console.log(Object.values(result)[3])


        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error)
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <div>{items.map((user) =>
            <User user={user}/>
        )}</div>
    );
  }
}

