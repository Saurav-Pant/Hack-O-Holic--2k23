import React from 'react';
import posts from '../content/posts.json';

const Post = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {posts.map((post) => (
        <div key={post.id} className="max-w-xs rounded overflow-hidden shadow-lg">
          <img src={post.image} alt={`Post by ${post.user.name}`} className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{post.user.name}</div>
          </div>
          <div className="px-6 py-4">
            <img src={post.user.avatar} alt={`${post.user.name}'s avatar`} className="w-8 h-8 rounded-full inline-block mr-2" />
            <span className="text-gray-700">{post.user.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
