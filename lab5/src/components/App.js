import Navbar from "./Navbar";

const App = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
          Cars
        </a>   

        <a href="http://localhost:8000/lab4/cars"> 
            See database
        </a> 

        

        <Navbar />
      </div>
    </header>
  );
};

export default App;