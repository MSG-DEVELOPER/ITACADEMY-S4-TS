export class uso_api{

    url:string;
    constructor(url:string){
         this.url=url;

    }
    muestra_url():void{
        console.log(this.url);
    }

    async obten_datos(){
        
            try{
            
             const data = await fetch(this.url);
             const chiste=await data.json();
            return chiste;

             }catch(er){
                console.log("Chuck no está de humor... " , er);
            } 

    }


}
