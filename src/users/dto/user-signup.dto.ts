import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserSignupDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6, {message: 'Password shoud be at least 6 character.'})
    password: string;
}