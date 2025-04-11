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
             const dataEnJson=await data.json();
            return dataEnJson;

             }catch(er){
                console.warn("No ha sido posible conectar con la API" , er);
            } 

    }


}
