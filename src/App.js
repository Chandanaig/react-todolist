import logo from "./logo.svg";
import "./App.css";

function App() {
  const headerStyle = {
    padding: "20px",
    backgroundColor: "#282c34",
    color: "white",
    textAlign: "center",
  };

  const bodyStyle = {
    padding: "500px",
    textAlign: "center",
  };

  const footerStyle = {
    padding: "20px",
    backgroundColor: "#282c34",
    color: "white",
    textAlign: "center",
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1>header</h1>
      </header>
      <main style={bodyStyle}>
        <h1>
          Body
        </h1>
      </main>
      <footer style={footerStyle}>
        <h1>footer</h1>
      </footer>
    </div>
  );
}

export default App;
