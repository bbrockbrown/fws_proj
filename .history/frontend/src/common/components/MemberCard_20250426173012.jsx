import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label='text alignment'
    >
      <ToggleButton value='left' aria-label='left aligned'>
        hi
      </ToggleButton>
      <ToggleButton value='center' aria-label='centered'>
        bye
      </ToggleButton>
      <ToggleButton value='right' aria-label='right aligned'>
        nope
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

// import React, { useState } from 'react';

// import { ToggleButton, ToggleButtonGroup } from '@mui/material';
// import styled from 'styled-components';

// const MemCardContainer = styled.div`
//   border-left: 1px solid #e7edf2;
//   padding: 30px 30px 70px 30px;
//   min-height: 100vh;
// `;

// const CardTitle = styled.div`
//   margin-bottom: 1rem;
//   padding-bottom: 1rem;
//   position: relative;
//   font-size: 1rem;
// `;

// function MemberToggle() {
//   const [mode, setMode] = useState('Newest');

//   const handleModeChange = (newMode) => {
//     if (newMode !== null) {
//       setMode(newMode);
//     }
//   };

//   return (
//     <ToggleButtonGroup
//       value={mode}
//       exclusive
//       onChange={handleModeChange}
//       aria-label='member mode'
//       size='small'
//     >
//       <ToggleButton value='Newest' aria-label='newest members'>
//         Newest
//       </ToggleButton>
//       <ToggleButton value='Active' aria-label='active members'>
//         Active
//       </ToggleButton>
//       <ToggleButton value='Popular' aria-label='popular members'>
//         Popular
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// }

// export default function MemberCard() {
//   return (
//     <MemCardContainer>
//       <div>
//         <CardTitle>Members</CardTitle>
//         <MemberToggle />
//       </div>
//     </MemCardContainer>
//   );
// }
