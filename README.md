# 🛒 Ecommerce With Raw JavaScript

A fully functional e-commerce website built entirely with **vanilla JavaScript**, HTML, and CSS — without using any frameworks or libraries.

This project demonstrates how to build a scalable front-end application from scratch, handling product listing, categories, cart management, and product details.

## 🚀 Features

- 📂 **Modular JavaScript Structure** — Separate JS files for different functionalities (`cart.js`, `productDetails.js`, `categories.js`, etc.)
- 🏷 **Product Categories** — Browse products by categories
- 🛍 **Product Details Page** — View detailed information for each product
- 🛒 **Shopping Cart** — Add, remove, and update products in the cart
- 🔍 **Dynamic Product Rendering** — Products loaded dynamically without page reload
- 🔑 **Authentication Pages** — Login and signup pages (front-end only)
- 🎨 **Tailwind CSS Integration** — Modern, responsive UI styling
- 🗂 **Backup Data File** — `backupProduct.js` for product data storage

## 📂 Project Structure

```
.
├── images/                    # Product and UI images
├── js/
│   ├── backupProduct.js       # Product data backup
│   ├── cart.js               # Cart functionality
│   ├── categories.js         # Category rendering
│   ├── header.js             # Navigation & header
│   ├── main.js               # Entry point JS
│   ├── productDetails.js     # Product details page
│   ├── productsHome.js       # Home page product listing
│   └── script.js             # General scripts
├── cart.html
├── categories.html
├── index.html
├── login.html
├── productDetails.html
├── signup.html
├── tailwind.config.js
└── test.html
```



## ⚙️ Installation & Usage

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/Ecommerce-With-Raw-JavaScript.git
cd Ecommerce-With-Raw-JavaScript
```

### 2. Open in Browser
Simply open `index.html` in your preferred browser.  
Make sure all related files (JS, CSS, images) are in the correct directories.

### 3. (Optional) Run with Live Server
- Install VS Code Live Server extension
- Right-click `index.html` → "Open with Live Server"

## 📌 Technologies Used

- **HTML5**
- **CSS3** (with Tailwind CSS)
- **Vanilla JavaScript** (ES6)

## 📅 Roadmap

- ✅ Add cart persistence with localStorage
- ⏳ Implement backend API for dynamic data
- ⏳ Add payment gateway integration
- ⏳ Add search functionality

## 🤝 Contributing

Contributions are welcome!  
If you have suggestions or improvements, feel free to fork this repo and submit a pull request.

1. Fork it
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ **If you found this project helpful, please give it a star!** ⭐
