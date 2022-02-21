import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsISO8601, IsNotEmpty, IsString } from "class-validator";

export class JoinProjectDto {
    @ApiProperty({
        description: "A date type that tells when you started your relation with this project (use - not /)",
        example: "2004-06-23"
    })
    @IsNotEmpty()
    @IsString()
    @IsISO8601()
    initDate: string;

    @ApiProperty({
        description: "A date type that tells when you finished your relation with this project (use - not /)",
        example: "2004-06-23"
    })
    @IsNotEmpty()
    @IsString()
    @IsISO8601()
    end?: string;

    @ApiProperty({
        description: "A boolean that tells if your relation is active",
        example: true
    })
    @IsNotEmpty()
    @IsBoolean()
    active: boolean
}