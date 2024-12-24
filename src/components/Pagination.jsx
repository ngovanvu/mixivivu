import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./Pagination.module.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";

function Pagination(props) {
  // console.log(props, props);

  const { filteredData, setPage, setPerPage, perPage, page } = props;

  const [tempValue, setTempValue] = useState(5);

  const handleBlur = () => {
    // Giới hạn giá trị giữa 1 và 20 khi mất focus
    const value = Math.max(1, Math.min(filteredData.length, Number(tempValue) || 1));
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
  if (totalPage <= 1) return null;
  return (
    <div className={styles.boxPagination}>
      <div className={styles.numberPage}>
        <p className="sm">Đang xem</p>
        <div>
          <span className={styles.papgeSize}>
            <input max={20} min={1} type="number" value={tempValue} onBlur={handleBlur} onChange={handleTempValueChange} />
          </span>
        </div>
        <p>của</p>
        <p className="sm"> {filteredData.length}</p>
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
        pageClassName={styles.pagination_item}
        pageLinkClassName={styles.page_link}
        previousClassName={styles.pagination_prev}
        previousLinkClassName={styles.page_link}
        nextClassName={styles.pagination_next}
        nextLinkClassName={styles.page_link}
        breakLabel="..."
        breakClassName={styles.pagination_item}
        breakLinkClassName={styles.page_link}
        containerClassName={styles.pagination}
        activeClassName={styles.activePaginate}
      />
    </div>
  );
}

export default Pagination;
