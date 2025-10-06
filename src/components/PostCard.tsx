import React from 'react';
import { Link } from 'react-router-dom';

interface PostCardProps {
  title: string;
  excerpt: string;
  id: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt, id }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
      <h3>{title}</h3>
      <p>{excerpt}</p >
      <Link to={`/post/${id}`}>查看详情</Link>
    </div>
  );
};

export default PostCard;