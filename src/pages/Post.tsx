import React from 'react';
import { useParams } from 'react-router-dom';
import *as parseMarkdown from 'C:/Users/lyl18/my-blog/src/utils/markdown'; // 假设后续会有解析 markdown 的工具函数
import  {getPostBySlug}  from '../utils/posts'; // 假设后续会有获取文章的工具函数

const Post: React.FC = () => {
  const { id } = useParams();
  const post = getPostBySlug(id); // 模拟根据 id 获取文章
  const content = post ? parseMarkdown(post.content) : <p>文章不存在</p >;

  return (
    <div>
      {post && <h2>{post.title}</h2>}
      {content}
    </div>
  );
};

export default Post;