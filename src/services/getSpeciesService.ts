import { axiosInstance } from "api/axios"
import Endpoints from "api/endpoints"
import { GET } from "../utils/constants"

export const getAllSpecie = () => {
    return axiosInstance({
        method: GET,
        url: Endpoints.GET_SPECIES
    })
}