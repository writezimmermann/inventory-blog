import { getPosts } from '@/lib/posts';
import PostsList from './components/PostsList';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <PostsList posts={posts} />
    </main>
  );
} 