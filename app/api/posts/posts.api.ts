import { getCookie } from 'cookies-next';

export async function getPostsApi() {
  const API = 'http://localhost:4000/posts';
  const cookie = getCookie('AccessToken');
  if (!cookie) return null;
  const res = await fetch(API, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: cookie,
    },
  });
  const posts = await res.json();
  return posts;
}

export async function likePost(postId: string) {
  const API = `http://localhost:4000/posts/like/${postId}`;
  const cookie = getCookie('AccessToken');
  if (!cookie) return null;
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: cookie,
    },
  });
  const liked = await res.json();
  return liked.like;
}
