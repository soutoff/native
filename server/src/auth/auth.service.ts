import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {


  register() {
    return {
      name: "Test User"
    }
  }
}
