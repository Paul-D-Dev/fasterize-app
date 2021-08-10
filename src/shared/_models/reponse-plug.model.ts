import { IResponsePlug } from './../_interfaces/response-plug.interface';
export default class ResponsePlug implements IResponsePlug {
    plugged!: boolean;
    statusCode!: number;
    fstrzFlags?: string[];
    cloudfrontStatus?: string;
    cloudfrontPOP?: string;
    url?: string;
    date?: string;

    constructor(inputs: ResponsePlug) {
        return Object.assign(this, inputs);
    }
}