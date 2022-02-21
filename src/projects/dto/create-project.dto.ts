import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsISO8601, IsNotEmpty, IsString } from "class-validator";

export class CreateProjectDto {
    @ApiProperty({
        description: "A string type name with 1 or more letters",
        example: "John"
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        description: "A string type description for your project",
        example: "This project uses NestJS and mongodb"
    })
    @IsNotEmpty()
    @IsString()
    description?: string;

    @ApiProperty({
        description: "A date type that tells when you started your project (use - not /)",
        example: "2004-06-23"
    })
    @IsNotEmpty()
    @IsString()
    @IsISO8601()
    initDate: string;

    @ApiProperty({
        description: "A date type that tells when you finished your project (use - not /)",
        example: "2004-06-23"
    })
    @IsNotEmpty()
    @IsString()
    @IsISO8601()
    end?: string;

    @ApiProperty({
        description: "A boolean that tells if your project is active",
        example: true
    })
    @IsNotEmpty()
    @IsBoolean()
    active?: boolean
}
