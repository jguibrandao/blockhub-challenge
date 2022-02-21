import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsISO8601, IsNotEmpty, IsString } from "class-validator";

export class CreateCollaboratorDto {
    @ApiProperty({
        description: "A string type name with 1 or more letters",
        example: "John"
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        description: "A string type role with 1 or more letters",
        example: "Junior back-end developer"
    })
    @IsNotEmpty()
    @IsString()
    role: string;

    @ApiProperty({
        description: "A date type that tells when you came to blockhub (use - not /",
        example: "2004-06-23"
    })
    @IsNotEmpty()
    @IsString()
    @IsISO8601()
    admission: string;

    @ApiProperty({
        description: "A boolean that tells if you are active",
        example: true
    })
    @IsNotEmpty()
    @IsBoolean()
    active?: boolean
}
