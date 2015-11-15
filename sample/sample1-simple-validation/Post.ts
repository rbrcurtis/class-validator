import {Contains, IsInt, MinLength, MaxLength, IsEmail, IsFQDN, IsDate, NotEmpty, NotEmptyArray, MinElements, MaxElements} from "../../src/decorator/ValidationDecorators";

export class Post {

    @MinLength(10)
    @MaxLength(20)
    title: string;

    @Contains('hello')
    text: string;

    @IsInt({ min: 0, max: 10 })
    rating: number;

    @IsEmail()
    email: string;

    @IsFQDN()
    site: string;

    @IsDate()
    createDate: Date;

    @NotEmptyArray()
    @MinElements(2)
    @MaxElements(5)
    @MinLength(3, { each: true, message: 'Tag is too short' })
    @MaxLength(50, { each: true, message: 'Tag is too long' })
    tags: string[];

}