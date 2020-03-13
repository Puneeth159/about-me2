const side1 = document.querySelector("#side1");
const side2 = document.querySelector("#side2");
const side3 = document.querySelector("#side3");
const perimeter = document.querySelector("#perimeter");
const btn = document.querySelector("#btn");



const perim = (a,b,c)=>{

    if(a<0||b<0||c<0){

        return "Error";

    }
else{
    return a+b+c;
}
    

}
function trianglePerimeter() {
    let p = perim(parseInt(side1.value),parseInt(side2.value),parseInt(side3.value));
    // console.log(p);
   
    perimeter.innerHTML = `Perimeter: ${p}`;
   
}



// fetch information
const getImage = async () => {
    try {
        const response = await fetch('http://www.splashbase.co/api/v1/images/random')
        const obj = await response.json()
        console.log(`FETCHED. Response JSON ${obj}`)
        const img = obj.url || 'No Image for you.'
        return img
    } catch (error) { console.error(error) }
}
const updateWithImage = async (event) => {
    try {
        document.querySelector('#image').src = ''
        const answer = await getImage()
        document.querySelector('#image').src = answer
    } catch (error) { console.error(error) }
}
document.addEventListener('click', event => {
    if (event.target && event.target.id === 'buttonajax') { updateWithImage(event) }
    if (event.target && event.target.id === 'btn') { trianglePerimeter()}
})



 

