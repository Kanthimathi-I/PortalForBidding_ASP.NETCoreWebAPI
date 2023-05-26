export const urls = {
    // API urls using node.js
    // product urls
    addProductUrl: 'http://localhost:8080/farmerTable/add',
    getProductUrl: 'http://localhost:8080/farmerTable/get',
    updateProductUrl: 'http://localhost:8080/farmerTable/update',
    deleteProductUrl:'http://localhost:8080/farmerTable/delete/',

    // farmer urls 
    farmerProfileUrl: 'http://localhost:8080/farmerTable/farmerInfo',

    // consumer urls
    consumerAddUrl:'http://localhost:8080/consumerTable/add',
    consumerHistoryUrl:'http://localhost:8080/consumerTable/history',
    consumerProfileUrl: 'http://localhost:8080/consumerTable/consumerInfo',


    // API urls using ASP.NET Core Web API
    // consumer's portal ASP urls
    consumerProductShow_ASPUrl: "https://localhost:7052/api/Farmers",
    consumerBiddedHistory_ASPUrl: "https://localhost:7052/api/Consumers/join",
    consumerProfile_ASPUrl: "https://localhost:7052/api/Consumers/getConsumerProfile",

    // farmer's portal ASP urls
    farmerProductList_ASPUrl: "https://localhost:7052/api/Farmers",
    farmerBiddedProduct_ASPUrl: "https://localhost:7052/api/Consumers/join",
    farmerProfile_ASPUrl: "https://localhost:7052/api/Farmers/getFarmerProfile",

    // products
    // add new product by farmer
    addProductByFarmer_ASPUrl: "https://localhost:7052/api/Farmers/addNewFarmerInfo", 

    // update product by farmer
    updateProductByFarmer_ASPUrl: "https://localhost:7052/api/Farmers/updateFarmerInfoByID/", 

    // delete product by farmer
    deleteProductByFarmer_ASPUrl: "https://localhost:7052/api/Farmers/deleteFarmerInfoByID/",

}