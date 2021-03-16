import Members from './components/Members'
import BootstrapNavbar from './components/Navbar';
import './css/App.css'

function App() {
  return (
    <>
      <BootstrapNavbar/>
      <div className="members">
        <Members/>
      </div>
    </>
  );
}

export default App;
