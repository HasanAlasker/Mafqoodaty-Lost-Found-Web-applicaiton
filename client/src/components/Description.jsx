import { RiEyeCloseLine, RiEyeLine } from "@remixicon/react";

export default function Description({ description, open, onClick }) {
  return (
    <div className="padding row" onClick={onClick}>
      {!open ? <RiEyeLine color="gray" /> : <RiEyeCloseLine color="gray" />}
      <p className="mid">{open ? description : "الوصف"}</p>
    </div>
  );
}
