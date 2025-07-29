function getUser(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        reject(new Error("User Not Found"))
     },2000)   
});
}

function getUserAdresses(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Address Not Found"))
        
    },1000);
});
}

function getRestaurant(addresses){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(["A restaurant","B restaurant","C restaurant"]);
        }, 1000);
    });
}

getUser()
.then((user)=>getUserAdresses(user.username))
.then((addresses)=>getRestaurant(addresses))
.then((openRestaurants)=>document.body.append("Open Restaurants: ",openRestaurants.toString())
)
.catch((error)=>console.log(error))
