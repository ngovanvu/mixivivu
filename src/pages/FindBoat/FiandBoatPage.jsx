import React, { useEffect, useState } from "react";
import FindBoat from "./FindBoat";
import styles from "./FiandBoatPage.module.css";
import CardBoat from "./CardBoat";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function FiandBoatPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Giả lập thời gian tải
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 giây

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <div className={styles.background}>
            <div className={`container ${styles.pageBoat}`}>
              <FindBoat />
              <CardBoat />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default FiandBoatPage;
