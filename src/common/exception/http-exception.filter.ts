import { ArgumentsHost, Catch, ExceptionFilter, HttpException, InternalServerErrorException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor() {}

  catch(error: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    if (!(error instanceof HttpException)) {
      error = new InternalServerErrorException();
    }

    const response = (error as HttpException).getResponse();
    response['path'] = req.url; // 응답에 URL 속성 추가

    res.status((error as HttpException).getStatus()).json(response);
  }
}
