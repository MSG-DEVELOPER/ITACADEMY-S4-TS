class uso_api{
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
            console.log(chiste.value);
            
             }catch(er){
                console.log("Chuck no está de humor... " , er);
            } 

    }


}

let apiChuck = new uso_api("https://api.chucknorris.io/jokes/random");
apiChuck.obten_datos();
