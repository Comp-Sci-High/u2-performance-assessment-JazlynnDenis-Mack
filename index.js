require("prompt-sync")

console.log("Welcome to DOGGYMATCH Chatbox!")
requesturl= "https://dogapi.dog/docs/api-v2?=breeds"
requestur2= "https://dog.ceo/api/breed/images"
requestur3= "https://platform.openai.com/v1/chat/completions"

    async function intial (requesturl){
    const response= await fetch(requesturl)
    const data= await response.json()
    return data
    }

    async function intial2 (requesturl2){
        const response= await fetch(requesturl2)
        const data= await response.json()
        return data
        }

    async function intial3 (requesturl3){
            const response= await fetch(requesturl3)
            const data= await response.json()
            return data
            }

let greetings=["Okay!","Alrighty!","Noted!","I'll keep that in mind!","Okey-Dokey!","Sure thing!","*nods*"]
let oo = greetings.random 

console.log("My programming requires me to ask questions to match you to your perfect dog. ")


let prompt= prompt("Can i ask you a few questions?")
    if(prompt === "yes"){
      console.log(oo)  
    } if(prompt === "Yes"){
        console.log(oo)  
    } if(prompt === "No"){
        console.log(oo)  
    }else if (prompt === "no"){
      console.log(oo)
    }else{
      console.log("Im not sure how to answer. Please answer Yes or No")
    }
    
    while(prompt === "yes"|| "Yes") {
     let prompt2 = prompt("How much space and you supply a dog? Choices: Little, decently large, large")
        if(prompt2==="Little"|| "little"){
            console.log(oo)
        }else if("decently large"|| "Decently large"){
            console.log(oo)
        }else if("large"||"Large"){
            console.log(oo)
        }
     let prompt3= prompt("How active are you? Choices : not very active, active, very active")
        if(prompt3==="not very active"||"Not very active"){
            console.log(oo)
        }else if(prompt3 === "active"||"Active"){
            console.log(oo)
        }else if(prompt3 === "very active"||"Very active"){
            console.log(oo)
        }else{
            console.log("I'm not sure how to help")
        }
     let prompt4= prompt("What activities do you do regularly? Choices: swimming,running, walking" )
        if(prompt4==="swimming"||"Swimming"){
            console.log(oo)
        }else if(prompt4==="running"||"Running"){
            console.log(oo)
        }else if(prompt==="walking"||"Walking"){
            console.log(oo)
        }else{
            console.log("I'm not sure how to help")
        }
     let prompt5= prompt("Are you willing to train a dog?")
        if(prompt5==="Yes"||"yes"){
            console.log(oo)
        }else if(prompt5==="no"||"No"){
            console.log(oo)
        }else{
            console.log("I'm not sure how to help. Please choose one of the given choices.")
        }
    
    }


        


