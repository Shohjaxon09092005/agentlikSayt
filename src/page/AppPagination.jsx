import React, { useState } from 'react';
import Pagination from '../components/Pagination';

function AppPagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 17;
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  return (
    <div>
      <h1>Current Page: {currentPage}</h1>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default AppPagination
