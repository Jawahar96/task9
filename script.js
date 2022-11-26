//
let mail1=document.createElement('mail')
// mail1.innerHTML=`button type ="button" check id="text" onclick="sendmail" value=""`
document.body.append(mail1);

async function sendmail(){
    
  let  xmlpromise=await fetch('https://api.mailcheck.ai/domain/google.com')
  xmlpromise.innerHTML="Mail Request"
    console.log(xmlpromise);
    document.body.append(xmlpromise);
 }

 sendmail();


async function requestmail(){
 let  result= await fetch('https://api.mailcheck.ai/domain/google.com');
 console.log(result);
 if(result.status==200){
    let data = JSON.stringify(result.response)
    console.log(data)
    result.innerHTML="Mail send"
    
}else{
   result.innerHTML="mail not send";
}}
requestmail();

document.getElementsByClassName('mail').innerHTML=`No of mail sendrequest in domain :${google.com}`;
 
//  var res=then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
// console.log(res); 


