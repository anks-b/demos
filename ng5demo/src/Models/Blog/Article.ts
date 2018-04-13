export  class Article {              
    
    constructor(
        public id = 0, 
        public title = 'title', 
        public content ="content",
        public tags:Array<string>=[],
        public category = 0){

    }

}


export  class Category {
    id:number=0;
    name: string='';

    constructor(){
        
    }

}

export class Tag {
    id:number=0;
    name: string='';
    constructor(){

    }
}