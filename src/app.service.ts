import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  health() {
    return { version: '1.0', status: 'running' };
  }
}
