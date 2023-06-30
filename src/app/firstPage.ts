import { Post } from "./post";
import { Profile } from "./profile";

export class FirstPage{
    constructor( 
        public profile : Profile,
        public posts: Post[],
        public menu: any){}
}