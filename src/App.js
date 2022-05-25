import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";
import Route from "./components/Route";
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

// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />
//   }
// }

// const showList = () => {
//   if (window.location.pathname === '/list') {
//     return <Search />;
//   }
// }
// const showDropdown = (selected, setSelected) => {
//   if (window.location.pathname === '/dropdown') {
//     return <Dropdown selected={selected} onSelectedChange={setSelected} options={options} />;
//   }
// }

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />
//   }
// }

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown selected={selected} onSelectedChange={setSelected} options={options} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
