# Café Delight - Bangalore

A premium, localized café website built with **Next.js 14**, **Vanilla CSS**, and **Context API**.

## 🚀 Features

### Customer Experience
- **Home Page**: Bangalore-themed hero, seasonal specials, and testimonials.
- **Menu**: Categorized list with **Search**, **Filters** (Veg/Non-Veg), and **Item Customization** (Milk/Sugar).
- **Cart & Checkout**: Full e-commerce flow with INR (₹) pricing and 5% Tax calculation.
- **Reservations**: Table booking system with email confirmation (mock).
- **User Accounts**: Login/Register, Order History, Saved Addresses, and Loyalty Points.
- **PWA**: Installable on mobile devices with offline capabilities.

### Admin Panel
- Access via `/admin`.
- **Dashboard**: Sales analytics and quick stats.
- **Order Management**: track status (Pending -> Delivered).
- **Menu Management**: Update prices and toggle stock availability.

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS Modules + Vanilla CSS variables
- **State**: React Context (Auth, Cart)
- **Icons**: Text/Emoji + SVG
- **Font**: Outfit (Google Fonts)

## 📦 Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000)

3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## 🔐 Credentials

### Admin Login
- **URL**: `/login` (then navigate to `/admin`)
- **Email**: `admin@cafe.com`
- **Password**: Any (e.g., `admin123`)

### User Login
- **Email**: Any (e.g., `user@test.com`)
- **Password**: Any

## 📱 Mobile Support
This app is a PWA. You can add it to your home screen on iOS (Share -> Add to Home Screen) and Android.

---
*Built with ❤️ for Bangalore.*
