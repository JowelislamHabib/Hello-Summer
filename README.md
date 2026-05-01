# Solis - Premium Men's Seasonal Essentials

Welcome to **Solis**, a premium e-commerce platform curated for men's seasonal essentials. This application offers a luxury shopping experience, showcasing exceptional materials and timeless designs for the modern gentleman who values both style and comfort.

## 🎯 Purpose

The purpose of this project is to build a robust, high-performance, and visually appealing e-commerce web application. It provides users with a seamless shopping experience, complete with secure authentication, a dynamic product catalog, personal profile management, and a highly responsive, modern user interface.

## 🔗 Live URL

[https://solis-summer.vercel.app](https://solis-summer.vercel.app)

## ✨ Key Features

- **Secure Authentication:** Robust user login and registration flows (Email/Password & Google OAuth) powered by `better-auth`.
- **User Profiles:** Authenticated users can view their profile, manage personal information, and update their account settings seamlessly.
- **Dynamic Product Catalog:** Browse a curated collection of seasonal items with a beautiful grid layout.
- **Detailed Product Pages:** View in-depth details, ratings, stock status, and add items to your cart.
- **Stunning UI/UX:** Built with HeroUI and TailwindCSS v4 to provide a sleek, premium, and responsive design across all devices.
- **Engaging Animations:** Smooth transitions and marquee effects using `animate.css` and `react-fast-marquee`.
- **Interactive Galleries:** Modern image sliders implemented with `swiper`.

## 🛠 Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS 4
- **UI Components:** HeroUI (`@heroui/react`)
- **Authentication:** Better Auth (`better-auth`)
- **Database:** MongoDB

## 📦 NPM Packages Used

Here are the core dependencies utilized to build Solis:

- **Authentication & Database:**
  - `better-auth`
  - `@better-auth/mongo-adapter`
  - `mongodb`
- **UI & Styling:**
  - `@heroui/react`
  - `@heroui/styles`
  - `tailwindcss`
- **Icons:**
  - `react-icons`
  - `@gravity-ui/icons`
- **Forms & Validation:**
  - `react-hook-form`
- **Animations & Sliders:**
  - `animate.css`
  - `react-fast-marquee`
  - `swiper`

## 📂 Project File Tree Structure

```text

└── src
    ├── app
    │   ├── (auth)
    │   │   ├── login
    │   │   │   └── page.jsx
    │   │   ├── my-profile
    │   │   │   └── page.jsx
    │   │   └── register
    │   │       └── page.jsx
    │   ├── api
    │   │   └── auth
    │   │       └── [...all]
    │   │           └── route.js
    │   ├── globals.css
    │   ├── layout.js
    │   ├── loading.js
    │   ├── not-found.js
    │   ├── page.js
    │   ├── products
    │   │   ├── [id]
    │   │   │   └── page.jsx
    │   │   └── page.jsx
    │   └── providers.jsx
    ├── components
    │   ├── AllProducts.jsx
    │   ├── Brands.jsx
    │   ├── Footer.jsx
    │   ├── HeroSlider.jsx
    │   ├── NavBar.jsx
    │   ├── PopularProducts.jsx
    │   ├── ProductCard.jsx
    │   ├── Tips.jsx
    │   └── UserUpdate.jsx
    ├── lib
    │   ├── auth-client.js
    │   ├── auth.js
    │   └── data.js
    └── proxy.js
```

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up Environment Variables:**
   Make sure to create a `.env` or `.env.local` file with the necessary MongoDB URI and Better Auth secrets.
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open [http://localhost:3000](http://localhost:3000)** in your browser to see the result.
