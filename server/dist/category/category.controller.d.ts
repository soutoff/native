import { CategoryService } from './category.service';
import { CategoriesDto } from './dto/category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getCategories(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        products: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
            description: string;
            price: number;
            categoryId: string | null;
            userId: string | null;
        }[];
        _count: {
            products: number;
        };
    }[]>;
    getById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        products: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
            description: string;
            price: number;
            categoryId: string | null;
            userId: string | null;
        }[];
        _count: {
            products: number;
        };
    }>;
    getBySlug(slug: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        products: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
            description: string;
            price: number;
            categoryId: string | null;
            userId: string | null;
        }[];
        _count: {
            products: number;
        };
    }>;
    create(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
    }>;
    update(id: string, dto: CategoriesDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
    }>;
}
