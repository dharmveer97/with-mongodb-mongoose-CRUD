import React from 'react';
import {
  styled,
  Navbar, Button, Link, Text,
} from '@nextui-org/react';
import config from '../../utils/config';

const Box = styled('div', {
  boxSizing: 'border-box',
});

function Header() {
  return (
    <Box
      css={{
        maxW: '100%',
      }}
    >
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <svg
            className=""
            fill="none"
            height="36"
            viewBox="0 0 32 32"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <Text b color="inherit" hideIn="xs">
            {config.siteName}
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Box>
  );
}

export default Header;
