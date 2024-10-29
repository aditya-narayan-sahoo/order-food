const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.svgrepo.com/show/503678/order-food.svg"
          alt="Company"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

export default App;

