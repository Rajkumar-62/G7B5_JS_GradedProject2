localStorage.setItem('User',JSON.stringify({name:'Ujjawal'}))
localStorage.setItem('Number',100)
localStorage.setItem("City","Delhi")
let keys = Object.keys(localStorage);
for(let key of keys) 
{
    if(key=="User"|| key=="Number"|| key=="City")
    console.log(`${key}: ${localStorage.getItem(key)}`);
}