import ResponsePlug from '../_models/reponse-plug.model';

export default class UrlPLugService {
    
    public async getResultUrlPLug(url: string): Promise<ResponsePlug> {
        const urlEncoded = encodeURIComponent(url);
        return await fetch(`http://localhost:3004/${urlEncoded}`).then( async (res) => {
            const data = await res.json();
            return new ResponsePlug(data);
        });
    }
}