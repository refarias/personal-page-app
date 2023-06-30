export class Post {
    constructor (
        public path : String,
        public coverImage : String,
        public title : String,
        public content : String,
        public date : Date,
        public visible : Boolean,
        public language : String
        ){}
}