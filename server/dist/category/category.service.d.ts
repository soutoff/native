import { PrismaService } from 'src/prisma.service';
import { CategoriesDto } from './dto/category.dto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        prodiucts: {
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
            prodiucts: number;
        };
    }[]>;
    byId(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        prodiucts: {
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
            prodiucts: number;
        };
    }>;
    bySlug(slug: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        prodiucts: {
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
            prodiucts: number;
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
