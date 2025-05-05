import React, { useEffect, useState } from 'react';

import { Avatar } from '@mui/material';
import styled from 'styled-components';

const FeedContainer = styled.div`
  padding: 30px 40px 70px 40px;
  width: 100%;
  max-width: 66.6667%;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const PostList = styled.ul`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const PostItem = styled.li`
  list-style: none;
  padding: 0;
  padding-right: 1.5rem;
  margin-top: 0px;
  margin-bottom: 2.5rem;
  position: relative;
  border-bottom: 1px solid #e7edf2;
  width: 100%;
  box-sizing: border-box;
`;

const PostAvatar = styled.div`
  margin: 0;
  position: absolute;
  left: 0px;
  top: 30px;
  float: left;
  z-index: 1;
  text-align: center;
`;

const PostContent = styled.div`
  margin-left: 55px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

export default function Feed() {
  const [posts, setPosts] = useState([]);

  // Fetch all posts upon initial render
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/posts`,
          {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
            },
          }
        );
        if (!response.ok) {
          throw new Error('ERROR FETCHING', response.status);
        }
        const data = await response.json();
        console.log('Fetched posts', data);
        setPosts(data);
      } catch (err) {
        console.error('ERROR! Message:', err.message);
      }
    };

    getAllPosts();
  }, []);

  function formatDate(dateString) {
    const nowMs = Date.now();
    const postedMs = new Date(dateString).getTime();
    // always work with a positive difference
    const diffMs = Math.abs(nowMs - postedMs);

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours   = Math.floor(diffMs / (1000 * 60 * 60));
    const days    = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (seconds < 60) {
      return `posted ${seconds} seconds ago`;
    } else if (minutes < 60) {
      return `posted ${minutes} minutes ago`;
    } else if (hours < 24) {
      return `posted ${hours} hours ago`;
    } else {
      return `posted ${days} days ago`;
    }
  }

  return (
    <FeedContainer>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <PostAvatar>
              <Avatar sx={{ bgcolor: 'purple', width: '30px', height: '30px' }}>
                <p style={{ fontSize: '18px' }}>BB</p>
              </Avatar>
            </PostAvatar>
            <PostContent>
              <div style={{ marginBottom: '0.5rem', textAlign: 'left' }}>
                <div>
                  <p> {post.caption} </p>
                </div>
                <div>
                  <p style={{ fontSize: '1rem', color: 'gray' }}>
                    {formatDate(post.created_at)}
                  </p>
                </div>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p>this is a comment</p>
              </div>
            </PostContent>
          </PostItem>
        ))}
      </PostList>
    </FeedContainer>
  );
}
