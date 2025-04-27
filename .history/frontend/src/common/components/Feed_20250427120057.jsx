import React, { useState } from 'react';

import { Avatar } from '@mui/material';
import styled from 'styled-components';

const FeedContainer = styled.div`
  padding: 30px 40px 70px 40px;
  flex: 0 0 66.6667%;
  max-width: 0.66.6667%;
`;

const PostList = styled.ul`
  position: relative;
  padding: 0;
`;

const PostItem = styled.li`
  list-style: none;
  padding: 0;
  margin-top: 0px;
  margin-bottom: 2.5rem;
  border: none !important;
  position: relative;
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
`;

export default function Feed() {
  const [posts, setPosts] = useState([]);

  return (
    <FeedContainer>
      <PostList>
        <PostItem>
          <PostAvatar>
            <Avatar sx={{ bgcolor: 'purple', width: '30px', height: '30px' }}>
              <p style={{ fontSize: '18px' }}>BB</p>
            </Avatar>
          </PostAvatar>
          <PostContent>
            <div style={{ marginBottom: '0.5rem', textAlign: 'left' }}>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse{' '}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '1rem', color: 'gray' }}>
                  4 hours, 1 minute ago
                </p>
              </div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <p>this is a comment</p>
            </div>
          </PostContent>
        </PostItem>
      </PostList>
    </FeedContainer>
  );
}
