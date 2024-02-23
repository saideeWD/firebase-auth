import { RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import { router } from "./Routes/Router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">Firebase</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/singup">Sign up</Nav.Link>
              <Nav.Link href="/singin">Sine in</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>

      <RouterProvider router={router}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </>
  );
}

export default App;
