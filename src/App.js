import './App.css';
import MainPage from './components/MainPage/mainPage.tsx';
import SelectTemplate from './components/SelectTemplate/SelectTemplate.tsx';
import AddInfo from './components/AddInformation/AddInfo.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const  App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MainPage />}></Route>
    <Route path="/resume" element={<SelectTemplate />}></Route>
    <Route path="/create-resume" element={<AddInfo />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
