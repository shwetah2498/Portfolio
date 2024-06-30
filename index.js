function sendMail(){
    var params = {
        name: document.getElementById("name1").value ,
        email:document.getElementById("email1").value,
        message:document.getElementById("message1").value

    };
const serviceID = "service_a3ke1rs";
const templateID = "template_cl2stz4";

emailjs
.send(serviceID,templateID,params)
.then((res) =>{
        document.getElementById("name1").value = "";
        document.getElementById("email1").value = "";
        document.getElementById("message1").value = "";
        console.log(res);
        alert("Your message sent successfully");
    })
.catch((err) => console.log(err));
}


