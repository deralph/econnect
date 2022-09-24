import React from "react";
import AppNav from "../navbars/AppNav";
import SideNav from "../navbars/SideNav";
import styles from "../../styles/newsFeed.module.css";
import RightSide from "./RightSide";
import Center from "./Center";

const newsFeed = () => {
  return (
    <section className={styles.section}>
      <AppNav style={{ background: "#fff" }} />
      <div className="" style={{ display: "flex", paddingTop: "55px" }}>
        <SideNav />
        <Center />
        <RightSide />
      </div>
    </section>
  );
};

export default newsFeed;