import CardComponent from "components/card-component/card-component.component";
import React, { FC } from "react";
import { FaAngleLeft, FaAngleRight, FaMale, FaFemale } from "react-icons/fa";
import { QueryResponse } from "types/response";

type Props = {
  pageTitle?: string;
  pageNo?: number;
  nextPage?: any;
  prevPage?: any;
  peopleObj?: QueryResponse;
  isNextEnable?: boolean;
};

const PeopleComponent: FC<Props> = ({
  pageTitle,
  pageNo,
  nextPage,
  prevPage,
  peopleObj,
  isNextEnable,
}) => {
  console.log(peopleObj?.data.data);
  console.log(pageNo)

  return (
    <div className="px-4 pt-4 pb-3">
      <div className="row">
        <div className="col-4 my-auto">
          <h5 className="mb-0 pb-0 text-capitalize">{pageTitle}</h5>
        </div>

        <div className="col-8 d-flex justify-content-end align-items-center">
          <div className="d-flex">
            { Number(pageNo) > 1  &&
            <div className="navigation-div mr-2 align-items-center d-flex cursor">
              <FaAngleLeft onClick={prevPage} />
            </div>
            }

            {!isNextEnable && (
              <div className="navigation-div align-items-center d-flex cursor">
                <FaAngleRight onClick={nextPage} />
              </div>
            )}
          </div>

          <p className="mb-0 text-secondary ml-2">Page {pageNo}</p>
        </div>
      </div>

      <hr />

      <div className="row mt-4">
        {peopleObj?.data?.data?.results.map((result: any, index: number) => (
          <div key={result.name + index} className="col-md-4 mb-3">
            <CardComponent withBoxShadow>
              <div className="p-3">
                <p>
                  <span className="text-secondary">Name:</span>{" "}
                  <span>{result.name}</span>
                </p>
                <p>
                  <span className="text-secondary">Birthday:</span>{" "}
                  <span>{result.birth_year}</span>
                </p>
                <p>
                  <span className="text-secondary">Gender:</span>{" "}
                  <span>
                    {result.gender === "male" ? <FaMale /> : <FaFemale />}
                  </span>
                </p>
                <p>
                  <span className="text-secondary">Height:</span>{" "}
                  <span>{result.height}</span>
                </p>
              </div>
            </CardComponent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleComponent;
