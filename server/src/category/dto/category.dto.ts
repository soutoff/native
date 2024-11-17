import { IsNumber, IsString } from "class-validator"

export class CategoriesDto{
  @IsString({ message: 'Must be a string' })
  name: string

  @IsString()
  image: string       
}