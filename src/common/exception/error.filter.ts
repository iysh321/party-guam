import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch(Error)
export class CustomErrorExceptionFilter implements ExceptionFilter {
  catch(error: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // 예외 처리 로직
    const status = HttpStatus.INTERNAL_SERVER_ERROR; // 기본적으로 500 에러 상태 코드 사용
    const message = error.message || 'Internal Server Error';

    console.log(message);
    response.status(status).json({
      statusCode: status,
      message,
    });
  }
}
