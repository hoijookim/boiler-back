import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

	// express 미들웨어
  use(request: Request, response: Response, next: NextFunction): void {
    // 실행순서
    // 1)
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';

    // 3)
    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
      );
    });

    // 2)
    next();
  }
}