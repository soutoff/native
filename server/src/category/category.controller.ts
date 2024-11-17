import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CategoriesDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories() {
    return this.categoryService.getAll();
  }

  @Get('by-id/:id')
  async getById(@Param('id') id: string) {
    return this.categoryService.byId(id);
  }

  @Get('by-slug/:slug')
  async getBySlug(@Param('slug') slug: string) {
    return this.categoryService.bySlug(slug);
  }

  @HttpCode(200)
  @Post()
  async create() {
    return this.categoryService.create();
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: CategoriesDto) {
    return this.categoryService.update(id, dto);
  }

  @HttpCode(200)
  @Delete(':id') 
  async delete(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }
}
