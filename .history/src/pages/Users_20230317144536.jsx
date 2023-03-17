
import { useState, useEffect } from "react";
export default function Users() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  let users = []
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://localhost/users/all")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result)
          console.log(Object.keys(result))
          console.log(Object.values(result)[3])
          users = Object.values(result)[3]
          console.log(users)

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
        <div>{users.map((user)=>
            <div>{user.firstName}</div>
        )}</div>
    );
  }
}

