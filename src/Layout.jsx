import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <div id="layout-root">
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav> */}
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    );
  }

export default Layout;