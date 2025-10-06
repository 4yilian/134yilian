import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMeta {
  id: string; 
  title: string;
  date: string;
  excerpt: string;
  }
const postsDir = path.join(process.cwd(), 'src/posts');
export function getAllPostMetas(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));

  const postMetas = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDir, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContent);

    return {
      id,
      title: data.title || '无标题',
      date: data.date || '未知日期',
      excerpt: data.excerpt || ''
    } as PostMeta;
  });

  return postMetas.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostById(id: string): PostMeta | null {
  try {
    const fullPath = path.join(postsDir, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
      id,
      title: data.title || '无标题',
      date: data.date || '未知日期',
      excerpt: data.excerpt || '',
      content 
    } as PostMeta;
  } catch (error) {
    return null;
  }
}