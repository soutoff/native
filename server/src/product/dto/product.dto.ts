import { IsNumber, IsString } from "class-validator"

export class ProductDto {
  @IsString()
  name: string  

  @IsString()
  description: string

  @IsString()
  categoryId: string

  @IsString()
  image: string

  @IsNumber()
  price: number    
}