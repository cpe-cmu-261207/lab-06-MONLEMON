import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React, { useState } from "react";

export default function UserCard(props) {
  const [isTap, setIsTap] = useState(false);
  const onClickHandler = () => {
    {
      isTap === false ? setIsTap(true) : setIsTap(false);
    }
  };
  return (
    <div>
      <div className="border-bottom">
        {/* main section */}
        <div className="d-flex align-items-center p-3" onClick={onClickHandler}>
          <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
          <span className="text-center display-6 me-auto">{props.name}</span>
          {isTap === false ? <IconChevronDown /> : <IconChevronUp />}
        </div>
      </div>

      {isTap === false ? null : (
        <div className="text-center">
          <strong>
            <IconMailForward />
            {props.email}
          </strong>
          <br />
          <strong>
            {" "}
            <IconMapPins />
            {props.address}
          </strong>
        </div>
      )}

      {/* details */}
    </div>
  );
}
