/// <reference types="node" />
export declare let app: import("express-serve-static-core").Express;
export declare let authApp: import("express-serve-static-core").Express;
export declare let registrationApp: import("express-serve-static-core").Express;
export declare const authHandler: (event: any, context: any) => import("http").Server;
export declare const registrationHandler: (event: any, context: any) => import("http").Server;
export declare const handler: (event: any, context: any) => import("http").Server;
