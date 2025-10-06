import React from 'react';
import PostCard from '../components/PostCard';

// 模拟文章数据
const posts = [
  { id: '1', title: 'Hello World', excerpt: '我的第一篇博客' },
  { id: '2', title: 'My Frontend Journey', excerpt: '前端学习之旅' },
];

const Home: React.FC = () => {
  return (
    <div>
      <h2>文章列表</h2>
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Home;