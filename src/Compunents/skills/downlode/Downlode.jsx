import React from 'react';
import "./style.scss"
import { AiOutlineCloudDownload } from "react-icons/ai";

function Downlode() {
  return (
    <div>
      <a href="pratik.pdf" download="Pratik Kumar Das.pdf">Downlode CV <span><AiOutlineCloudDownload/></span></a>
    </div>
  );
}

export default Downlode;
