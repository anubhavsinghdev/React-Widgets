import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './style.css';
const items = [
  {
    title: "What is React?",
    content: "React is a JavaScript Library.",
  },
  {
    title: "Why use React?",
    content: "React best frontend Library.",
  },
  {
    title: "How do you use React?",
    content: "You can use React by creating components.",
  },
];
const options = [
  {
    label: "The Color Red",
    value: "red"
  },
  {
    label: "The Color Green",
    value: "green"
  },
  {
    label: "A shade of Blue",
    value: "blue"
  }
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <Accordion items={items} />
          } />
          <Route path="/list" element={
            <Search />
          } />
          <Route path="/dropdown" element={
            <Dropdown selected={selected} onSelectedChange={setSelected} options={options} />
          } />
          <Route path="/translate" element={
            <Translate />
          } />
          <Route path="/React-Widgets"
            element={<Accordion items={items} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;