import {
  createTheme,
  Link,
  NextUIProvider,
  styled,
  Text,
} from '@nextui-org/react';

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  },
});

const StyledApp = styled('div', {
  dflex: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
});

export default function App() {
  return (
    <NextUIProvider theme={darkTheme}>
      <StyledApp className="App">
        <Text h2>
          Hello Guys
          <span role="img" aria-label="text with an emoji">
            👋🏻
          </span>
        </Text>
        <Text h3 css={{ mb: '$6' }}>
          NextUI simple dark mode implementation
        </Text>
        <Link
          block
          color="secondary"
          target="_blank"
          href="https://nextui.org/docs/theme/dark-mode"
        >
          Click here for more info
        </Link>
      </StyledApp>
    </NextUIProvider>
  );
}
