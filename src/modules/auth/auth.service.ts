import { compare } from 'bcrypt';

import { JwtService } from '@nestjs/jwt';

import { Injectable, BadRequestException } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (user && await compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (user) {
      const payload = { email: user.email, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload, { expiresIn: '1 day' }),
      };
    }
    throw new BadRequestException({
      error: 'Dados invalidos!'
    });
  }
}