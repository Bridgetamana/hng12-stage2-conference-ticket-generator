import FirstStep from "./component/FirstStep";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SecondStep from "./component/SecondStep";
import ThirdStep from "./component/ThirdStep";

function App() {
  return (
    <div className="pb-16 px-5 flex flex-col justify-center items-center font-roboto" style={{
      background: `linear-gradient(0deg, #02191D, #02191D),
      radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)`
    }}>
      <Navbar />
      <main className="max-w-[600px] mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<FirstStep />} />
            <Route path="/second-step" element={<SecondStep />} />
            <Route path="/third-step" element={<ThirdStep />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
