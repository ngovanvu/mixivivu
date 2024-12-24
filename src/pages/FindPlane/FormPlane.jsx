import React, { useEffect, useState } from "react";
import styles from "./FormPlane.module.css";
import {
  FaAngleDown,
  FaBaby,
  FaCalendarDay,
  FaCaretDown,
  FaCheck,
  FaChildren,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaRegUser,
  FaRightLeft,
} from "react-icons/fa6";
import DatePicker from "react-datepicker";
import InputPlane from "../../components/InputPlane";
import InputPerson from "../../components/InputPerson";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { createMedia } from "@artsy/fresnel";
import CheckboxTicket from "../../components/CheckboxTicket";

const location = [
  {
    idL: 1,
    value: "HPH",
    label: "Sân bay Cát Bi, Hải Phòng, Việt Nam",
  },
  {
    id: 2,
    value: "BMV",
    label: "Sân bay Ban Mê Thuột, Ban Mê Thuột, Việt Nam",
  },
  {
    id: 3,
    value: "CAH",
    label: "Sân bay Cà Mau, Ca Mau, Việt Nam",
  },
  {
    id: 4,
    value: "CXR",
    label: "Sân bay Cam Ranh, Nha Trang, Việt Nam",
  },
  {
    id: 5,
    value: "DLI",
    label: "Sân bay Liên Khương, Đà Lạt, Việt Nam",
  },
  {
    id: 6,
    value: "DIN",
    label: "Sân bay Điện Biên Phủ, Điện Biên Phủ, Việt Nam",
  },
  {
    id: 7,
    value: "HUI",
    label: "Sân bay Phú Bài, Huế, Việt Nam",
  },
  {
    id: 8,
    value: "HAN",
    label: "Sân bay Nội Bài, Hà Nội, Việt Nam",
  },
  {
    id: 9,
    value: "PQC",
    label: "Sân bay Phú Quốc, Phú Quốc, Việt Nam",
  },
  {
    id: 10,
    value: "SGN",
    label: "Sân bay Tân Sơn Nhất , Hồ Chí Minh, Việt Nam",
  },
];

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});
function FormPlane() {
  const [dateDes, setDateDes] = useState(new Date());
  const [dateDep, setDateDep] = useState(new Date());
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [baby, setBaby] = useState(0);
  const [way, setWay] = useState("one");
  const [valueDes, setValueDes] = useState("");
  const [valueDep, setValueDep] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchTextDep, setSearchTextDep] = useState("");
  const [checkboxCheap, setcheckboxCheap] = useState(false);
  const [showInput, setShowInput] = useState(false);

  console.log("checkboxCheap", checkboxCheap);

  // Lọc cho filLocation, loại bỏ những phần tử đã được chọn trong filLocateDep
  const filLocation = location.filter(
    (locate) => locate.label.toLowerCase().includes(searchText.toLowerCase()) && locate.label !== searchTextDep // Loại bỏ phần tử đã được chọn
  );

  // Lọc cho filLocateDep, loại bỏ những phần tử đã được chọn trong filLocation
  const filLocateDep = location.filter(
    (locateDep) => locateDep.label.toLowerCase().includes(searchTextDep.toLowerCase()) && locateDep.label !== searchText // Loại bỏ phần tử đã được chọn
  );

  const dateDestination = dateDes.toLocaleDateString("sv-SE", { timeZone: "Asia/Ho_Chi_Minh" });
  const dateDeparture = dateDep.toLocaleDateString("sv-SE", { timeZone: "Asia/Ho_Chi_Minh" });
  // console.log(dateDestination, dateDeparture);
  const navigate = useNavigate();
  const currentUrlParams = new URLSearchParams(window.location.search);
  useEffect(() => {
    setDateDep(dateDes);
  }, [dateDes]);
  const handlesubmit = () => {
    if (way) {
      currentUrlParams.set("way", way);
    }

    if (way === "one" && dateDestination) {
      currentUrlParams.set("dateDestination", dateDestination);
    } else {
      currentUrlParams.set("dateDestination", dateDestination);
      currentUrlParams.set("dateDeparture", dateDeparture);
    }
    if (searchText && searchTextDep) {
      currentUrlParams.set("searchText", valueDes);
      currentUrlParams.set("searchTextDep", valueDep);
    }
    if (adult) {
      currentUrlParams.set("adult", adult);
    }
    if (child) {
      currentUrlParams.set("child", child);
    }
    if (baby) {
      currentUrlParams.set("baby", baby);
    }
    if (checkboxCheap === true) {
      currentUrlParams.set("cheap", checkboxCheap);
    }

    navigate({
      pathname: "/findplane",
      search: currentUrlParams.toString(),
    });

    if (!adult && !way && !searchText && !valueDes && !valueDep) {
      navigate("/findplane");
    }
  };
  const toggleInputPeople = () => {
    setShowInput((prev) => !prev);
  };
  console.log("showInput", showInput);

  const numberPeople = Number(adult + baby + child);
  console.log("numberPeople", numberPeople);
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="lg">
        <div className={styles.cardForm}>
          <div className={styles.title}>
            <h4>Mở cánh cửa khám phá cùng Mixivivu</h4>
            <p>Mixivivu - Đặt chân lên đỉnh mây với một bước nhảy</p>
          </div>

          <div className={styles.tickets}>
            <div className={styles.ways}>
              <label htmlFor="one" className={styles.way}>
                <input
                  id="one"
                  type="radio"
                  name="type"
                  checked={way === "one"}
                  value={"one"}
                  onChange={(e) => setWay(e.target.value)}
                />
                <span className={`${styles.checkMark} ${styles.checkBox}`}></span>
                <div className={styles.text}>
                  <div className={styles.title}>Một chiều</div>
                  <p></p>
                </div>
              </label>
              <label htmlFor="two" className={styles.way}>
                <input
                  id="two"
                  type="radio"
                  name="type"
                  checked={way === "two"}
                  value={"two"}
                  onChange={(e) => setWay(e.target.value)}
                />
                <span className={`${styles.checkMark} ${styles.checkBox}`}></span>
                <div className={styles.text}>
                  <div className={styles.title}>Hai chiều</div>
                  <p></p>
                </div>
              </label>
            </div>
            <CheckboxTicket setcheckboxCheap={setcheckboxCheap} checkboxCheap={checkboxCheap} />
          </div>
          <div className={styles.flightSearch}>
            <InputPlane
              filLocation={filLocation}
              searchText={searchText}
              setValueInput={setValueDes}
              setSearchText={setSearchText}
              icon={<FaPlaneDeparture />}
              title={"Điểm đi"}
            />
            <InputPlane
              filLocation={filLocateDep}
              searchText={searchTextDep}
              setValueInput={setValueDep}
              setSearchText={setSearchTextDep}
              icon={<FaPlaneArrival />}
              title={"Điểm đến"}
            />
          </div>

          <div className={styles.flightSearch}>
            <div className="datePickerFlightMixi">
              <DatePicker
                locale="vi" // Sử dụng định dạng ngày tháng tiếng Việt
                showWeekDays // Hiển thị các ngày trong tuần
                selected={dateDes} // Giá trị ngày được chọn
                onChange={(date) => setDateDes(date)} // Cập nhật giá trị ngày
                dateFormat="dd/MM/yyyy" // Định dạng ngày: ngày/tháng/năm
                minDate={new Date()} // Giới hạn ngày tối đa là ngày hiện tại
                customInput={
                  <label className={styles.customInput}>
                    <FaCalendarDay className={styles.icon} /> {/* Icon lịch */}
                    <input
                      type="text"
                      value={dateDes ? dateDes.toLocaleDateString("vi-VN") : ""} // Chuyển ngày sang định dạng tiếng Việt
                      className={styles.input}
                      readOnly // Chỉ cho phép đọc, không nhập trực tiếp
                    />
                    <FaCaretDown className={styles.icon} /> {/* Icon mũi tên xuống */}
                    <label className="sm">Ngày đi</label> {/* Nhãn cho input */}
                  </label>
                }
                className={styles.datePicker} // Áp dụng className tùy chỉnh
              />
            </div>
            {way === "two" && (
              <div className="datePickerFlightMixi">
                <DatePicker
                  locale="vi" // Sử dụng định dạng ngày tháng tiếng Việt
                  showWeekDays // Hiển thị các ngày trong tuần
                  selected={dateDep} // Giá trị ngày được chọn
                  onChange={(date) => setDateDep(date)} // Cập nhật giá trị ngày
                  dateFormat="dd/MM/yyyy" // Định dạng ngày: ngày/tháng/năm
                  minDate={dateDes} // Giới hạn ngày tối đa là ngày hiện tại
                  customInput={
                    <label className={styles.customInput}>
                      <FaCalendarDay className={styles.icon} /> {/* Icon lịch */}
                      <input
                        type="text"
                        value={dateDep ? dateDep.toLocaleDateString("vi-VN") : ""} // Chuyển ngày sang định dạng tiếng Việt
                        className={styles.input}
                        readOnly // Chỉ cho phép đọc, không nhập trực tiếp
                      />
                      <FaCaretDown className={styles.icon} /> {/* Icon mũi tên xuống */}
                      <label className="sm">Ngày về</label> {/* Nhãn cho input */}
                    </label>
                  }
                  className={styles.datePicker} // Áp dụng className tùy chỉnh
                />
              </div>
            )}
          </div>

          <div className={styles.flightSearch}>
            <div className={styles.flightSearch}>
              <InputPerson icon={<FaRegUser />} age={adult} setAge={setAdult} title={"Người lớn"} min={1} />
              <InputPerson icon={<FaChildren />} age={child} setAge={setChild} title={"Trẻ em"} min={0} />
            </div>
            <div className={styles.flightSearch}>
              <InputPerson icon={<FaBaby />} age={baby} setAge={setBaby} title={"Em bé"} min={0} />

              <div onClick={handlesubmit}>
                <Button
                  paddingType="paddingBig"
                  colorType="blue"
                  btnDefaults={true}
                  disabled={
                    !dateDes || // Không có ngày về
                    !dateDep || // Không có ngày đi
                    adult < 1 || // Người lớn phải >= 1
                    !way || // Không chọn chiều đi (một chiều/hai chiều)
                    searchText === "" || // Không nhập điểm đi
                    searchTextDep === "" ||
                    (way === "two" && !dateDep) // Nếu hai chiều thì phải có ngày đi
                  }
                >
                  <div className="md">Tìm chuyến bay</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Media>
      <Media lessThan="lg">
        <div className={`${styles.cardMobile} ${styles.flaneWapper}`}>
          <div className={styles.planeContent}>
            <div className={styles.planeBtn}>
              {way === "one" ? (
                <button className={styles.btnLR} onClick={() => setWay("two")}>
                  <FaRightLeft />
                  <div className="sm">Một chiều</div>
                </button>
              ) : (
                <button className={styles.btnLR} onClick={() => setWay("one")}>
                  <FaRightLeft />
                  <div className="sm">Hai Chiều</div>
                </button>
              )}
              <div className={styles.selectedBtn}>
                <button className={styles.numberBtn} onClick={() => toggleInputPeople()}>
                  <FaRegUser />
                  <div className={styles.number}>{numberPeople}</div>
                  <FaAngleDown />
                </button>
                <div className={`${styles.dropdownPeople} ${showInput ? styles.showInput : ""}`}>
                  <InputPerson icon={<FaRegUser />} age={adult} setAge={setAdult} title={"Người lớn"} min={1} />
                  <InputPerson icon={<FaChildren />} age={child} setAge={setChild} title={"Trẻ em"} min={0} />
                  <InputPerson icon={<FaBaby />} age={baby} setAge={setBaby} title={"Em bé"} min={0} />
                </div>
              </div>

              <CheckboxTicket setcheckboxCheap={setcheckboxCheap} checkboxCheap={checkboxCheap} />
            </div>
            <div className={styles.planeInput}>
              <div>
                <InputPlane
                  filLocation={filLocation}
                  searchText={searchText}
                  setValueInput={setValueDes}
                  setSearchText={setSearchText}
                  icon={<FaPlaneDeparture />}
                  title={"Điểm đi"}
                />
              </div>
              <div>
                <InputPlane
                  filLocation={filLocateDep}
                  searchText={searchTextDep}
                  setValueInput={setValueDep}
                  setSearchText={setSearchTextDep}
                  icon={<FaPlaneArrival />}
                  title={"Điểm đến"}
                />
              </div>
              <div>
                <div className="datePickerFlightMixi">
                  <DatePicker
                    locale="vi" // Sử dụng định dạng ngày tháng tiếng Việt
                    showWeekDays // Hiển thị các ngày trong tuần
                    selected={dateDes} // Giá trị ngày được chọn
                    onChange={(date) => setDateDes(date)} // Cập nhật giá trị ngày
                    dateFormat="dd/MM/yyyy" // Định dạng ngày: ngày/tháng/năm
                    minDate={new Date()} // Giới hạn ngày tối đa là ngày hiện tại
                    customInput={
                      <label className={styles.customInput}>
                        <FaCalendarDay className={styles.icon} /> {/* Icon lịch */}
                        <input
                          type="text"
                          value={dateDes ? dateDes.toLocaleDateString("vi-VN") : ""} // Chuyển ngày sang định dạng tiếng Việt
                          className={styles.input}
                          readOnly // Chỉ cho phép đọc, không nhập trực tiếp
                        />
                        <FaCaretDown className={styles.icon} /> {/* Icon mũi tên xuống */}
                        <label className="sm">Ngày đi</label> {/* Nhãn cho input */}
                      </label>
                    }
                    className={styles.datePicker} // Áp dụng className tùy chỉnh
                  />
                </div>
              </div>
              <div>
                {way === "two" && (
                  <div className="datePickerFlightMixi">
                    <DatePicker
                      locale="vi" // Sử dụng định dạng ngày tháng tiếng Việt
                      showWeekDays // Hiển thị các ngày trong tuần
                      selected={dateDep} // Giá trị ngày được chọn
                      onChange={(date) => setDateDep(date)} // Cập nhật giá trị ngày
                      dateFormat="dd/MM/yyyy" // Định dạng ngày: ngày/tháng/năm
                      minDate={dateDes} // Giới hạn ngày tối đa là ngày hiện tại
                      customInput={
                        <label className={styles.customInput}>
                          <FaCalendarDay className={styles.icon} /> {/* Icon lịch */}
                          <input
                            type="text"
                            value={dateDep ? dateDep.toLocaleDateString("vi-VN") : ""} // Chuyển ngày sang định dạng tiếng Việt
                            className={styles.input}
                            readOnly // Chỉ cho phép đọc, không nhập trực tiếp
                          />
                          <FaCaretDown className={styles.icon} /> {/* Icon mũi tên xuống */}
                          <label className="sm">Ngày về</label> {/* Nhãn cho input */}
                        </label>
                      }
                      className={styles.datePicker} // Áp dụng className tùy chỉnh
                    />
                  </div>
                )}
              </div>

              <div onClick={handlesubmit}>
                <Button
                  paddingType="paddingBig"
                  colorType="blue"
                  btnDefaults={true}
                  disabled={
                    !dateDes || // Không có ngày đi
                    !dateDep || // Không có ngày về
                    adult < 1 || // Người lớn phải >= 1
                    !way || // Không chọn chiều đi (một chiều/hai chiều)
                    searchText === "" || // Không nhập điểm đi
                    searchTextDep === "" ||
                    (way === "two" && !dateDep) // Nếu hai chiều thì phải có ngày đi
                  }
                >
                  <div className="md">Tìm chuyến bay</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Media>
    </MediaContextProvider>
  );
}

export default FormPlane;
