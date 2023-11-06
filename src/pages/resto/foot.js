import { useState } from "react";

export default function Foot({ selectedPage, setSelectedPage, totalPages }) {
    const handlePageSelect = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setSelectedPage(pageNumber);
        }
    };

    const handlePrevPage = () => {
        handlePageSelect(selectedPage - 1);
    };

    const handleNextPage = () => {
        handlePageSelect(selectedPage + 1);
    };

    return (
        <>
            <footer>
                <div class="foot d-flex">
                    <button id="prev-page" onClick={handlePrevPage}>&lt;</button>
                    <div id="page-info">
                        <span id="current-page">{selectedPage}</span>
                    </div>
                    <button id="next-page" onClick={handleNextPage}>&gt;</button>
                </div>
            </footer>
        </>
    )
}