import React, { lazy, Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ReactPaginate from 'react-paginate';

const BookCard = lazy(() => import("./BookCard"));

const BookList: React.FC = () => {
    const { books, loading } = useSelector((state: RootState) => state.books);

    const [currentPage, setCurrentPage] = useState<number>(0);
    const [bookPerPage, setBookPerPage] = useState(5);
    const pageCount = Math.ceil(books?.docs?.length / bookPerPage);

    const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBookPerPage(Number(e.target.value));
    };

    const handlePageClick = (event: { selected: number }) => {
        const newOffset =
            (event.selected * bookPerPage) % books?.docs?.length;
        setCurrentPage(newOffset);
    };

    const endOffset = currentPage + bookPerPage;
    const paginatedBooks = books?.docs?.slice(currentPage, endOffset);


    if (loading) return <p>Loading...</p>;
    return (
        <React.Fragment>
            {paginatedBooks &&
                <div className="flex flex-col flex-wrap gap-4 p-4">
                    <Suspense fallback={<p>Loading...</p>}>
                        <BookCard books={paginatedBooks} /> 
                    </Suspense>
                    <div className="flex items-center p-2 ">
                        <label htmlFor="entriesPerPage" className="">
                            Per Page
                        </label>
                        <select
                            id="entriesPerPage"
                            value={bookPerPage}
                            onChange={(e) => handleEntriesChange(e)}
                            className="border rounded-md p-1 ms-3"
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                        </select>
                        <p className="ms-3">
                            {endOffset > books?.docs?.length
                                ? books?.docs?.length
                                : endOffset}{" "}
                            Out of {books?.docs?.length}
                        </p>
                    </div>

                    <div className="flex justify-center items-center">
                        <ReactPaginate
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={2}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            renderOnZeroPageCount={null}
                            breakLabel="..."
                            nextLabel=">"
                            previousLabel="<"
                            className="flex items-center py-2 gap-3 overflow-x-auto md:overflow-x-auto overflow-y-hidden"
                            previousLinkClassName={`paginationBtns`}
                            nextLinkClassName={`paginationBtns`}
                            pageLinkClassName={`paginationBtns`}
                            activeLinkClassName="text-blue-600  border-sky-500"
                            disabledLinkClassName="pointer-events-none"
                        />
                    </div>
                </div >
            }
        </React.Fragment>
    );
};

export default BookList;
