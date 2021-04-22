import { CameraIcon, PeopleIcon, SpeciesIcon, TaxiIcon, UfoIcon } from "assets/svg";
import CardComponent from "components/card-component/card-component.component";
import React, { FC } from "react";
import { QueryResponse } from "types/response";

import "./dashboard-card.styles.scss";

type Props = {
  films?: QueryResponse,
  spaceshipObj?: QueryResponse,
  peopleObj?: QueryResponse,
  vehiclesObj?: QueryResponse,
  speciesObj?: QueryResponse
}

const DashboardCard: FC<Props> = ({
  films,
  spaceshipObj,
  peopleObj,
  vehiclesObj,
  speciesObj
}) => {

  return (
    <div className="dashboard-card">
      <div className="row">
        <div className="col-xl col-md-4 col-6 mb-3">
          <CardComponent withBoxShadow>
            <div className="p-4">
              <p className="font-weight-normal">Films</p>

              <div className="row">
                <div className="col-6 my-auto">
                  <h5 className="mb-0">{films?.data?.data?.count}</h5>
                </div>
                <div className="col-6 text-right d-flex justify-content-end">
                  <div className="icon-div" style={{ background: "#03d4b633" }}>
                    <CameraIcon style={{ maxWidth: "20px" }} />
                  </div>
                </div>
              </div>
            </div>
          </CardComponent>
        </div>

        <div className="col-xl col-md-4 col-6 mb-3">
          <CardComponent withBoxShadow>
            <div className="p-4">
              <p className="font-weight-normal">Starships</p>

              <div className="row">
                <div className="col-6 my-auto">
                <h5 className="mb-0">{spaceshipObj?.data?.data?.count}</h5>
                </div>
                <div className="col-6 text-right d-flex justify-content-end">
                  <div className="icon-div" style={{ background: "#D7E2FD"}}>
                    <UfoIcon className="ufo-icon" style={{ maxWidth: "20px"}} />
                  </div>
                </div>
              </div>
            </div>
          </CardComponent>
        </div>

        <div className="col-xl col-md-4 col-6 mb-3">
          <CardComponent withBoxShadow>
            <div className="p-4">
              <p className="font-weight-normal">People</p>

              <div className="row">
                <div className="col-6 my-auto">
                <h5 className="mb-0">{peopleObj?.data?.data?.count}</h5>
                </div>
                <div className="col-6 text-right d-flex justify-content-end">
                  <div className="icon-div" style={{ background: "#DFDEF4" }}>
                    <PeopleIcon className="people-icon" style={{ maxWidth: "20px" }} />
                  </div>
                </div>
              </div>
            </div>
          </CardComponent>
        </div>

        <div className="col-xl col-md-4 col-6 mb-3">
          <CardComponent withBoxShadow>
            <div className="p-4">
              <p className="font-weight-normal">Vehicles</p>

              <div className="row">
                <div className="col-6 my-auto">
                <h5 className="mb-0">{vehiclesObj?.data?.data?.count}</h5>
                </div>
                <div className="col-6 text-right d-flex justify-content-end">
                  <div className="icon-div" style={{ background: "#FBF8DE" }}>
                    <TaxiIcon className="taxi-icon" style={{ maxWidth: "20px" }} />
                  </div>
                </div>
              </div>
            </div>
          </CardComponent>
        </div>

        <div className="col-xl col-md-4 col-6 mb-3">
          <CardComponent withBoxShadow>
            <div className="p-4">
              <p className="font-weight-normal">Species</p>

              <div className="row">
                <div className="col-6 my-auto">
                <h5 className="mb-0">{speciesObj?.data?.data?.count}</h5>
                </div>
                <div className="col-6 text-right d-flex justify-content-end">
                  <div className="icon-div" style={{ background: "#D6D6E8" }}>
                    <SpeciesIcon className="species-icon" style={{ maxWidth: "20px" }} />
                  </div>
                </div>
              </div>
            </div>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
