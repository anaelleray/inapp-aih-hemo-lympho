import axios from "axios"

class DataServiceClass { 
    $data: any

    load(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            axios.get("./data.json")
                .then(response => {
                    this.$data = response.data
                    //Just add "resopnse" to delete error message
                    resolve(response.data)
                    
            }).catch(e => {
                console.log(e)
                reject(e)
            })
        })
    }
    
    getList(slug: string){
        // boucle
    }
    getSubList(slug: string){
        //boucle forEach List => get children if (results)
    }
}

export default new DataServiceClass()
