import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from './components/Header';
import FeedPage from "./pages/FeedPage";
import ExplorePage from "./pages/ExplorePage";
import LoginPage from "./pages/LoginPage"

export default function App() {

  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
