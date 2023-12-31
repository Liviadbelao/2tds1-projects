//categorias que possuem vários produtos 
//cada produto é pertencente a uma categoria 

class Category{
    constructor(id, name){
      this.id = id;
      this.name = name;
      this.products = [];
    }
}

class Product{
    constructor(id, name, price, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService{
    constructor(){
        this.categories = [];
        this.nextCategoryId = 1;
    }
// CRUD => create, read, update, delete
// CRUD => CREATE
    addCategory(name){
     const id = this.nextCategoryId;
     this.nextCategoryId++;

     const category = new Category(id, name);
     this.categories.push(category);
    }

    //R=> read
    getCategoryById(id){
        return this.categories.find((category) => category.id == id);
    }
    //u => update
    updateCategory(id, name){
        const category = this.getCategoryById(id);
        category.name = name;
    }
    //d=> delete
    deleteCategory(id){
        const category = this.getCategoryById(id);
        const index = this.categories.indexOf(category);

        this.categories.splice(index, 1);
    }
}

class ProductService{
    constructor(){
        this.products = [];
        this.nextProductId  = 1;
    }

    addProduct(name, price, category){
        const id = this.nextProductId;
        this.nextProductId++;

        const product = new Product(id, name, price, category);
        this.products.push(product);
        category.products.push(product);
    }
//r - read
    getProductById(id){
     return this.products.find((product) => product.id == id);
    }
//update
    updateProduct(id, name, price, category){
        const product = this.getProductById(id);
        product.name = name;
        product.price = price;
        product.category = category;
    }
    //d => delete product
    deleteProduct(id){
        const product = this.getProductById(id);
        const index = this.products.indexOf(product);

        this.products.splice(index, 1);
    }
}

const categoriesList = new CategoryService();
const productsList = new ProductService();

function createCategories(){
    const categoryName = document.getElementById('categoryNameInput').value;
    categoriesList.addCategory(categoryName);
    clearFields();
    displayCategory();
    console.log(categoriesList.categories);
    console.log("categorias criadas")
}

function createProduct(){
    const productName = "choco";
    const productPrice = 0.5;
    const productCategory = categoriesList.categories[0];
   
    productsList.addProduct(productName, productPrice, productCategory);
  
    console.log(productsList.products);

}

function findCategory(id){
   const category = categoriesList.getCategoryById(id);
   console.log(category.name);
}

function editCategory(id, name){
    categoriesList.updateCategory(id, name);
    console.log(categoriesList.categories);
}

function removeCategory(id){
    categoriesList.deleteCategory(id);

    console.log(categoriesList.categories);
}

//funções product 
function findProduct(id){
    const product = productsList.getProductById(id);

    console.log(product.name);
}
function editProduct(id, name, price, category){
    productsList.updateProduct(id, name, price, category);
    console.log(productsList.products)
}
function displayCategory(){
    let msg = '';
    categoriesList.categories.forEach((category) =>{
        msg += `<li>${category.name}</li>`;
    })
    document.getElementById('categoriesList').innerHTML = msg;
}
function clearFields(){
    document.getElementById("categoryNameInput").value = '';
}
