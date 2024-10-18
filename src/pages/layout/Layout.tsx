import { Avatar } from 'primereact/avatar';
import { Menubar } from 'primereact/menubar';
import "./Layout.css";
import { headerMenu } from '../../data/HeaderMenu';
import { CartProvider } from '../../hooks/cart-context/CartContext';

const Layout = ({ children }: any) => {
  const start = <img alt="logo" src="/lorenza-logo-transparent-blue.png" height="100" className="header-logo"></img>;
  const end = (
    <div className="flex align-items-center gap-2">
      <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
    </div>
  );

  //   useEffect(() => {

  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);


  return (
    <>
      <div className="layout">
        <header className="header">
          <div className="card">
            <Menubar model={headerMenu} start={start} end={end} className='header-menu' />
          </div>
        </header>
        <CartProvider>
          <main className="content">{children}</main>
        </CartProvider>
        <footer className="footer">
          <p>© 2024 Lorenza Ceramica. All rights reserved.</p>
        </footer>
      </div >
    </>
  );
}

export default Layout;