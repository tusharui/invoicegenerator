import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import AllInvoices from "./pages/Invoices/AllInvoice";
import CreateInvoice from "./pages/Invoices/CreateInvoice";
import InvoiceDetail from "./pages/Invoices/InvoiceDetails";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./pages/Auth/ProtectedRoute";
const App = () => {
  return (
    <div> 
      <Router>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<  SignUp />} />
          <Route path="/login" element={<Login />} />


          {/* Protected routes */}
          <Route path ="/" element={<ProtectedRoute/>}>
          <Route path = "/dashboard" element ={<Dashboard/>}/>
          <Route path = "/invoices" element ={<AllInvoices/>}/>
          <Route path = "/invoices/new" element={<CreateInvoice/>}/>
          <Route path ="/invoices/:id"   element={<InvoiceDetail/>} />
          <Route path ="/profile" element ={<Profile/>}/>
          </Route>



          {/* catch all route  */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>

<Toaster
toastOptions ={{
  className :"",
  style :{
    fontSize:"13px"
  }
}}
/>

    </div>
  )
}

export default App
