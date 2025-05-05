import React from 'react';

import Feed from 'common/components/Feed';
import MemberCard from 'common/components/MemberCard';
import SidebarLayout from 'common/components/layouts/SidebarLayout';

export default function Home() {
  return (
    <div className='App'>
      <SidebarLayout />
      <div
        className='content'
        style={{
          display: 'flex',
          paddingRight: '20px',
          marginLeft: '22%',
          width: '78%',
          boxSizing: 'border-box',
          overflowX: 'hidden',
        }}
      >
        <Feed />
        <MemberCard />
      </div>
    </div>
  );
}
