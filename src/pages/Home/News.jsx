import style from "./News.module.css";
import news1 from "../../assets/image/news/news1.webp";
import news2 from "../../assets/image/news/news2.webp";
import news3 from "../../assets/image/news/news3.webp";
import news4 from "../../assets/image/news/news4.webp";
import ContentBox from "../../components/ContentBox";
import NewsCard from "../../components/NewsCard";
import Button from "../../components/Button";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const dataNews = [
  {
    image: news1,
    title: "5 món ăn không thể bỏ lỡ khi du lịch Phú Quốc",
    desc: "Phú Quốc được biết đến là hòn đảo của thiên đường du lịch tại Việt Nam với những bờ biển xanh rì và nhiều hoạt động vui chơi giải trí bậc nhất trong các tour du lịch. Không chỉ nổi tiếng với danh lam thắng cảnh, ẩm thực Phú Quốc nổi tiếng khắp cả nước bởi sự đa dạng, độc đáo và tươi ngon. Cũng bởi vậy, hàng năm hàng triệu khách du lịch từ bốn phương đến với hòn đảo xinh đẹp này để khám phá những quán ăn ngon tại Phú Quốc. Dưới đây là những món ăn nhất định không thể bỏ qua khi du lịch hòn đảo này nhé!",
    days: "11/10/2024",
  },
  {
    image: news2,
    title: "Những mẫu nail đơn giản mà dễ thương dành cho nàng khi đi du lịch hè",
    desc: "Nàng đang muốn đi du lịch mà chưa biết làm sao để bản thân mình trở nên xinh hơn và ấn tượng trong mắt mọi người?  Ngay sau đây, MIXI VIVU xin gợi ý cho nàng một số mẫu nail đơn giản nhưng vô cùng dễ thương đang rất được ưa chuộng hiện nay. Hãy cùng xem bài viết này nhé!",
    days: "11/10/2024",
  },
  {
    image: news3,
    title: "​Cá ngựa khô – Món quà quý từ vùng biển Nha Trang",
    desc: "Cá ngựa là một sinh vật đặc biệt của đại dương. Từ hình dáng cho tới chức năng cá ngựa đều rất đặc biệt. Hiếm có loài cá nào mà con đực lại là những “bà mẹ” thiên bẩm như cá ngựa. Thêm vào đó cá ngựa không giống như các loài hải sản thông thường có thể chế biến thành món ăn mà là một vị thuốc rất quý. Ở Việt Nam, đặc biệt là Nha Trang cá ngựa khô là một đặc sản quý. Bởi vậy nếu đi du lịch Nha Trang du khách nào cũng muốn mua một ít cá ngựa khô về làm quà.",
    days: "11/10/2024",
  },
  {
    image: news4,
    title: "Cà phê muối - thức uống mang thương hiệu Cố đô Huế",
    desc: "Nếu Hà Nội nổi tiếng với món cà phê trứng, Sài Gòn nổi tiếng bởi món cà phê sữa thì khi nhắc đến Huế, người ta lại nghĩ ngay đến Cà phê Muối - một thức uống mang thương hiệu của Cố Đô. Giữa cuộc sống nhộn nhịp và bộn bề ngoài kia, chỉ cần ngồi nhâm nhi một tách cà phê muối có thể sống chậm lại, cảm nhận được vị đắng cay, ngọt ngào, mặn mà trong cuộc sống.",
    days: "11/10/2024",
  },
];
const newsFilter = dataNews.slice(0, 3);
function News() {
  return (
    <div className="container section">
      <ContentBox
        title1={"Hạ Long: Khám phá Sự đặc sắc"}
        title2={"và Cập nhật tin tức mới nhất"}
        desc={
          "Hạ Long: Bí mật và Cuộc sống trong Vịnh - Khám phá và Cập nhật những tin tức hấp dẫn từ điểm đến tuyệt vời này."
        }
      />
      <div className={style.cardList}>
        {newsFilter && newsFilter.map((news, index) => <NewsCard key={index} news={news} />)}
      </div>

      <div className={style.button}>
        <Link to="/">
          <Button paddingType="paddingBig" colorType="normal">
            <div className="md">Xem tất cả</div>
            <FaArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default News;
