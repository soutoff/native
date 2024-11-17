import { ConfigService } from "@nestjs/config";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private prisma;
    constructor(configService: ConfigService, prisma: PrismaService);
    validate({ id }: Pick<User, 'id'>): Promise<{
        email: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        avatarPath: string;
        phone: string;
    }>;
}
export {};
