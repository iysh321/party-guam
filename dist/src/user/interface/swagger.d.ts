export declare const SwaggerUserApi: {
    users: {
        register: {
            success: {
                status: number;
                message: string;
                description: string;
                data: {
                    data: any[];
                    count: number;
                };
            };
        };
        error: {
            status: number;
            message: string;
        };
    };
    login: {
        success: {
            status: number;
            message: string;
            data: string;
            token: string;
        };
        error: {
            status: number;
            message: string;
        };
    };
};
