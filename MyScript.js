 // Tạo list manufacture 
 var manufactureList = { 
    "Apple" : [ 
        "Iphone 7" , " Iphone 8", "Iphone X"

    ],
    "SamSung" : [
        "Galaxy S5", "Galaxy 10"
    ],
    "Vsmart" : [
        "Vsmart s1" , "Vsmart s2", "Vsmart s3"

    ]
}

// tạo tag truyền  dữ liệu từ manufacture_name
var manufacturertag = document.getElementById('manufacture_name')
for (var key in manufactureList) 
{
    manufacturertag.innerHTML += `<option value='${key}'>${key}</option>`
} 
// truyền key từ list vào tag 


// tạo sụ kiên thay đổi dữ liệu
function changemanufacture()  // thay đổi category theo manufacturer
{
    key=manufacturertag.value 
    categoryList = manufactureList[key]  // lấy key từ manufacture đổ vào category
    console.log(categoryList)  // xuất category

    var categoryTag = document.getElementById('category_name') // truyền dữ liệu từ category vào tag

    categoryTag.innerHTML=""  // truyền xong tạo tag rỗng 

    if (categoryList !=null) {
        for(var i=0 ; i<categoryList.length; i++) // for chạy duyệt list
        {
            categoryTag.innerHTML += `<option value='${categoryList[i]}'>${categoryList[i]} </option>`

        }
    }
    
}

// tạo sự kiện updatetotlaprice
function updateTotalPrice() {  
    var price = document.getElementById('price').value
    var quantity = document.getElementById('quantity').value

    totalPrice = price * quantity

    document.getElementById("Total_price").value = totalPrice  
}


var productList= []
var count=0


// tạo sự kiện nút addProct
function addProduct ()  
{
    var index = document.getElementById('index').value
    var productName = document.getElementById('product_name').value
    var manufactureName= document.getElementById('manufacture_name').value
    var categoryName = document.getElementById('category_name').value
    var price = document.getElementById('price').value
    var quantity = document.getElementById('quantity').value
    var TotalPrice =document.getElementById('Total_price').value

    var product = {
        'productName': productName, 
        'manufactureName' : manufactureName,
        'categoryName' : categoryName,
        'price' :price,
        'quantity' :quantity,
        'TotalPrice' :TotalPrice
    }

    // tìm vị trí index để cập nhật lại dữ liệu
    if(index != '') {
        productList[index] = product
        showProduct()
        return;
    }
    
    productList.push(product)   // add product vào list


    document.getElementById('result').innerHTML += 
    `<tr> 
                <td>${++count}</td>
                <td>${productName}</td>
                <td>${manufactureName}</td>
                <td>${categoryName}</td>
                <td>${price}</td>
                <td>${quantity}</td>
                <td>${TotalPrice}</td>
                <td><button class="btn_edit" onclick="editProduct(${count-1})" > Edit </button></td>
                <td><button class="btn_delete" onclick="deleteProduct(${count-1})"> Delete </button></td>
            </tr>`

}

// tạo sự kiện xóa

function deleteProduct(index) 
{
    console.log(index)  // xuat ra vi tri index
    productList.splice(index,1) // xóa vị trí index đó và xóa đi 1 phần tử 
    showProduct()  // sau khi xóa phải show lại dữ liệu


}

// tạo sự kiện show dữ liệu

function showProduct() {
    document.getElementById('result').innerHTML='' // xóa dữ liệu 

    for (var i=0; i<productList.length; i++)
    {
        document.getElementById('result').innerHTML += 
    `<tr> 
                <td>${i+1}</td>
                <td>${productList[i].productName}</td>
                <td>${productList[i].manufactureName}</td>
                <td>${productList[i].categoryName}</td>
                <td>${productList[i].price}</td>
                <td>${productList[i].quantity}</td>
                <td>${productList[i].TotalPrice}</td>
                <td><button class="btn_edit" onclick="editProduct(${i})"> Edit </button></td>
                <td><button class="btn_delete" onclick="deleteProduct(${i})"> Delete </button></td>
            </tr>`
    }
} 

// tạo sự kiện sửa dữ liệu

function editProduct(index)
{
    var product = productList[index]
    console.log(product)
    // in ngược lại dữ liệu lên bảng 
    document.getElementById('index').value = index
    document.getElementById('product_name').value = product.productName 
    document.getElementById('manufacture_name').value = product.manufactureName
    changemanufacture() // update lại dữ liệu category name 
    document.getElementById('category_name').value= product.categoryName
    document.getElementById('price').value = product.price
    document.getElementById('quantity').value = product.quantity
    document.getElementById('Total_price').value=product.TotalPrice
   
}
