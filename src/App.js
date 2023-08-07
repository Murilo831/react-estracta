


import React, { useState } from "react";
import DataList from "./components/DataList";
import Pagination from "./components/Pagination";
import { fakeData } from "./data";
import './App.css';

function App() {

  const itemsPorPage = 25;// dados por pagina
  const [currentPage, setCurrentPage] = useState(1);

  // Divisão dos dados por pagina
  const pageCount = Math.ceil(fakeData.length / itemsPorPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1)
  };


  return (
    <div>
      <div className="center-container ">
        <h1>Tabela Paginada</h1>
      </div>


      <DataList data={fakeData} itemsPorPage={itemsPorPage} currentPage={currentPage} />
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;