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
console.log("My programming requires me to ask questions to match you to your perfect dog. ")


let prompt= prompt("Can i ask you a few questions?")
    if(prompt === "yes"){
      console.log("Okay!")  
    } if(prompt === "Yes"){
        console.log("Okay!")  
    } if(prompt === "No"){
        console.log("That's alright!")  
    }else if (prompt === "no"){
      console.log("That's alright!")
    }else{
      console.log("Im not sure how to answer. Please answer Yes or No")
    }
    
    while(prompt === "yes"|| "Yes") {
     let prompt2 = prompt("How much space and you supply a dog? Choices: Little, decently large, large")
        if(prompt2==="Little"|| "little"){
            console.log("I'll keep that in mind!")
        }else if("decently large"|| "Decently large"){
            console.log("Okay!")
        }else if("large"||"Large"){
            console.log("Alright!")
        }
     let prompt3= prompt("How active are you? Choices : not very active, active, very active")
        if(prompt3==="not very active"||"Not very active"){
            console.log("Noted!")
        }
    }

        


