import { Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import { Route } from "react-router-dom";
import "./styles/index.scss";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
