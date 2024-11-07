import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./Pagination.module.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";

function Pagination(props) {
  const { filteredData, setPage, setPerPage, perPage, page } = props;
  const [tempValue, setTempValue] = useState(5);

  const handleBlur = () => {
    // Giới hạn giá trị giữa 1 và 20 khi mất focus
    const value = Math.max(1, Math.min(20, Number(tempValue) || 1));
    setPerPage(value); //cập nhật để tính data hiển thị
    setTempValue(value); // Cập nhật lại tempValue để hiển thị giá trị hợp lệ , cập nhật số đã điền ở input
  };
  const handlePageClick = (event) => {
    console.log("event", event); // Gía trị của sleleted pagination chạy từ 0 nên để tương đồng thì  + thêm cho 1
    // getCardBoat(+event.selected + 1);
    setPage(+event.selected + 1);
  };
  const totalPage = Math.ceil(filteredData.length / perPage);
  const handleTempValueChange = (e) => {
    setTempValue(e.target.value); // Cập nhật giá trị tạm thời khi người dùng nhập
  };
  return (
    <div className={styles.boxPagination}>
      <div className={styles.numberPage}>
        <p className="sm">Đang xem</p>
        <div>
          <span className={styles.papgeSize}>
            <input max={20} min={1} type="number" value={tempValue} onBlur={handleBlur} onChange={handleTempValueChange} />
          </span>
        </div>
        <p className="sm">của {filteredData.length}</p>
      </div>
      <ReactPaginate
        nextLabel={
          <>
            Sau
            <FaArrowRight />
          </>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPage}
        forcePage={page - 1}
        previousLabel={
          <>
            <FaArrowLeft /> Trước
          </>
        }
        pageClassName="pagination-item"
        pageLinkClassName="page-link"
        previousClassName="pagination-prev"
        previousLinkClassName="page-link"
        nextClassName="pagination-next"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="pagination-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="activePaginate"
      />
    </div>
  );
}

export default Pagination;
