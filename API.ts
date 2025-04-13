export class uso_api{

    url:string;
    constructor(url:string){
         this.url=url;

    }
   

    async obten_datos(config?:RequestInit) {
        
            try{
            
             const data = await fetch(this.url,config);
             const dataEnJson=await data.json();
             return dataEnJson;

             }catch(er){
                console.warn("No ha sido posible conectar con la API" , er);
            } 

    }


}
