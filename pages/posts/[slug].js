// pages/posts/[slug].js

import { useRouter } from 'next/router';
import Link from 'next/link';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Post: {slug}</h1>
      {/* Fetch and display post content here */}
      <ul>
        <li >
          <Link href="/" className='home-link'>Home</Link>
        </li>
        <li >
          <Link href="/about" className='about-link'>About</Link>
        </li>
        <li >
          <Link href="/dashboard" className='about-link'>Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Post;
