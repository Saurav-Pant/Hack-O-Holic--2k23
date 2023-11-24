  "use client"
  import React, { useState } from "react";
  import posts from "../../content/posts.json";
  import NavbarPost from "@/components/NavbarPost";
  import { IoAddCircleOutline } from "react-icons/io5";
  import { BiLike } from "react-icons/bi";
  import { FaComment } from "react-icons/fa";

  const Post = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter posts based on user input
    const filteredPosts = posts.filter((post) =>
      post.user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        <NavbarPost />
        <div className="flex flex-col justify-center items-center mt-5 ">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by user name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-3 px-4 py-2 border rounded-md"
          />

          {/* Display filtered posts */}
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-slate-200 mb-5">
              <div className="flex justify-around items-center">
                <div className="px-6 py-4 ">
                  <img
                    src={post.user.avatar}
                    alt={`${post.user.name}'s avatar`}
                    className="w-8 h-8 rounded-full inline-block mr-2"
                  />
                  <span className="text-gray-700">{post.user.name}</span>
                </div>
                <div>
                  <button className="bg-red-400 px-5 py-2">Add Friend</button>
                </div>
              </div>
              <div
                key={post.id}
                className="rounded overflow-hidden shadow-lg mb-10"
              >
                <img
                  src={post.image}
                  alt={`Post by ${post.user.name}`}
                  className="h-96 w-full"
                />
              </div>
              <div className="flex justify-around mb-5 border-t-2  border-b-2 border-gray-400">
                <button className="ml-20"><BiLike size={27} /></button>
                <button className="ml-20"><FaComment size={25} /></button>
                <hr />
              </div>
            </div>
          ))}

          <div className="fixed bottom-7 right-7">
            <button>
              <IoAddCircleOutline size={60} />
            </button>
          </div>
        </div>
      </>
    );
  };

  export default Post;
