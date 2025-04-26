// src/pages/Home.jsx

import React, { useState } from 'react';

const shoes = [
    { id: 1, name: 'Nike Air Max', description: 'Comfortable and stylish sneakers', price: 'Rp120.000', image: 'https://picsum.photos/300/300?random=1' },
    { id: 2, name: 'Adidas Ultraboost', description: 'High-performance running shoes', price: 'Rp150.000', image: 'https://picsum.photos/300/300?random=2' },
    { id: 3, name: 'Puma RS-X', description: 'Sporty design with cushioning', price: 'Rp130.000', image: 'https://picsum.photos/300/300?random=3' },
    { id: 4, name: 'Reebok Classic', description: 'Retro classic sneakers', price: 'Rp100.000', image: 'https://picsum.photos/300/300?random=4' },
    { id: 5, name: 'Puma RS-X', description: 'Sporty design with cushioning', price: 'Rp130.000', image: 'https://picsum.photos/300/300?random=5' },
    { id: 6, name: 'Reebok Classic', description: 'Retro classic sneakers', price: 'Rp100.000', image: 'https://picsum.photos/300/300?random=6' },
    { id: 7, name: 'Nike Air Zoom', description: 'Perfect for running and everyday wear', price: 'Rp180.000', image: 'https://picsum.photos/300/300?random=7' },
    { id: 8, name: 'Adidas NMD', description: 'Stylish streetwear sneakers', price: 'Rp170.000', image: 'https://picsum.photos/300/300?random=8' },
    { id: 9, name: 'New Balance 990', description: 'Premium comfort and support', price: 'Rp200.000', image: 'https://picsum.photos/300/300?random=9' },
    { id: 10, name: 'Nike React Element', description: 'Lightweight and durable sneakers', price: 'Rp160.000', image: 'https://picsum.photos/300/300?random=10' },
    { id: 11, name: 'Asics Gel Lyte', description: 'Legendary comfort and style', price: 'Rp140.000', image: 'https://picsum.photos/300/300?random=11' },
    { id: 12, name: 'Converse Chuck Taylor', description: 'Classic canvas sneakers', price: 'Rp120.000', image: 'https://picsum.photos/300/300?random=12' },
    { id: 13, name: 'Vans Old Skool', description: 'Skate-inspired classic sneakers', price: 'Rp110.000', image: 'https://picsum.photos/300/300?random=13' },
    { id: 14, name: 'Jordan 1 Retro', description: 'Iconic basketball sneakers', price: 'Rp250.000', image: 'https://picsum.photos/300/300?random=14' },
    { id: 15, name: 'Nike Cortez', description: 'Classic running shoes', price: 'Rp130.000', image: 'https://picsum.photos/300/300?random=15' },
    { id: 16, name: 'Adidas Yeezy Boost', description: 'High-fashion sneakers', price: 'Rp500.000', image: 'https://picsum.photos/300/300?random=16' },
    { id: 17, name: 'Puma Suede', description: 'Classic suede sneakers', price: 'Rp140.000', image: 'https://picsum.photos/300/300?random=17' },
    { id: 18, name: 'Nike SB Dunk', description: 'Skateboarding shoes with style', price: 'Rp220.000', image: 'https://picsum.photos/300/300?random=18' },
    { id: 19, name: 'Reebok Nano', description: 'Great for training and fitness', price: 'Rp130.000', image: 'https://picsum.photos/300/300?random=19' },
    { id: 20, name: 'Adidas ZX Flux', description: 'Sporty and comfortable', price: 'Rp150.000', image: 'https://picsum.photos/300/300?random=20' },
    { id: 21, name: 'Under Armour HOVR', description: 'Great for running and sports', price: 'Rp180.000', image: 'https://picsum.photos/300/300?random=21' },
    { id: 22, name: 'Fila Disruptor', description: 'Chunky sneakers with style', price: 'Rp130.000', image: 'https://picsum.photos/300/300?random=22' },
    { id: 23, name: 'Reebok Classic Leather', description: 'Stylish and versatile', price: 'Rp120.000', image: 'https://picsum.photos/300/300?random=23' },
    { id: 24, name: 'Nike Blazer', description: 'Vintage-inspired basketball shoes', price: 'Rp160.000', image: 'https://picsum.photos/300/300?random=24' },
    { id: 25, name: 'Adidas Superstar', description: 'Iconic shell-toe sneakers', price: 'Rp140.000', image: 'https://picsum.photos/300/300?random=25' },
];

const Home = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (shoe, quantity) => {
        setCart((prevCart) => {
            const existingShoe = prevCart.find((item) => item.id === shoe.id);
            if (existingShoe) {
                return prevCart.map((item) =>
                    item.id === shoe.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prevCart, { ...shoe, quantity }];
        });
    };

    const handleBuyNow = (shoe, quantity) => {
        alert(`Buying ${quantity} of ${shoe.name}`);
    };

    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-2xl font-semibold mb-3">Featured</h1>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6">
                {shoes.map((shoe) => (
                    <a
                        key={shoe.id}
                        href={`/shoe/${shoe.id}`} // Link to individual shoe details page (update with your correct path)
                        className="rounded-lg overflow-hidden block"
                    >
                        {/* Image container */}
                        <div className="relative">
                            <img
                                src={shoe.image}
                                alt={shoe.name}
                                className="w-full aspect-square object-cover rounded-lg"
                            />

                            {/* Text at bottom of image */}
                            <div className="py-2">
                                <h2 className="text-md truncate">{shoe.name}</h2>
                                <p className="text-md font-bold">{shoe.price}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>

    );
};

export default Home;