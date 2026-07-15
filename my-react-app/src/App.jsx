import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';   

function App() {
  console.log("--- DEBUG IMPORTS ---");
  console.log("Navbar is:", Navbar);
  console.log("Footer is:", Footer);
  console.log("HomePage is:", HomePage);
  console.log("RegisterPage is:", RegisterPage);
  console.log("LoginPage is:", LoginPage);
  console.log("---------------------");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;