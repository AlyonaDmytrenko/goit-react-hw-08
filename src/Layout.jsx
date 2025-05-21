import AppBar from './AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <AppBar /> {/* Виводимо лише один раз */}
      <main>
        <Outlet /> {/* Місце для рендеру конкретних сторінок */}
      </main>
    </div>
  );
};

export default Layout;
