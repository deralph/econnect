import React from "react";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/businessDetails.module.css";
import BackArrow from "../../BackArrow";
import { AiTwotoneTag } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { RiMailFill } from "react-icons/ri";
import { BsFillTelephoneFill, BsGlobe } from "react-icons/bs";

const BusinessDeatails = ({ disable, approve }) => {
  const option = [
    {
      main: `${disable ? "Disable" : approve ? "Approve" : "Report"}`,
      color: `${disable ? "#f00" : approve ? "#08B839" : "#4063D6"}`,
    },
  ];
  const images = [
    "/businessdp.png",
    "/businessdp.png",
    "/businessdp.png",
    "/businessdp.png",
    "/businessdp.png",
  ];
  return (
    <section
      className={
        approve || disable
          ? `${style.center} ${style.center1}  ${styles.center2}`
          : `${style.center} ${style.center1}`
      }
    >
      <BackArrow heading={"Voltage Services"} option={option} />
      <article className={styles.section}>
        <div className={styles.businessDp}>
          <div>
            <img src="/businessdp.png" alt="businessdp" />
            <p>Approved</p>
          </div>
          <div className={styles.businesscont}>
            <h1>Voltage Services</h1>
            <p>
              <AiTwotoneTag style={{ color: "#f00", marginRight: ".5em" }} />{" "}
              Gift Cards & BTC{" "}
            </p>
            <p>
              {" "}
              <MdLocationPin
                style={{ color: "#E59112", marginRight: ".5em" }}
              />{" "}
              Warri, Delta state
            </p>
            <p>
              {" "}
              <RiMailFill style={{ color: "#4063D6", marginRight: ".5em" }} />
              vandisleo6@gmail.com
            </p>
            <p>
              {" "}
              <BsGlobe style={{ color: "#596384", marginRight: ".5em" }} />{" "}
              wa.link/8cvm4l
            </p>
          </div>
          <p className={styles.phone}>
            <BsFillTelephoneFill
              style={{ color: "#fff", marginRight: ".5em" }}
            />
            09011444830
          </p>
        </div>
        <div className={styles.description}>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec,{" "}
          </p>
        </div>
        <div className={styles.images}>
          {images.map((img, index) => (
            <img src={img} alt={`extra buiness images ${index}`} key={index} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default BusinessDeatails;
