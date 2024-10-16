import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Menubar } from 'primereact/menubar';
import "./Layout.css";

const Layout = ({ children }: any) => {

  const itemRenderer = (item: any) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
    </a>
  );
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home'
    },
    {
      label: 'Features',
      icon: 'pi pi-star'
    },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
        {
          label: 'Core',
          icon: 'pi pi-bolt',
          template: itemRenderer
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server',
          template: itemRenderer
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil',
          template: itemRenderer
        },
        // {
        //   separator: true
        // },
        {
          label: 'Templates',
          icon: 'pi pi-palette',
          items: [
            {
              label: 'Apollo',
              icon: 'pi pi-palette',
              // badge: 2,
              template: itemRenderer
            },
            {
              label: 'Ultima',
              icon: 'pi pi-palette',
              // badge: 3,
              template: itemRenderer
            }
          ]
        }
      ]
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      // badge: 3,
      template: itemRenderer
    }
  ];

  const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
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
            <Menubar model={items} start={start} end={end} className='header-menu' />
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