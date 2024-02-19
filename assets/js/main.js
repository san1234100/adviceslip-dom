// const person=new Promise((resolve,reject)=>{
//     const name="";
//    setTimeout(()=>{
//     if(name!==''&&name!==null&&name.length>3){
//         resolve(name);
//      }else{
//         reject("Enter valid name");
//      }
//    },3000)
// })
// // person.then((name)=>console.log(name))
// // .catch((err)=>console.log("Error ",err))
// // .finally(()=>console.log("Welcome to our program"))

// const getResolution=async()=>{
//     //await don't allow the code below this line until promise return the value

//  try{
//     const result=await person
//     console.log(result);
//  } catch(err){
//     console.log('Error ',err);
//  }

//  console.log("Welcome to our program");
// }
// getResolution()
// const blockQuoteEl = document.querySelector("blockquote p");
// const xhr = new XMLHttpRequest();
// xhr.responseType = "json";
// xhr.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     // const adviceObj=JSON.parse(xhr.responseText);

//     const adviceObj = xhr.response;

//     blockQuoteEl.innerText = adviceObj.slip.advice;
//   }
// };

// xhr.open("GET", "https://api.adviceslip.com/advice");
// xhr.send();

// const result = fetch("https://api.adviceslip.com/advice");
// result.then((res) => res.json())
// .then((val) => val.slip.advice);
const blockQuoteEl = document.querySelector("blockquote p");
async function getAdvices(){
    try {
        const result = await fetch("https://api.adviceslip.com/advice");
        const json = await result.json();
        blockQuoteEl.innerText = json.slip.advice;
      } catch (err) {
        console.log(err);
      }
      
}
// getAdvices() 

const adviceBtn=document.getElementById('adviceBtn');
adviceBtn.addEventListener("click",getAdvices)