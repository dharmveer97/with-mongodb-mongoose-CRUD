import React from 'react';
import {
  styled,
  Navbar, Button, Link, Text, Card, Radio,
} from '@nextui-org/react';

const VariantsSelectorWrapper = styled('div', {
  dflex: 'center',
  position: 'fixed',
  width: '100%',
  bottom: '10px',
  '& .nextui-radio-group-items': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '1fr',
    gridColumnGap: '$8',
    gridRowGap: '$2',
  },
});

const Box = styled('div', {
  boxSizing: 'border-box',
});

function Header() {
  const [variant, setVariant] = React.useState('static');
  const variants = ['static', 'floating', 'sticky'];
  return (
    <Box
      css={{
        maxW: '100%',
      }}
    >
      <Navbar isBordered variant={variant}>
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
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
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
      <VariantsSelectorWrapper>
        <Card css={{ maxW: '50%' }}>
          <Card.Body css={{ pt: '$8', px: '$8' }}>
            <Radio.Group
              defaultValue="default"
              label="Select variant"
              orientation="horizontal"
              size="sm"
              value={variant}
              onChange={setVariant}
            >
              {variants.map((item) => (
                <Radio key={item} value={item}>
                  {item}
                </Radio>
              ))}
            </Radio.Group>
          </Card.Body>
        </Card>
      </VariantsSelectorWrapper>
    </Box>
  );
}

export default Header;
