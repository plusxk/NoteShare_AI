import "./Page.css";
function TopNav() {
  return (
    <nav className="nav-top navbar-light">
      <div className="container-fluid">
        <div className="panel__devices"></div>
        <div className="panel__editor"></div>
        <div className="panel__basic-actions"></div>
      </div>
    </nav>
  );
}

export default TopNav;
