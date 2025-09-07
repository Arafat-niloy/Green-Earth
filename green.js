

// loadCategoryList
const loadCategoryList = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((list) => displayCatList(list.categories));
}

// displayCatList
const displayCatList = (cat) => {
    const catContainer = document.getElementById("cat_list")
    catContainer.innerHTML = ""

    cat.forEach(element => {
        const catDiv = document.createElement("li")
        catDiv.className="cursor-pointer hover:text-white hover:bg-green-700 text-xl p-2 rounded"
        catDiv.textContent = element.category_name

        catContainer.append(catDiv)
    });

}

// load all plant cards 
const loadAllPlantsCard = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((cardList) => displayCardList(cardList.plants));
}

//displayCardList
const displayCardList = (cards) => {
    const cardContainer = document.getElementById("card_container")

    cards.forEach(card => {
        const cardDiv = document.createElement("div")
        cardDiv.innerHTML =`
        <div class="card_div rounded-xl space-y-4 p-5 flex flex-col justify-between h-full shadow-lg bg-white">
            <img src="${card.image}" class="h-48 w-full object-cover rounded-lg ">
            <h3 class="font-semibold">${card.name}</h3>
            <p class=""> ${card.description} </p>
            <div class="flex justify-between items-center">
            <button class="rounded-2xl py-2 px-2 bg-[#DCFCE7] text-[#15803D]">${card.category}</button>
              <p>৳${card.price}</p>
            
            </div>  
            <button onclick= "addToCart('${card.name}', ${card.price})" class="btn btn-primary w-full rounded-4xl text-lg">Add to Cart</button>
        </div>
        `
        cardContainer.append(cardDiv)
    })
}


//addToCart function
let totalPrice = 0
const addToCart = (name, price) => {
    const cartContainer = document.getElementById("cart_List")
    // cartContainer.innerHTML=""

    const cartList = document.createElement("div")
    cartList.innerHTML=`
    <div class="bg-[#F0FDF4] rounded-xl flex justify-between text-xl p-4 mb-4 ">
                <div class="space-y-2">
                  <h3>${name}</h3>
                  <p>৳${price} x 1</p>
                </div>
                <p class="removeClick cursor-pointer">❌</p>
              </div>
    `
    //remove cartList
    cartList.querySelector(".removeClick").addEventListener("click", () =>{
        cartList.remove()
        totalPrice -= price
        document.getElementById("total_price").innerText = totalPrice

    })

    //add & sum totalPrice
    cartContainer.append(cartList)

    totalPrice += price
    document.getElementById("total_price").innerText = totalPrice
}





loadAllPlantsCard()
loadCategoryList()
