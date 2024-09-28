var userform = document.querySelector(".userform");
var username = document.querySelector("#name");
var userdes = document.querySelector("#des");
var userprice = document.querySelector("#price");

var users=[];

userform.onsubmit=function(e){
    e.preventDefault();
    console.log(userprice.value);
var user ={
    name:username.value,
    des:userdes.value,
    price:userprice.value,
};

 users.push(user);
console.log(users);
  print();
}
  
function print(){
    var data='';
    for(var i =0;i<users.length;i++){
   data+=`
    <tr>
        <td>${users[i].name}</td>
        <td>${users[i].des}</td>
        <td>${users[i].price}</td>
    </tr>`;
    }
    document.querySelector("tbody").innerHTML=data;
    }