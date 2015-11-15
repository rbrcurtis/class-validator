import {Trim, Rtrim, ToInt, Blacklist} from "../../src/decorator/SanitizeDecorators";

export class Post {

    @Trim()
    title: string;

    @Rtrim(['.'])
    @Blacklist(/(1-9)/)
    text: string;

    @ToInt()
    rating: number;

}