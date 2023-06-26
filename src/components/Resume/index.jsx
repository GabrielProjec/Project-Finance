import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

import ResumeItem from "../ResumeItem";

const Resume = ({ income, expense, total }) => {
  return (
    <div>
      <C.Container>
        <ResumeItem
          title="Entradas"
          Icon={FaRegArrowAltCircleUp}
          value={income}
        />
        <ResumeItem
          title="Saidas"
          Icon={FaRegArrowAltCircleDown}
          value={expense}
        />
        <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
      </C.Container>
    </div>
  );
};

export default Resume;
