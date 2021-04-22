import { axiosInstance } from "api/axios"
import Endpoints from "api/endpoints"
import { GET } from "../utils/constants"

export const getAllFilm = () => {
    return axiosInstance({
        method: GET,
        url: Endpoints.GET_ALL_FILM_ENDPOINT
    })
}