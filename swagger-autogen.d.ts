declare function swaggerAutogen (args?: any, endpointsFiles?: any, data?: any, specMapping?: any): (outputFile: any, endpointsFiles: any, data?: any) => Promise<false | {
    success: boolean;
    data: any;
}>;

export = swaggerAutogen;