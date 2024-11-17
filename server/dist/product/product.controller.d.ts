import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAll(searchTerm?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string;
        userId: string;
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            password: string;
            avatarPath: string;
            phone: string;
        };
    }[]>;
    getBySlug(slug: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string;
        userId: string;
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            password: string;
            avatarPath: string;
            phone: string;
        };
    }>;
    getByCategory(categorySlug: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string;
        userId: string;
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            password: string;
            avatarPath: string;
            phone: string;
        };
    }[]>;
    create(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string | null;
        userId: string | null;
    }>;
    update(id: string, dto: ProductDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string | null;
        userId: string | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string | null;
        userId: string | null;
    }>;
}
