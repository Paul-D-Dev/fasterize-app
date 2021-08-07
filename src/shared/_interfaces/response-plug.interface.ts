export interface IResponsePlug {
    plugged: boolean;
    statusCode: number;
    fstrzFlags?: string[];
    cloudfrontStatus?: string;
    cloudfrontPOP?: string;
}