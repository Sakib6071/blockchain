# Getting Started with Create React App

This project was bootstrapped with [Live](https://product-tracker.netlify.app/).

## Solidity code

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Define a contract for tracking the movement of agricultural products
contract AgriculturalProductTracking {
    // Define a struct to represent an agricultural product
    struct AgriculturalProduct {
        uint id;                 // Unique ID of the product
        string name;             // Name of the product
        address producer;        // Address of the producer
        string PSellPrice;       // Producer's selling price
        address processor;       // Address of the processor
        string PrSellPrice;      // Processor's selling price
        address transporter;     // Address of the transporter
        string TSellPrice;       // Transporter Selling Price
        address distributor;     // Address of the distributor
        string DsSellPrice;      // Distributor's selling price
        address retailer;        // Address of the retailer
        string RSellPrice;       // Retailer's selling price
        address consumer;        // Address of the consumer
        uint timestamp;          // Timestamp of the transaction
        string location;         // Location of the product
        string status;           // Status of the product
    }

    // Define a mapping to store the agricultural products
    mapping(uint => AgriculturalProduct) public products;

    // Define a function to add a new agricultural product to the mapping
    function addProduct(uint id, string memory name, address producer, string memory PSellPrice) public {
        require(products[id].id == 0, "Product with this ID already exists");
        AgriculturalProduct memory newProduct = AgriculturalProduct(id, name, producer, PSellPrice, address(0), "", address(0), "", address(0), "", address(0), "", address(0), block.timestamp, "", "");
        products[id] = newProduct;
    }

    // Define a function to update the processor of an agricultural product
    function updateProcessor(uint id, address processor, string memory PrSellPrice) public {
        require(products[id].id != 0, "Product with this ID does not exist");
        AgriculturalProduct storage product = products[id];
        product.processor = processor;
        product.PrSellPrice = PrSellPrice;
        product.timestamp = block.timestamp;
    }

    // Define a function to update the transporter of an agricultural product
    function updateTransporter(uint id, address transporter, string memory TSellPrice) public {
        require(products[id].id != 0, "Product with this ID does not exist");
        AgriculturalProduct storage product = products[id];
        product.transporter = transporter;
        product.TSellPrice = TSellPrice;
        product.timestamp = block.timestamp;
    }

    // Define a function to update the distributor of an agricultural product
    function updateDistributor(uint id, address distributor, string memory DsSellPrice) public {
        require(products[id].id != 0, "Product with this ID does not exist");
        AgriculturalProduct storage product = products[id];
        product.distributor = distributor;
        product.DsSellPrice = DsSellPrice;
        product.timestamp = block.timestamp;
    }

    // Define a function to update the retailer of an agricultural product
    function updateRetailer(uint id, address retailer, string memory RSellPrice) public {
        require(products[id].id != 0, "Product with this ID does not exist");
        AgriculturalProduct storage product = products[id];
        product.retailer = retailer;
        product.RSellPrice = RSellPrice;
        product.timestamp = block.timestamp;
    }

    // Define a function to update the consumer of an agricultural product
    function updateConsumer(uint id, address consumer, address processor, address distributor, string memory location, string memory status) public {
    require(products[id].id != 0, "Product with this ID does not exist");
    AgriculturalProduct storage product = products[id];
    product.consumer = consumer;
    product.processor = processor;
    product.distributor = distributor;
    product.location = location;
    product.status = status;
    product.timestamp = block.timestamp;
}
}