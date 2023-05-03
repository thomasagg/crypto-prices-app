import React from 'react';

const Pagination = ({ currentPage, setCurrentPage }) => {
    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={handlePreviousClick}>Previous</button>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={handleNextClick}>Next</button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;