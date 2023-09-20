import DragAndDropComponent from "./DragAndDropComponent";
import Landing from "./components/Landing"
// import { AuthProvider } from "./context/AuthContext.";
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return ( 
    <Router>
    <Routes>
      <Route path="/login" element={<Landing/>} />
      <Route path="/" element={<DragAndDropComponent/>} />
    </Routes>
  </Router>
    
   );
}
 
export default App;
