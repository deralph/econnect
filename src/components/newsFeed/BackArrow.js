import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/newsFeed/addques.module.css";
import style from "../../styles/newsFeed/faq.module.css";
import style1 from "../../styles/newsFeed/teachprac.module.css";

const BackArrow = ({ heading, option, added, noArr, noAdd }) => {
  const navigate = useNavigate();
  const onclick = (param) => {
    if (param === "Add Question") {
      return navigate("/addques");
    }
    if (param === "My Questions") {
      return navigate("/myquestion");
    }
    return;
  };
  return (
    <div
      className={`  flex justify=between items-center w-full
        ${added ? `pt-[5em] ` : noAdd ? ` p-[1.3em]` : ` p-[0]`}
        `}
    >
      <h2 className={`flex items-center ${!noAdd && `font-bold`}`}>
        {noArr || (
          <FaArrowLeft
            onClick={() => navigate(-1)}
            className="text-primary mr-[10px]"
          />
        )}{" "}
        {heading}
      </h2>
      {option && (
        <ul className="flex ">
          {option.map(({ main, Icon, color }, index) => {
            return (
              <li
                className="ml-[1.3em] text-[0.6em] font-bold font-primary p-[0.8em] rounded-[0.4em] cursor-pointer"
                key={index}
                style={{ background: `${color}` }}
                // onClick={onclick(main)}
              >
                <Link
                  className="text-white"
                  to={
                    main === "Add Question"
                      ? "/addques"
                      : main === "My Questions"
                      ? "/myquestion"
                      : main === "Post Update"
                      ? "/post-news"
                      : main === "View Posted Updates"
                      ? "/updates"
                      : main === "Add Friends"
                      ? "/add-friends"
                      : main === "Edit Profile"
                      ? "/edit-Profile"
                      : main === "Message"
                      ? "/chat"
                      : ""
                  }
                >
                  {Icon && <Icon className="mr-[0.4em]" />}
                  {main}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BackArrow;
