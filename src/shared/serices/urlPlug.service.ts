import ResponsePlug from '../_models/reponse-plug.model';
export default class UrlPLugService {
    
    public async getResultUrlPLug(url: string): Promise<ResponsePlug> {
        const inputs: ResponsePlug =  {
            plugged: true,
            statusCode: 200,
            fstrzFlags: ['optimisée', 'cachée'],
            cloudfrontStatus: 'MISS',
            cloudfrontPOP: 'Frankfurt'
        }
        const result = new ResponsePlug(inputs);
        return result
    }
}