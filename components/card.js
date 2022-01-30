const card = () => {
    const cardDiv = document.createAttribute("div");
    const innerCardDiv1 = document.createAttribute("div");
    const innerCardDiv2 = document.createAttribute("div");
    cardDiv.className = "card";
    innerCardDiv1.className = "card-inner1";
    innerCardDiv2.className = "card-inner2";
    const image = document.createElement("img");
    image.src = "https://i.imgur.com/n3cnYxU.png"
    image.style.height = "20px";
    image.style.width = "30px";
    innerCardDiv1.appendChild(image);
    const innerCardDiv2_div1 = document.createElement("div");
    const innerCardDiv2_div2 = document.createElement("div");
    const heading5 = document.createElement("h5");
    heading5.textContent = "sakline sk"
    innerCardDiv2_div1.appendChild(heading5);
    const likeDiv = document.createElement("div");
    likeDiv.className = "smallDivs";
    const commentDiv = document.createElement("div");
    commentDiv.className = "smallDivs";
    const watchDiv = document.createElement("div");
    watchDiv.className = "smallDivs";
    innerCardDiv2_div2.appendChild(likeDiv, commentDiv, watchDiv);
    innerCardDiv2.appendChild(innerCardDiv2_div1, innerCardDiv2_div2)

}
export default card;