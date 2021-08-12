import axios from 'axios';
import ResponsePlug from '../_models/reponse-plug.model';

export default class UrlPLugService {
    private readonly $URL_API = process.env.NODE_ENV ==='development' ? process.env.REACT_APP_DEV_API : process.env.REACT_APP_PROD_API;
    
    public async getResultUrlPLug(url: string): Promise<any> {
        const urlEncoded = encodeURIComponent(url);
        return await axios.get(`${this.$URL_API}${urlEncoded}`)
            .then((response) => {
                return {
                    code: response.status,
                    error: undefined,
                    payload: new ResponsePlug(response.data)
                }
            })
            .catch((e) => {
                const error = e.response
                return {code : error.status, error: error.data, payload: undefined}
            });
    }
}