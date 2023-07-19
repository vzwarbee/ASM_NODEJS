
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/lab3">
                lab 3
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/lab4">
                lab 4
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/lab5">
                lab 5
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/lab6">
                lab 6
              </a>
            </li>        
            <li className="nav-item">
              <a className="nav-link" href="/lab7">
                lab 7
              </a>
            </li>        
            <li className="nav-item">
              <a className="nav-link" href="/lab8">
                lab 8
              </a>
            </li>        
          </ul>
        </div>
      </nav>
    </>
  );
}
