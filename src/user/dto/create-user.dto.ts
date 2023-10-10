import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty({example:'Paulo Caetano'})
    @IsString()
    name: string;

    @ApiProperty({example:'Paulo@jstk@email.com'})
    @IsString()
    email: string;

    @ApiProperty({example:'@1123Abc'})
    @IsString()
    password: string;

    @ApiProperty({example})
    @IsString()
    picture: string;

}
