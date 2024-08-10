import { createPost } from '@/app/types/posts/posts.type';
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

export async function postComment(postId: string | undefined, content: string) {
  const API = `http://localhost:4000/comments/${postId}`;
  const cookie = getCookie('AccessToken');
  if (!cookie) return null;
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: cookie,
    },
    body: JSON.stringify({ content }),
  });
  return res;
}

export async function deleteComment(commentId: string) {
  const API = `http://localhost:4000/comments/${commentId}`;
  const cookie = getCookie('AccessToken');
  if (!cookie) return null;
  const res = await fetch(API, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: cookie,
    },
  });
  return await res;
}

export async function uploadPost(createPost: createPost) {
  const formData = new FormData();
  if (createPost.content) {
    formData.append('content', createPost.content);
  }
  if (createPost.file) {
    formData.append('file', createPost.file);
  }
  const API = `http://localhost:4000/posts`;
  const cookie = getCookie('AccessToken');
  if (!cookie) return null;
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      authorization: cookie,
    },
    body: formData,
  });
  return res;
}

export async function deletePost(postId: string) {
  const API = `http://localhost:4000/posts/${postId}`;
  const cookie = getCookie('AccessToken');
  if (!cookie) return null;
  const res = await fetch(API, {
    method: 'DELETE',
    headers: {
      authorization: cookie,
    },
  });
  return res;
}
