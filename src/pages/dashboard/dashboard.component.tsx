import CardComponent from "components/card-component/card-component.component";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getAllFilm } from "services/getFilmServices";
import { getAllPeople } from "services/getPeopleService";
import { getAllStarShip } from "services/getSpaceshipService";
import { getAllSpecie } from "services/getSpeciesService";
import { getAllVehicles } from "services/getVehiclesService";
import DashboardCard from "./dashboard-card/dashboard-card.component";

import "./dashboard.styles.scss";
import PeopleComponent from "./people/people.component";
import SpaceshipComponent from "./spaceship/spaceship.component";

const Dashboard = () => {
  const [toggleOption, setToggleOption] = useState("people");
  const filmObj = useQuery("films", getAllFilm);
  const spaceshipObj = useQuery("starship", getAllStarShip);
  const peopleObj = useQuery("people", getAllPeople);
  const vehiclesObj = useQuery("vehicles", getAllVehicles);
  const speciesObj = useQuery("species", getAllSpecie);

  // pagination data
  const [peoplePage, setPeoplePage] = useState(1);

  const nextPage = (): void => {
    setPeoplePage(peoplePage + 1);
  };

  const prevPage = (): void => {
    if (peoplePage > 1) {
      setPeoplePage(peoplePage - 1);
    }
  };

  return (
    <div className="dashboard">
      <DashboardCard
        films={filmObj}
        spaceshipObj={spaceshipObj}
        peopleObj={peopleObj}
        vehiclesObj={vehiclesObj}
        speciesObj={speciesObj}
      />

      <div className="custom-toggle__div mt-5 mb-4">
        <div
          onClick={() => setToggleOption("people")}
          className={`items-div ${
            toggleOption === "people" ? "selected-toggle" : ""
          } cursor`}
        >
          People
        </div>
        <div
          onClick={() => setToggleOption("spaceships")}
          className={`items-div ${
            toggleOption === "spaceships" ? "selected-toggle" : ""
          } cursor`}
        >
          Spaceships
        </div>
        <div
          onClick={() => setToggleOption("vehicles")}
          className={`items-div ${
            toggleOption === "vehicles" ? "selected-toggle" : ""
          } cursor`}
        >
          Vehicles
        </div>
      </div>

      <CardComponent withBoxShadow>
        <>
          {/* result card section */}
          {toggleOption === "people" && (
            <PeopleComponent
              pageTitle={toggleOption}
              pageNo={peoplePage}
              nextPage={nextPage}
              prevPage={prevPage}
              peopleObj={peopleObj}
            />
          )}

          {toggleOption === "spaceships" && (
            <SpaceshipComponent pageTitle={toggleOption} spaceshipObj={spaceshipObj} />
          )}
        </>
      </CardComponent>
    </div>
  );
};

export default Dashboard;
