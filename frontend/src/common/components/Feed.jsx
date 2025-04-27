import React, { useState } from 'react';
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

export default function Feed() {
  const [posts, setPosts] = useState([]);

  return (
    <FeedContainer>
      <PostList>
        hi
      </PostList>
    </FeedContainer>
  );
}
