import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({message: 'Title can not be empty.'})
    @IsString({message: 'Title should be a string.'})
    title: string;

    @IsNotEmpty({message: 'description can not be empty.'})
    @IsString({message: 'description should be a string.'})
    description: string;
}
