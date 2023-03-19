import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ActivityPage } from './routes/Activity';
import { IntroPage } from './routes/Intro';
import { MePage } from './routes/Me';
import { RecordPage } from './routes/Record';
import { RecordContentPage } from './routes/RecordContents';
import { TranscriptPage } from './routes/Transcript';

function App() {

  return (
      <div className="app">
        <Routes>
          <Route path="/me" element={<MePage />} />
          <Route path="/records" element={<RecordPage />} />
          <Route path="/records/:type/:name" element={<RecordContentPage />} />
          <Route path="/activities" element={<ActivityPage />} />
          <Route path="/transcript" element={<TranscriptPage />} />
          <Route path="/" element={<IntroPage />} />
        </Routes>
      </div>
  );
}

export default App;
