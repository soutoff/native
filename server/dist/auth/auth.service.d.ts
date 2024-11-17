import { AuthDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    register(dto: AuthDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        name: string;
        avatarPath: string;
        phone: string;
    }>;
}
