import Base from "./baseURL";

export class Endpoints {
    static GET_ALL_FILM_ENDPOINT = Base.BASE_URL + 'films/';
    static GET_STARSHIPS = Base.BASE_URL + 'starships/';
    static GET_PEOPLE = Base.BASE_URL + 'people/';
    static GET_VEHICLE = Base.BASE_URL + 'vehicles/';
    static GET_SPECIES = Base.BASE_URL + 'species/'
}

export default Endpoints