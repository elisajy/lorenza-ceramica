import { Avatar } from 'primereact/avatar';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import "./Layout.css";
import { headerMenu } from '../../helper/HeaderMenu';
import { faCartShopping, faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

const Layout = ({ children }: any) => {
  const start = <img alt="logo" src="/lorenza-logo-transparent-blue.png" height="100" className="header-logo"></img>;
  const end = (
    <div className='header-icons'>
      <Button className='header-button' rounded text severity="info" icon={<FontAwesomeIcon icon={faSquareFacebook} size='2xl'/>} />
      <Button className='header-button' rounded text severity="info" icon={<FontAwesomeIcon icon={faSquareInstagram} size='2xl'/>} />
      <Button className='header-button' rounded text severity="info" icon={<FontAwesomeIcon icon={faCartShopping} size='2xl'/>} />
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
        <main className="content">{children}</main>
        <footer className="footer">
          <p>© 2024 Lorenza Ceramica. All rights reserved.</p>
        </footer>
      </div >
    </>
  );
}

export default Layout;