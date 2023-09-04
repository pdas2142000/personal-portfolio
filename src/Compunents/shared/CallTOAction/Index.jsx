import React from "react";
import "./style.scss";
import Arrow from "../arrow/Arrow";

function CallToAction({ text, action, icon , downlode  }) {
  return (
    <div className="call-to-action" onClick={action}>
      <span className="text">{text}</span>
      {icon ? <div className="icon">{icon}</div> : <Arrow />}
      {downlode}
    </div>
  );
}

export default CallToAction;
