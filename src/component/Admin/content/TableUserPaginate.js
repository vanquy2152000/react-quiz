import Table from 'react-bootstrap/Table';
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
    const { listUsers, pageCount } = props;

    const handlePageClick = (event) => {
        props.fetchListUsersWithPaginate(+event.selected + 1);
        props.setCurrentPage(+event.selected + 1)
    };
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-users-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => {
                                                props.handleClickBtnView(item);
                                            }}
                                        >View</button>
                                        <button
                                            className="btn btn-warning mx-3"
                                            onClick={() => {
                                                props.handleClickBtnUpdate(item);
                                            }}
                                        >Update</button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => {
                                                props.handleClickBtnDelete(item);
                                            }}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={'5'}>Not found data</td>
                        </tr>
                    }
                </tbody>
            </Table>
            <div className="user-pagination">
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Prev"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={props.currentPage - 1}
                />
            </div>
        </>
    )
}

export default TableUserPaginate;