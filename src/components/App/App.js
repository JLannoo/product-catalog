import React, { useEffect } from "react";
import { Catalog }  from "../Catalog/Catalog.js";
import { Modify } from "../ModifyCatalog/ModifyCatalog.js";
import { Button } from "../Button/Button";
import logo from '../../ae-logo.svg';
import './App.css';

const pages = {
  catalog: {
    title: 'Catalog',
    component: <Catalog />,
  },
  modify: {
    title: 'Modify',
    component: <Modify />,
  }
}

function App() {
  const [currentPage, setCurrentPage] = React.useState('catalog');
  const CurrentComponent = pages[currentPage].component;

  useEffect(() => {
    document.title = `AENIMA - ${pages[currentPage].title.toUpperCase()}`;
  });

  return (
    <div className="App">
      <nav class="navigation">
          <Button name="catalog" 
                  onClick={() => setCurrentPage('catalog')}
                  active={currentPage === 'catalog'}
                  initialState={true}
          />

          <div class="navigation__logo">
            <img src={logo} alt="logo" />
          </div>

          <Button name="modify" 
                  onClick={() => {setCurrentPage('modify')}}
                  active={currentPage === 'modify'}
                  initialState={false}
          />
      </nav>
      {CurrentComponent}
    </div>
  );
}

export default App;
