/*eslint-disable*/

const Navbar = ({ toggleMenu }: any) => {
  return (
    <div className="nav-wrapper">
      <button
        type="button"
        className="burger-menu"
        onClick={() => {
          toggleMenu(true);
          console.log('Hamburger menu clicked, toggle open');
        }}
      >
        <span />
      </button>
      <p>Something here</p>
    </div>
  );
};

export default Navbar;
