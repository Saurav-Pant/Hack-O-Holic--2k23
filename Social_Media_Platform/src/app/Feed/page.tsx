import React from "react";
import posts from "../../content/posts.json";

const Post = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 ">
      {posts.map((post) => (
        <div className="bg-slate-200 mb-5">
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
            <button className="border-solid ">Likes</button>
            <button>Comment</button>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
