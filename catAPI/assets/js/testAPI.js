const BASE_URL = "https://api.thecatapi.com/v1/images/search/";
const CAT_BTN = document.getElementById("change-cat");
const img = document.getElementsByTagName("img")[0];

const GET_CATS = async () => {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then((data)=>{
        let catUrl = data[0].url;
        img.setAttribute('src',`${catUrl}`);
    })
    .catch(e=>console.log(e.message))
};

GET_CATS();

CAT_BTN.addEventListener('click',GET_CATS);