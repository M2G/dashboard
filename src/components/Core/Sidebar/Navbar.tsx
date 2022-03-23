/*eslint-disable*/
/*
const NavWrapper = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  padding: 0 1rem;
  background-color: #333;
`;

const BurgerMenu = styled.div`
  cursor: pointer;
  padding: 10px 35px 16px 0px;

  & span,
  & span:before,
  & span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: white;
    position: absolute;
    display: block;
    content: "";
  }

  & span:before {
    top: -10px;
  }

  & span:after {
    bottom: -10px;
  }
`;
*/
const Navbar = ({ toggleMenu }: any) => {
  return (
    <div className="nav-wrapper">
      <div
        className="burger-menu"
        onClick={() => {
          toggleMenu(true);
          console.log('Hamburger menu clicked, toggle open');
        }}
      >
        <span />
      </div>
      <p>Something here</p>
    </div>
  );
};

export default Navbar;
