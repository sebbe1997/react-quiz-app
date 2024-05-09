// follow this pattern when adding, category or you want to change the type of question.
//https://opentdb.com/api.php?amount=10&type=multiple
//https://opentdb.com/api.php?amount=3
export class QuestionService{

    constructor(Url){
        this.Url = Url;
    }
    // private helper function for use inside the class.
    async #_myfetch(Url = "", method = null, body = null) {
       try{
            method ??= "GET"
            let response = await fetch(Url); 
            if(response.ok){
                console.log("Request was succesfully sent.");
                let data = response.json();
                return data;
            }else{
                console.log("transmission error!");
            }
       }
       catch(e){
        console.log(e);
       }
    }

    async #_getQuestionsAsync(requrl,amount = 4,type = "multiple",category = null){
        let url = `${requrl}?amount=${amount}&type=${type}`
        if(category !== null){
            url += `&category=${category}`
        }
        let data = await this.#_myfetch(url,"GET",null); 
        return data;
    }
    async getQuestionCategories(){
        const categoryUrl = "https://opentdb.com/api_category.php";
       return await this.#_myfetch(categoryUrl); 
    }
    // async #_readItemsAsync(reqUrl,pageNr,flat,filter, pageSize) {
    //     let url = `${reqUrl}?flat=${flat}&pageNr=${pageNr}&pageSize=${pageSize}`;;
        
    //     if(filter != null){
    //         url += `&filter=${filter}`;
    //     }

    //     let res =  await this.#_myfetch(url,"GET",null);
    //     return res;
    // }

   async getQuestionsAsync(amount,type = "multiple",category = null){
    return this.#_getQuestionsAsync(this.Url,amount,type,category);
   }  
}