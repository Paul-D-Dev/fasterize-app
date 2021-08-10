import ResponsePlug from '../_models/reponse-plug.model';

export default class UrlPLugService {
    private readonly $URL_API = process.env.NODE_ENV ==='development' ? process.env.REACT_APP_DEV_API : process.env.REACT_APP_PROD_API;
    
    public async getResultUrlPLug(url: string): Promise<ResponsePlug> {
        const urlEncoded = encodeURIComponent(url);
        return await fetch(`${this.$URL_API}${urlEncoded}`).then( async (res) => {
            const data = await res.json();
            return new ResponsePlug(data);
        });
    }
}