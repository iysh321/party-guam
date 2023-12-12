import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class CustomErrorExceptionFilter implements ExceptionFilter {
    constructor();
    catch(error: Error, host: ArgumentsHost): void;
}
