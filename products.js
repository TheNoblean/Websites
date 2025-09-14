const products = [
    // Jewelries
    { id: 'gold-necklace', category: 'jewelries', name: 'Gold Necklace', description: 'Elegant 18k gold chain with pendant.', price: 50, colors: ['Gold', 'Rose Gold', 'White Gold'], image: 'images/necklace.jpg' },
    { id: 'diamond-earrings', category: 'jewelries', name: 'Diamond Earrings', description: 'Sparkling studs for any occasion.', price: 80, colors: ['Silver', 'Gold'], image: 'images/earrings.jpg' },
    { id: 'silver-bracelet', category: 'jewelries', name: 'Silver Bracelet', description: 'Delicate charm bracelet.', price: 30, colors: ['Silver', 'Black'], image: 'images/bracelet.jpg' },
    
    // Bags
    { id: 'slim-fit-jeans', category: 'wears', name: 'Slim Fit Jeans', description: 'Comfortable denim for everyday wear.', price: 40, colors: ['Blue', 'Black', 'Gray'], image: 'images/jeans.jpg' },
    { id: 'leather-jacket', category: 'wears', name: 'Leather Jacket', description: 'Stylish and durable outerwear.', price: 70, colors: ['Black', 'Brown'], image: 'images/jacket.jpg' },
    { id: 'cotton-shirt', category: 'wears', name: 'Cotton Shirt', description: 'Breathable button-up shirt.', price: 30, colors: ['White', 'Blue', 'Red'], image: 'images/shirt.jpg' },
    
    // Shoes
    { id: 'long-dress', category: 'modest-wears', name: 'Long Dress', description: 'Elegant floor-length modest dress.', price: 60, colors: ['Black', 'Navy', 'Green'], image: 'images/dress.jpg' },
    { id: 'silk-hijab', category: 'modest-wears', name: 'Silk Hijab', description: 'Soft and stylish headscarf.', price: 20, colors: ['White', 'Black', 'Pink'], image: 'images/hijab.jpg' },
    { id: 'abaya', category: 'modest-wears', name: 'Abaya', description: 'Flowing modest robe.', price: 50, colors: ['Black', 'Gray'], image: 'images/abaya.jpg' },
    
function getProductById(id) {
    return products.find(product => product.id === id);
}
