import React, { FC } from "react";
import { QueryResponse } from "types/response";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CardComponent from "components/card-component/card-component.component";

type Props = {
  pageTitle?: string;
  pageNo?: number;
  nextPage?: any;
  prevPage?: any;
  spaceshipObj?: QueryResponse;
};

const SpaceshipComponent: FC<Props> = ({
  pageTitle,
  pageNo,
  nextPage,
  prevPage,
  spaceshipObj,
}) => {

  return (
    <div className="px-4 pt-4 pb-3">
      <div className="row">
        <div className="col-4 my-auto">
          <h5 className="mb-0 pb-0 text-capitalize">{pageTitle}</h5>
        </div>

        <div className="col-8 d-flex justify-content-end align-items-center">
          <div className="d-flex">
            <div className="navigation-div mr-2 align-items-center d-flex cursor">
              <FaAngleLeft onClick={prevPage} />
            </div>

            <div className="navigation-div align-items-center d-flex cursor">
              <FaAngleRight onClick={nextPage} />
            </div>
          </div>

          <p className="mb-0 text-secondary ml-2">Page {pageNo}</p>
        </div>
      </div>

      <hr/>

      <div className="row mt-4">
        {spaceshipObj?.data?.data?.results.map((result: any, index: number) => (
          <div className="col-md-4 mb-3">
            <CardComponent withBoxShadow>
              <div className="p-3">
                <p>
                  <span className="text-secondary">Name:</span>{" "}
                  <span>{result.name}</span>
                </p>
                <p>
                  <span className="text-secondary">Cost:</span>{" "}
                  <span>{result.cost_in_credits}</span>
                </p>
                <p>
                  <span className="text-secondary">Manufacturer:</span>{" "}
                  <span>{result.manufacturer}</span>
                </p>

                <p>
                  <span className="text-secondary">Speed:</span>{" "}
                  <span>{result.speed}</span>
                </p>

                <p>
                  <span className="text-secondary">Passengers:</span>{" "}
                  <span>{result.passengers}</span>
                </p>
              </div>
            </CardComponent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceshipComponent;
