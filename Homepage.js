let products = document.getElementsByClassName("products");
console.log(products)
function zoomin()
{
    this.style.transform = "scale(1.25)";
}
function zoomout()
{
    this.style.transform = "scale(1)";
}
for(let i=0; i < products.length;i++)
    {
        products[i].addEventListener("mouseover", zoomin);
        products[i].addEventListener("mouseout", zoomout);
    }
