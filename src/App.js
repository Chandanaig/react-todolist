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
        <h2>Welcome to my app!</h2>
        <p>
          This is a simple React application with a header, body, and footer.
        </p>
      </main>
      <footer style={footerStyle}>
        <p>© 2024 My Simple App</p>
      </footer>
    </div>
  );
}

export default App;
