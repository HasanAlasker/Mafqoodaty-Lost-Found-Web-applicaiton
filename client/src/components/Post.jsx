import React, { useState } from "react";
import TopOfPost from "./TopOfPost";
import Tags from "./Tags";
import Description from "./Description";
import PrimaryBtn from "./PrimaryBtn";
import PostCard from "./PostCard";
import TagContainer from "./TagContainer";

export default function Post({
  userName,
  userPhone,
  createdAt,
  name,
  image ,
  category,
  description,
  color,
  city,
  area,
  type,
  password,
}) {
  let isOpen = image ? false : true
  const [openDesc, setOpenDesc] = useState(isOpen);
  const onClickDesc = () => {
    setOpenDesc(!openDesc);
  };

  return (
    <PostCard>
      <div>
        <TopOfPost userName={userName} createdAt={createdAt} />
        <TagContainer>
          <Tags title={name} />
          <Tags title={category} />
          <Tags title={city} />
          <Tags title={area} />
          {color && <Tags title={color} />}
          <Tags title={type} green />
        </TagContainer>
        <Description
          open={openDesc}
          onClick={onClickDesc}
          description={description}
        />
      </div>
      <div className="imageAndBtn">
        {image && <img className="itemImage" alt="" />}
        <PrimaryBtn />
      </div>
    </PostCard>
  );
}
