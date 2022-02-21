import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignupDto {
    @ApiProperty({
        description: "A string type name with 1 or more letters",
        example: "John"
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        description: "An string type Email, with the correct email synthax and not empty",
        example: "jguibrandao@gmail.com"
    })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: "A string type password, with 4 or more characters",
        example: "jguibrandao123"
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    password: string
}