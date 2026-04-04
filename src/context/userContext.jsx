import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

 const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    oldPrice: 3499,
    price: 2499,
    discount: "28%",
    description: "Over-ear wireless headphones with noise cancellation and 30-hour battery life.",
    rating: 4.5,
    imageURL: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 2,
    title: "Smart Watch",
    oldPrice: 5999,
    price: 3999,
    discount: "33%",
    description: "Fitness-focused smart watch with heart-rate tracking and AMOLED display.",
    rating: 4.2,
    imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    oldPrice: 2499,
    price: 1799,
    discount: "28%",
    description: "Portable Bluetooth speaker with deep bass and waterproof design.",
    rating: 4.3,
    imageURL: "https://m.media-amazon.com/images/I/81By3BIw22L.jpg"
  },
  {
    id: 4,
    title: "Laptop Backpack",
    oldPrice: 1999,
    price: 1299,
    discount: "35%",
    description: "Durable laptop backpack with padded compartments and USB charging port.",
    rating: 4.1,
    imageURL: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 5,
    title: "Mechanical Keyboard",
    oldPrice: 5999,
    price: 4599,
    discount: "23%",
    description: "RGB mechanical keyboard with blue switches and aluminum body.",
    rating: 4.6,
    imageURL: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 6,
    title: "Gaming Mouse",
    oldPrice: 2299,
    price: 1599,
    discount: "30%",
    description: "High-precision gaming mouse with adjustable DPI and ergonomic grip.",
    rating: 4.4,
    imageURL: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 7,
    title: "Noise Cancelling Earbuds",
    oldPrice: 4499,
    price: 2999,
    discount: "33%",
    description: "True wireless earbuds with active noise cancellation and fast charging.",
    rating: 4.3,
    imageURL: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 8,
    title: "4K Action Camera",
    oldPrice: 9999,
    price: 7499,
    discount: "25%",
    description: "Compact action camera with 4K recording and image stabilization.",
    rating: 4.2,
    imageURL: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMoJ-jko0vQi0bSiqu3V1j9pbmRM7Uo8q5skmSWtl6UesFt3Nb12G7bYeljPZfMuFlv8_klJTg-yfh-1tRr5Garuq2xwTgUdHBaXwrgWHDBizJLypLrnZV34Q"
  },
  {
    id: 9,
    title: "Power Bank 20000mAh",
    oldPrice: 2999,
    price: 1999,
    discount: "33%",
    description: "High-capacity power bank with fast charging and dual USB output.",
    rating: 4.5,
    imageURL: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1QRE8bIccbMYXkS_PhCfy8J0K4qztxAvO8z44699QI9ZaSQIGPS6Bm6fGaqrZ0w4aY3PIgTbXbxqbkYHbewfL_HUeVByo2g"
  },
  {
    id: 10,
    title: "USB-C Hub",
    oldPrice: 3299,
    price: 2299,
    discount: "30%",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader.",
    rating: 4.1,
    imageURL: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTPICI7_JHhTyNw9vfd4-lCRbxOpgBJCQFMTjcyCI3ekj6wqD1r3EnzzgXZDgSuHVpKTD-pNpvL_5nwFu8eM8J7a0nDV0fOgF2G5EAsa0FK2gb5AmjFvrMGlA"
  },
  {
    id: 11,
    title: "LED Desk Lamp",
    oldPrice: 2199,
    price: 1399,
    discount: "36%",
    description: "Adjustable LED desk lamp with touch controls and eye-care lighting.",
    rating: 4.0,
    imageURL: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 12,
    title: "Wireless Charger",
    oldPrice: 1799,
    price: 1199,
    discount: "33%",
    description: "Fast wireless charging pad compatible with Android and iOS devices.",
    rating: 4.2,
    imageURL: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 13,
    title: "Smart Home Plug",
    oldPrice: 1499,
    price: 999,
    discount: "33%",
    description: "Wi-Fi smart plug with app control and voice assistant support.",
    rating: 4.1,
    imageURL: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 14,
    title: "External SSD 1TB",
    oldPrice: 11999,
    price: 8999,
    discount: "25%",
    description: "High-speed external SSD with USB 3.2 and shock-resistant design.",
    rating: 4.7,
    imageURL: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 15,
    title: "Webcam Full HD",
    oldPrice: 3999,
    price: 2799,
    discount: "30%",
    description: "1080p webcam with noise-reduction mic for streaming and meetings.",
    rating: 4.3,
    imageURL: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR39U2qSEU7hE8s5hj57XE7zsLkC5wVUfHeqatVglTBi-EyWsZ5CCs3JACE7ocLuzfFDAMT3WSFXd4PEUPNlZFngTWyDBLQ"
  },
  {
    id: 16,
    title: "Ergonomic Office Chair",
    oldPrice: 16999,
    price: 12999,
    discount: "23%",
    description: "Adjustable ergonomic chair with lumbar support and breathable mesh.",
    rating: 4.4,
    imageURL: "https://thesleepcompany.in/cdn/shop/files/stylux_3.0_desktop_Grey_black_1.webp?v=1758118260&width=1400"
  },
  {
    id: 17,
    title: "Tablet Stand",
    oldPrice: 1299,
    price: 799,
    discount: "38%",
    description: "Foldable aluminum tablet stand with adjustable viewing angles.",
    rating: 4.0,
    imageURL: "https://m.media-amazon.com/images/I/51hdhTrcu1L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 18,
    title: "Smart LED Strip",
    oldPrice: 2699,
    price: 1899,
    discount: "30%",
    description: "RGB smart LED strip with app control and music sync mode.",
    rating: 4.2,
    imageURL: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 19,
    title: "Portable Monitor",
    oldPrice: 14999,
    price: 10999,
    discount: "27%",
    description: "15.6-inch portable monitor with Full HD resolution and USB-C input.",
    rating: 4.5,
    imageURL: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 20,
    title: "Wireless Keyboard",
    oldPrice: 2799,
    price: 1999,
    discount: "29%",
    description: "Slim wireless keyboard with long battery life and silent keys.",
    rating: 4.1,
    imageURL: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&h=300"
  }
];

  function authUser(data) {
    const newUser = {
      username: data.username,
      password: data.password,
    };
    localStorage.setItem("authUser", JSON.stringify(newUser));
  }

  return (
    <UserContext.Provider value={{ setUsers, users, authUser, products }}>
      {children}
    </UserContext.Provider>
  );
};

export function useProtected() {
  return useContext(UserContext);
}
