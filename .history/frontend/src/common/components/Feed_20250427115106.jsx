import React, { useState } from 'react';

import { Avatar } from '@mui/material';
import styled from 'styled-components';

const FeedContainer = styled.div`
  padding: 30px 40px 70px;
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
  top: 2px;
  float: left;
  z-index: 1;
  text-align: center;
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
        </PostItem>
      </PostList>
    </FeedContainer>
  );
}
