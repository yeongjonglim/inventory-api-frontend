import axios, {AxiosInstance} from "axios"
import { auth } from '@/firebase'

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
});

axiosInstance.interceptors.request.use(async config => {
    config.headers = {
        'Authorization': 'Bearer ' + await auth.currentUser?.getIdToken()
    }
    return config
}, error => {
    return Promise.reject(error)
})

export type Tyre = {
    width: number
    diameter: number
    profile: number | undefined
    brand: string | undefined
    series: string | undefined
    sellingPrice: number 
}

export type TyreResponse = {
    tyres: Array<Tyre>
}

// eslint-disable-next-line
type Options = { headers?: Record<string, any>; code?: number };

// type TyreAPIResponse = [null, TyreResponse, Options?] | [Error, Options?];
type TyreAPIResponse = [null, TyreResponse] | [Error];

class TyreService {
    constructor(private httpClient: AxiosInstance) {
    }
    
    async getTyres(): Promise<TyreAPIResponse> {
        try {
            const { data, headers } = await this.httpClient.get<TyreResponse>('tyres') 
            // return [null, data, { headers }]
            return [null, data]
        } catch (error) {
            console.error(error)
            // return [error, error.response?.status]
            return [error]
        }
    }
}

export const tyreService = new TyreService(axiosInstance);