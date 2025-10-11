const products = [
    {
        id: 1,
        name: 'Organic Bananas',
        price: 1.25,
        unit: 'per lb',
        brand: 'FreshMart',
        category: 'Produce',
        rating: 4.5,
        expiryDate: '2024-07-25',
        image: 'https://www.bbassets.com/media/uploads/p/l/10000027_32-fresho-banana-robusta.jpg',
        available: true,
        description: 'A bunch of fresh, organic bananas.',
        specs: ['Organic', 'Rich in Potassium'],
        reviews: [],
        colors: ['Yellow'],
        stock: 150
    },
    {
        id: 2,
        name: 'Tomatoes',
        price: 2.50,
        unit: 'per lb',
        brand: 'VineRipe',
        category: 'Produce',
        rating: 4.7,
        expiryDate: '2024-07-28',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgXWo_1yXnga6rwrKuuEX3_Ol2mE20cHjPA&s',
        available: true,
        description: 'Fresh, red tomatoes, sold by the pound.',
        specs: ['Vine-ripened', 'Rich in Lycopene'],
        reviews: [],
        colors: ['Red'],
        stock: 120
    },
    {
        id: 3,
        name: 'Green Bell Pepper',
        price: 0.99,
        unit: 'each',
        brand: 'FreshMart',
        category: 'Produce',
        rating: 4.6,
        expiryDate: '2024-08-01',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAww8aJh9Vvfy5Zmx96UeKi20C0YDdPbxj6Q&s',
        available: true,
        description: 'Crisp and fresh green bell peppers.',
        specs: ['Crunchy', 'High in Vitamin C'],
        reviews: [],
        colors: ['Green'],
        stock: 200
    },
    {
        id: 4,
        name: 'Whole Chicken',
        price: 7.99,
        unit: 'each',
        brand: 'FarmFresh',
        category: 'Meat',
        rating: 4.8,
        expiryDate: '2024-07-22',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2U4BFwVFIUWLKvgv-Kk7qFtwtSML23tkolw&s',
        available: true,
        description: 'A whole chicken, ready for roasting.',
        specs: ['Cage-free', 'No antibiotics'],
        reviews: [],
        colors: [],
        stock: 30
    },
    {
        id: 5,
        name: 'Orange Juice',
        price: 3.49,
        unit: '59 fl oz',
        brand: 'Tropicana',
        category: 'Beverages',
        rating: 4.9,
        expiryDate: '2024-09-15',
        image: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrOcOa45Yvey092rRurVneljlTa4DiM9xyQ&s',
        available: true,
        description: 'Freshly squeezed orange juice.',
        specs: ['100% Juice', 'Not from concentrate'],
        reviews: [],
        colors: [],
        stock: 80
    },
    {
        id: 6,
        name: 'Broccoli',
        price: 1.99,
        unit: 'per lb',
        brand: 'GreenGiant',
        category: 'Produce',
        rating: 4.7,
        expiryDate: '2024-08-05',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GWSc8wjGBKY8w37W8DKTp4XDyhq5w50_4g&s',
        available: true,
        description: 'Fresh broccoli crowns.',
        specs: ['Rich in Fiber', 'Excellent source of Vitamin K'],
        reviews: [],
        colors: ['Green'],
        stock: 100
    },
    {
        id: 7,
        name: 'Carrots',
        price: 1.49,
        unit: 'per bunch',
        brand: 'FreshMart',
        category: 'Produce',
        rating: 4.5,
        expiryDate: '2024-08-10',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQpBVMlRIMOwaCMZL26cGwN1SiEJJaLlF8A&s',
        available: true,
        description: 'A bunch of fresh carrots.',
        specs: ['Organic', 'Rich in Vitamin A'],
        reviews: [],
        colors: ['Orange'],
        stock: 180
    },
    {
        id: 8,
        name: 'Fruit Juice',
        price: 4.50,
        unit: '64 fl oz',
        brand: 'JuicyJuice',
        category: 'Beverages',
        rating: 4.8,
        expiryDate: '2024-10-01',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxxoYS_boXUO1H3TdAocL1pwDpxPx4yfJYQ&s',
        available: true,
        description: 'A refreshing blend of various fruit juices.',
        specs: ['All Natural', 'No added sugar'],
        reviews: [],
        colors: [],
        stock: 70
    },
    {
        id: 9,
        name: 'Onions',
        price: 1.15,
        unit: 'per lb',
        brand: 'FreshMart',
        category: 'Produce',
        rating: 4.4,
        expiryDate: '2024-08-20',
        image: '	https://cdn.britannica.com/48/82548-050-A61BF320/Onion-bulbs-shapes-variety-colours-sizes.jpg',
        available: true,
        description: 'Yellow onions, sold by the pound.',
        specs: ['Versatile for cooking'],
        reviews: [],
        colors: ['Yellow'],
        stock: 250
    },
    {
        id: 10,
        name: 'Apples',
        price: 2.99,
        unit: 'per lb',
        brand: 'Washington',
        category: 'Produce',
        rating: 4.6,
        expiryDate: '2024-08-18',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTJaymSaQ5avhSISryJGGyLPF_euPJ4qtog&s',
        available: true,
        description: 'Crisp red apples, sold by the pound.',
        specs: ['Gala', 'Sweet and juicy'],
        reviews: [],
        colors: ['Red'],
        stock: 130
    },
    {
        id: 11,
        name: 'Butter',
        price: 2.75,
        unit: '1/2 lb',
        brand: 'Land O Lakes',
        category: 'Dairy',
        rating: 4.9,
        expiryDate: '2024-09-01',
        image: 'https://www.shutterstock.com/image-photo/fresh-butter-slices-on-wooden-600nw-2568593227.jpg',
        available: true,
        description: 'A stick of unsalted butter.',
        specs: ['Unsalted', 'Grade AA'],
        reviews: [],
        colors: [],
        stock: 90
    },
    {
        id: 12,
        name: 'Eggs',
        price: 2.25,
        unit: 'dozen',
        brand: 'HappyFarms',
        category: 'Dairy',
        rating: 4.8,
        expiryDate: '2024-08-12',
        image: '	https://freshpik.co.in/images/product-images/70722.jpg',
        available: true,
        description: 'A dozen large, white eggs.',
        specs: ['Grade A', 'Cage-free'],
        reviews: [],
        colors: [],
        stock: 100
    }
];

const categories = ['All', 'Produce', 'Meat', 'Beverages', 'Dairy'];

const promotions = [
    {
        id: 1,
        title: 'Fresh Deals',
        discount: '15% OFF',
        code: 'FRESH15',
        validUntil: '2025-02-15'
    },
    {
        id: 2,
        title: 'Welcome Offer',
        discount: '₹150 OFF',
        code: 'WELCOME150',
        validUntil: '2025-03-10'
    },
    {
        id: 3,
        title: 'Weekend Special',
        discount: '25% OFF on Dairy',
        code: 'DAIRY25',
        validUntil: '2025-02-01'
    }
];

// Notification data
const notifications = [
    {
        id: 1,
        type: 'order',
        title: 'Order Delivered',
        message: 'Your order #1234 has been delivered successfully',
        timestamp: new Date(2025, 0, 14, 8, 30).getTime(),
        isRead: false,
        icon: 'fa-box-check',
        color: 'green'
    },
    {
        id: 2,
        type: 'promo',
        title: 'Special Offer',
        message: 'Get 50% off on all winter collection items!',
        timestamp: new Date(2025, 0, 14, 7, 15).getTime(),
        isRead: false,
        icon: 'fa-tag',
        color: 'orange'
    },
    {
        id: 3,
        type: 'news',
        title: 'New Collection Arrived',
        message: 'Check out our latest spring collection',
        timestamp: new Date(2025, 0, 13, 18, 45).getTime(),
        isRead: true,
        icon: 'fa-tshirt',
        color: 'blue'
    },
    {
        id: 4,
        type: 'system',
        title: 'Profile Updated',
        message: 'Your profile information has been updated successfully',
        timestamp: new Date(2025, 0, 13, 15, 20).getTime(),
        isRead: true,
        icon: 'fa-user-check',
        color: 'purple'
    }
];

// Trending tags data
const trendingTags = [
    { id: 1, name: 'Summer Collection', searches: 15420 },
    { id: 2, name: 'Casual Wear', searches: 12350 },
    { id: 3, name: 'Sport Shoes', searches: 11200 },
    { id: 4, name: 'Designer Bags', searches: 9870 },
    { id: 5, name: 'Smart Watches', searches: 8940 },
    { id: 6, name: 'Formal Wear', searches: 7650 },
    { id: 7, name: 'Accessories', searches: 6780 },
    { id: 8, name: 'Winter Wear', searches: 5430 },
    { id: 9, name: 'Ethnic Wear', searches: 4980 },
    { id: 10, name: 'Sunglasses', searches: 4320 },
    { id: 11, name: 'Sneakers', searches: 3890 },
    { id: 12, name: 'Denim', searches: 3450 },
    { id: 13, name: 'Party Wear', searches: 3210 },
    { id: 14, name: 'Fitness Gear', searches: 2980 },
    { id: 15, name: 'Home Decor', searches: 2760 }
];

localStorage.setItem('products', JSON.stringify(products));