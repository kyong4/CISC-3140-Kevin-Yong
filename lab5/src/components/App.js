import Navbar from "./Navbar";

const App = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
          Cars
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default App;