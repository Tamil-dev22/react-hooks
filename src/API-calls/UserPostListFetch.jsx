import React, { useEffect, useState } from 'react'

const UserPostListFetch = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers();
        getPosts();
    }, [])
    
// fetch in try catch
const getUsers = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    setUsers(data);
  } catch (error) {
    console.log("User Error:", error.message);
  }
};
const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => setPosts(data))
    .catch((error) => {
      console.log("Post Error:", error.message);
    });
};

    return (
        <>
            <div>
                <h2>Users</h2>

                {users.map((user) => (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                ))}

                <h2>Posts</h2>
                
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UserPostListFetch