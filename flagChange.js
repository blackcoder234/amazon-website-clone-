const image = document.querySelector(".flag")
const select = document.querySelector(".nav-language")




select.addEventListener('click',(evt)=>{
    changeFlag(evt.target);
})

function changeFlag(){
    const CountryName = prompt("Write your Language name")
    console.log(CountryName)
     image.src=`https://flagsapi.com/${CountryName}/flat/64.png`
}