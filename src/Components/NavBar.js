function NavBar() {
    return (
      <div className="NavBar">
        <ul className="nav-items">
          {/* <li><button className="nav-button">tracks</button></li> */}
          <li><a className="nav-button" href="#tracks">tracks</a></li>
          {/* <li><button className="nav-button">faq</button></li> */}
          <li><a className="nav-button" href="#faq">faq</a></li>
          <li><button className="nav-registerButton">register</button></li>
        </ul>
            
      </div>
    );
  }
  
  export default NavBar;