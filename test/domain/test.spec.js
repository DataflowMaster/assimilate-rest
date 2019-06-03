import { expect } from "chai"
import showEmploye from ""

describe("index test", () => {
    it("should say Hello guys!", () => {
        const str = "Hello guys!";
        expect(str).to.equal("Hello guys!")
    })
})


// let dependency = {
//     server: ()=> {
//         return server;
//     },
//     repository: ()=>{
//         return callRepository();
//     },
//     render: ()=>{
//         return renderRequest()
//     }
// };
//
// const employees = showEmployees(dependency);
//
// ShowHotels();
