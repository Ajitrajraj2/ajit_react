import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import NoPage from './Pages/NoPage';
import LoginPage from './Pages/LoginPage'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import AddEmployee from "./Pages/AddEmployee";
import Employeelist from "./Pages/Employeelist";
import Layout from "./Pages/Layout";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="add" element={<AddEmployee />} />
          <Route path="employee" element={<Employeelist />} />
          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}