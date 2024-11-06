import React from 'react';
import '../style/pagination.css'
const Pagination = ({ totalPages, paginate, currentPage }) => {
    
        const pageNumbers = [];
    
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    
    return (
        <nav className="pagination-nav">
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                    <button onClick={() => paginate(number)} className="page-link">
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    </nav>
    )
}

export default Pagination
