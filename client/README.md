<div align="center">
  <h2>Meco</h2>
  <strong>Version 0.5.0</strong>
</div>

<p align="center">
  🚀 View @ https://meco-chat.vercel.app | hosted with <a href="https://vercel.com/">Vercel</a>
</p>

<p align="center">
  💪 API deployed @ https://meco-socket-api.herokuapp.com | hosted with <a href="https://www.heroku.com/">Heroku</a>
</p>

<div align="center">
  <img src="https://github.com/zyderus/portfolio/blob/main/public/assets/images/meco.png?raw=true" width="100%">
</div>

## Description

Basic chat application with server-side rendering and sockets. Your google name becomes your username in chat once you're authenticated with google id. Authentication implemented with NextAuth package.

## Requirements

Google account

## Tech

Next, NextAuth, Typescript, Socket.io

## Getting Started

### 🛠 Installation & Set Up

1. Installation

   ```sh
   npm install
   ```

2. Run the development server

   ```sh
   npm run dev
   ```

3. Build for Production

   ```sh
   npm run build
   ```

4. Set Socket API path

   ```sh
   filename: /components/ChatBox.tsx
   let socket = io('localhost:5500')
   ```

   Replace localhost:5500 with your socket server

## Contributors

- Rustam Ziyadov

## License & copyright

&copy; Rustam Ziyadov
