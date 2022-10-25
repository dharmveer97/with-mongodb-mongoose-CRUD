import Header from './global/Header';

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
