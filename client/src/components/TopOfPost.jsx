import React from "react";
import { RiMore2Line, RiUserLine } from "@remixicon/react";

export default function TopOfPost({ userName, createdAt }) {
  return (
    <div className="topOfPost padding" style={{paddingLeft:".5rem"}}>
      <div className="picAndCont">
        <div className="avatar">
          <RiUserLine className="avatarIcon" color="white" size={32}/>
        </div>
        <div className="nameDate">
          <p className="mid bold">حسن الاسكر</p>
          <p className="small faded semiBold">1/2/2026</p>
        </div>
      </div>
      <RiMore2Line size={32} />
    </div>
  );
}
