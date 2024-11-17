import { UseGuards } from "@nestjs/common";
// import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { AuthGuard } from "@nestjs/passport";

// TODO: Если сделать без guards/jwt-auth-guard
export const Auth = () => UseGuards(AuthGuard('jwt'))
// export const Auth = () => UseGuards(JwtAuthGuard)

// FIXME: 
// Здесь можно создать декоратор Admin 
// 