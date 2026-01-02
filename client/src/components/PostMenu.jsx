import React from "react";

export default function PostMenu({ onEdit, onDelete, isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="postMenu">
      <div className="mid" onClick={onEdit}>
        تعديل
      </div>
      <hr />
      <div className="mid" onClick={onDelete} style={{ color: "red" }}>
        حذف
      </div>
    </div>
  );
}
