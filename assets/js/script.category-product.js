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
}

const categoriesList = new CategoryService();
const productsList = new ProductService();

function createCategories(){
    const categoryName = 'Candies';
    categoriesList.addCategory(categoryName);
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
