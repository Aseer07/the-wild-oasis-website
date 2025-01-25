## The Wild Oasis Website

This project is a customer-facing website for the Wild Oasis, a small boutique hotel featuring luxurious wooden cabins. The website enables guests to learn about the hotel, browse cabins, reserve a cabin, and manage their profiles. It uses the same database and API as the internal hotel management app to ensure seamless integration.

## Tech Stack

    ⮞ Frontend: Next.js

    ⮞ Styling: Tailwind CSS

    ⮞ State Management: Context API

    ⮞ Authentication: NextAuth.js (Google authentication)

    ⮞ Database & API: Supabase

## Features

### Authentication

    ⮞ Users can log in using their Google account via NextAuth.js.

    ⮞ On sign-up, a profile is automatically created in the database

### Reservations

    ⮞ Guests can browse available cabins, filter by guest capacity, and view booked dates.

    ⮞ Reservations are marked as "unconfirmed" until payment is made at the property.

    ⮞ Users can view, update, or delete their reservations.

### Profile Management

    ⮞ Guests can update their profile to speed up the check-in process.

### Deployed on Vercel:

Visit the live application at Wild Oasis Website: https://the-wild-oasis-website-eight-iota.vercel.app/
