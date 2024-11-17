import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    byId(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        name: string;
        avatarPath: string;
        phone: string;
        oreder: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            reference: string;
        }[];
        favorites: {
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
        }[];
        _count: {
            oreder: number;
            favorites: number;
        };
    }>;
    toggleFavorite(userId: string, productId: string): Promise<{
        message: string;
    }>;
}
