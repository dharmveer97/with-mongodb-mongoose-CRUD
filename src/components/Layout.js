import Header from './global/Header';
import Footer from './global/Footer';

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
