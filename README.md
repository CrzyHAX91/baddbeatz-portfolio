# BaddBeatz Production & DJ Portfolio

A modern, responsive portfolio website for BaddBeatz Production featuring AI-driven music generation, content creation, and social media integration, packaged as both a web application and a Windows desktop app.

## Features

- 🎵 AI-Driven Music Generation (Techno, 138 BPM, Dark mood)
- 📱 Content Generation with Smart Recycling & A/B Testing
- 🔐 User Authentication & Profile Management
- 🎨 Modern Dark Theme UI with Tailwind CSS
- 🖥️ Available as Web App and Windows Desktop App
- 📱 Fully Responsive Design

## Technologies Used

- HTML5 & Tailwind CSS
- Firebase Authentication
- Electron (Desktop App)
- Google Fonts
- Font Awesome Icons

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/baddbeatz-portfolio.git
cd baddbeatz-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a Firebase project at https://console.firebase.google.com/
   - Register a web app in your Firebase project
   - Copy the Firebase config object
   - Replace the placeholder values in `js/auth.js`

## Development

### Web Application

To run the web application locally:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000` in your browser.

### Desktop Application

To run the Electron app in development mode:

```bash
npm start
```

## Building

### Windows Desktop App

To create a Windows executable:

```bash
npm run package-win
```

The packaged application will be available in the `dist` folder.

### Web Deployment

#### Option 1: Netlify Drop
1. Visit [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the project folder
3. Your site will be instantly deployed with a unique URL

#### Option 2: GitHub Pages
1. Push to your repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://YOUR_USERNAME.github.io/baddbeatz-portfolio`

## Project Structure

```
baddbeatz-portfolio/
├── index.html          # Main HTML file
├── js/
│   └── auth.js        # Firebase authentication
├── main.js            # Electron main process
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
