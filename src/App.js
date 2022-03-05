import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ActivityPage } from './routes/Activity';
import { IntroPage } from './routes/Intro';
import { MePage } from './routes/Me';
import { RecordPage } from './routes/Record';

function App() {

  return (
      <div className="app">
        <Routes>
          <Route path="/me" element={<MePage />} ></Route>
          <Route path="/records" element={<RecordPage />} ></Route>
          <Route path="/activities" element={<ActivityPage />} ></Route>
          <Route path="/" element={<IntroPage />} ></Route>
        </Routes>
      </div>
  );
}

export default App;
