const products = [
    // Jewelries
    { id: 'gold-necklace', category: 'jewelries', name: 'Gold Necklace', description: 'Elegant 18k gold chain with pendant.', price: 50, colors: ['Gold', 'Rose Gold', 'White Gold'], image: 'images/necklace.jpg' },
    { id: 'diamond-earrings', category: 'jewelries', name: 'Diamond Earrings', description: 'Sparkling studs for any occasion.', price: 80, colors: ['Silver', 'Gold'], image: 'images/earrings.jpg' },
    { id: 'silver-bracelet', category: 'jewelries', name: 'Silver Bracelet', description: 'Delicate charm bracelet.', price: 30, colors: ['Silver', 'Black'], image: 'images/bracelet.jpg' },
    
    // Wears
    { id: 'slim-fit-jeans', category: 'wears', name: 'Slim Fit Jeans', description: 'Comfortable denim for everyday wear.', price: 40, colors: ['Blue', 'Black', 'Gray'], image: 'images/jeans.jpg' },
    { id: 'leather-jacket', category: 'wears', name: 'Leather Jacket', description: 'Stylish and durable outerwear.', price: 70, colors: ['Black', 'Brown'], image: 'images/jacket.jpg' },
    { id: 'cotton-shirt', category: 'wears', name: 'Cotton Shirt', description: 'Breathable button-up shirt.', price: 30, colors: ['White', 'Blue', 'Red'], image: 'images/shirt.jpg' },
    
    // Modest Wears
    { id: 'long-dress', category: 'modest-wears', name: 'Long Dress', description: 'Elegant floor-length modest dress.', price: 60, colors: ['Black', 'Navy', 'Green'], image: 'images/dress.jpg' },
    { id: 'silk-hijab', category: 'modest-wears', name: 'Silk Hijab', description: 'Soft and stylish headscarf.', price: 20, colors: ['White', 'Black', 'Pink'], image: 'images/hijab.jpg' },
    { id: 'abaya', category: 'modest-wears', name: 'Abaya', description: 'Flowing modest robe.', price: 50, colors: ['Black', 'Gray'], image: 'images/abaya.jpg' },
    
    // Home & Kitchen
    { id: 'stainless-spoons', category: 'home-kitchen', name: 'Stainless Steel Spoons (Set of 6)', description: 'Durable everyday utensils.', price: 15, colors: ['Silver'], image: 'images/spoons.jpg' },
    { id: 'kitchen-knives', category: 'home-kitchen', name: 'Kitchen Knives Set', description: 'Sharp and ergonomic knives.', price: 40, colors: ['Black Handle', 'Wood Handle'], image: 'images/knives.jpg' },
    { id: 'non-stick-pot', category: 'home-kitchen', name: 'Non-Stick Pot', description: 'Easy-to-clean cooking pot.', price: 30, colors: ['Black', 'Red'], image: 'images/pot.jpg' }
];

function getProductById(id) {
    return products.find(product => product.id === id);
}
