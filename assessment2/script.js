var sales_tax = 0;
var sales_total = 0;

let category=[]
function calculateTax() {
    var category = document.getElementById("select").value;
    var item = document.getElementById("item").value;
    var amount = parseFloat(document.getElementById("amount").value);
    // category["food"].push((name:"chocolate",price:200))
    if (category === "import" && item.includes("imported")) {
        var tax = amount * 0.05;
    } else if (category === "books" || category === "food" || category === "medical") {
        var tax = 0;
    } else if(category === "other" && !item.includes("imported")){
        var tax = amount * 0.10;
    }
    var total = tax + amount;
    var result =  item + " : " + total;
    const node = document.createElement("p");
    const textnode = document.createTextNode(result);
    node.appendChild(textnode);
    document.getElementById("result").appendChild(node);
    document.getElementById("item").value = " ";
    document.getElementById("amount").value = " ";
    calculateSales(tax, total);
}

function calculateSales(tax, total) {
    sales_tax = sales_tax + tax;
    sales_total = sales_total + total;
    sales_total = Math.ceil(sales_total);
    document.getElementById("sales").innerHTML = "Sales Tax : " + sales_tax;
    document.getElementById("total").innerHTML = "Total : " + sales_total;
}
document.getElementById("button").addEventListener(
"click",calculateTax);