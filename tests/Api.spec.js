import {test,expect} from "@playwright/test"

test('API test',async({request})=>{


   const req1= await request.get("https://restful-booker.herokuapp.com/booking")
    console.log(await req1.json());
    

})