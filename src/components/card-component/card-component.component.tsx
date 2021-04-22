import React, { FC, ReactChild } from "react";
import "./card-component.styles.scss";

type Props = {
  withBoxShadow?: boolean;
  children?: ReactChild | ReactChild[];
};

const CardComponent: FC<Props> = ({ children, withBoxShadow }) => {
  return (
    <div className="card-component">
      <div className={`custom-card ${withBoxShadow ? "card-box__shadow" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default CardComponent;
