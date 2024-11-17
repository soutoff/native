import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnUserObject } from './return-user.object';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async byId(id: string, selectObject:Prisma.UserSelect = {}) {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      }, 
      select: {
        ...returnUserObject,
        favorites: {
          select: {
            id: true,
            name: true,
            slug: true,
            image: true,
            price: true,
            category: {
              select: {
                name: true
              }
            }
          }  
        },
        ...selectObject
      }
    })

    if(!user) {
      throw new Error('User not found')
    }

    return user
  }


  async toggleFavorite(userId: string, productId: string) {
    const user = await this.byId(userId)

    if (!user) throw new Error('User not found')

    const isExists = user.favorites.some(product => product.id === productId)  

    await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        favorites: {
          [isExists ? 'disconnect' : 'connect'] : {
            id: productId
          }
        }
      }
    })

    return {
      message: 'Success'
    }
  }
}