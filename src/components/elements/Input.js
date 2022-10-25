import React from 'react';
import {
  Input, styled,
} from '@nextui-org/react';

const Wrapper = styled('div', {
  marginTop: '10px',
  marginBottom: '10px',
});

function InputGroup({ ...props }) {
  return (
    <Wrapper>
      <Input
        clearable
        underlined
        fullWidth
        color="primary"
        size="lg"
        {...props}
      />
    </Wrapper>
  );
}

export default InputGroup;
