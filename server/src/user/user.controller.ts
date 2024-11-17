import { Controller, Get, HttpCode, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Auth()
  @Get('profile')
  async byId(@CurrentUser('id') id: string) {
    return this.userService.byId(id);
  }

  @HttpCode(200)
  @Patch('profile/favorite/:productId')
  @Auth()
  async toggleFavorite(@CurrentUser('id') userId: string, @Param('productId') productId: string) {
    return this.userService.toggleFavorite(userId, productId);
  }
}
