import CardComponent from "components/card-component/card-component.component";
import CardLoader from "components/card-loader/card-loader.component";
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
import VehiclesComponent from "./vehicles/vehicles.component";

const Dashboard = () => {
  const [toggleOption, setToggleOption] = useState("people");

  // pagination data
  const [peoplePage, setPeoplePage] = useState(1);
  const [spaceshipPage, setSpaceshipPage] = useState(1);
  const [vehiclesPage, setVehiclesPage] = useState(1);

  const filmObj = useQuery("films", getAllFilm);
  const spaceshipObj = useQuery(["starship", spaceshipPage], () =>
    getAllStarShip(spaceshipPage)
  );
  const peopleObj = useQuery(["people", peoplePage], () =>
    getAllPeople(peoplePage)
  );
  const vehiclesObj = useQuery(["vehicles", vehiclesPage], () =>
    getAllVehicles(vehiclesPage)
  );
  const speciesObj = useQuery("species", getAllSpecie);

  const nextPage = (): void => {
    switch (toggleOption) {
      case "people":
        setPeoplePage(peoplePage + 1);
        break;
      case "spaceships":
        setSpaceshipPage(spaceshipPage + 1);
        break;
      case "vehicles":
        setVehiclesPage(vehiclesPage + 1);
        break;
      default:
        break;
    }
  };

  const prevPage = (): void => {
    switch (toggleOption) {
      case "people":
        if (peoplePage > 1) {
          setPeoplePage(peoplePage - 1);
        }
        break;
      case "spaceships":
        if (spaceshipPage > 1) {
          setSpaceshipPage(spaceshipPage - 1);
        }
        break;
      case "vehicles":
        if (vehiclesPage > 1) {
          setVehiclesPage(vehiclesPage - 1);
        }
        break;
      default:
        break;
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
          {toggleOption === "people" &&
            (peopleObj.status === "loading" ? (
              <CardLoader />
            ) : (
              <PeopleComponent
                pageTitle={toggleOption}
                pageNo={peoplePage}
                nextPage={nextPage}
                prevPage={prevPage}
                peopleObj={peopleObj}
              />
            ))}

          {toggleOption === "spaceships" &&
            (spaceshipObj.status === "loading" ? (
              <CardLoader />
            ) : (
              <SpaceshipComponent
                pageTitle={toggleOption}
                spaceshipObj={spaceshipObj}
                pageNo={spaceshipPage}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            ))}

          {toggleOption === "vehicles" &&
            (vehiclesObj.status === "loading" ? (
              <CardLoader />
            ) : (
              <VehiclesComponent
                pageTitle={toggleOption}
                vehiclesObj={vehiclesObj}
                pageNo={vehiclesPage}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            ))}
        </>
      </CardComponent>
    </div>
  );
};

export default Dashboard;
