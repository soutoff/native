import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { faker } from '@faker-js/faker';
import {hash} from 'argon2'


@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}


  async register(dto: AuthDto) {
    const oldUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    })

    if (oldUser) {
        throw new BadRequestException("User already exists");
        
    }

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: await hash(dto.password),
        name: faker.person.firstName(),
        avatarPath: faker.image.avatar(),
        phone: faker.phone.number(),
      },
    });


    return user;
  }
}
