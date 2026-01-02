import React from "react";

export default function Tags({ title, green }) {
  return <div className={green ? "tag greenTag" : "tag"}>{title || "tag"}</div>;
}
