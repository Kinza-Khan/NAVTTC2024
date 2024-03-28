let myUsersData = [];
let reg = () =>{       
    let uName = document.querySelector("#userName").value;
    let uPass = document.querySelector("#userPassword").value;
    if(uName && uPass){
    myUsersData.push({name:uName,password:uPass});
    localStorage.setItem('aptechStudents',JSON.stringify(myUsersData));
    alert("user register successfully");
}
else{
    alert("please enter something");
}
}
// login
let usLogin = () =>{
    let uName = document.querySelector("#uName").value;
    let uPassword = document.querySelector("#uPassword").value;
    let strData = localStorage.getItem('aptechStudents');
    console.log(strData);
     let allParsedData = JSON.parse(localStorage.getItem('aptechStudents'));
    console.log(allParsedData);
    let matchedData = allParsedData.find(user=>{
        return user.name == uName && user.password == uPassword;
    })
    if(matchedData){
        document.querySelector("h2").innerHTML = "welcome "+ uName;
    }
    else{
        document.querySelector("h2").innerHTML = "Invalid user name or password";
    }
    
}