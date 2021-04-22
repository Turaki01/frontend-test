import { axiosInstance } from "api/axios"
import Endpoints from "api/endpoints"
import { GET } from "../utils/constants"

export const getAllVehicles = (page: number) => {
    return axiosInstance({
        method: GET,
        url: `${Endpoints.GET_VEHICLE}?page=${page}`
    })
}