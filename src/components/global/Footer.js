import React from 'react';
import { styled, Container, Text } from '@nextui-org/react';
import config from '../../utils/config';

import DarkMode from './DarkMode';

const Wrapper = styled('div', {
  textAlign: 'center',
  marginTop: '40px',
});

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Text h6 size={14} css={{ m: 0 }}>
          ©
          {config.siteName}

          . All rights reserved.
        </Text>
        <DarkMode />
      </Container>

    </Wrapper>
  );
}

export default Footer;
