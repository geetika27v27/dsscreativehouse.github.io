# SmritiLok

**A place to Create, Store, and Share our memories**

SmritiLok is a modern, full-stack web application designed to help users manage and share their memories through both private and public channels. Built with React 18 and TypeScript, it features a distinctive split-screen design that visually separates private and public memory management.

![SmritiLok Interface](https://cdn.builder.io/o/assets%2F6bff267cf158491cbf1e86b74a9b9379%2F4441506cc79f478e886c9e7884679772?alt=media&token=d540e6b1-6705-43be-94d3-d15af6d42ccb&apiKey=6bff267cf158491cbf1e86b74a9b9379)

## ✨ Features

### Private Memories (Left Side - White)

- **Chat** - Private messaging and conversations
- **Calendar Journal** - Time-based memory organization
- **Files** - Personal document and media storage
- **Maps** - Location-based memory tracking

### Public Memories (Right Side - Black)

- **AI Avatar** - Intelligent memory assistant
- **Shared Memories** - Community memory sharing
- **Memory Wall** - Public memory display
- **Biography** - Personal story creation

## 🚀 Tech Stack

### Frontend

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **Radix UI** - Accessible component library
- **React Router 6** - SPA routing with modern patterns

### Backend

- **Express.js** - Web application framework
- **Node.js** - JavaScript runtime
- **TypeScript** - End-to-end type safety

### Development Tools

- **Vitest** - Unit testing framework
- **PNPM** - Fast, disk space efficient package manager
- **ESLint + Prettier** - Code linting and formatting
- **Lucide React** - Beautiful icon library

## 🎨 Design Philosophy

SmritiLok features a unique **split-screen design** that visually and functionally separates:

- **Left Half (White)**: Private, personal memory management
- **Right Half (Black)**: Public, shared memory experiences
- **Central Branding**: SmritiLok logo spans both sides, symbolizing the connection between private and public memories

## 📦 Installation

### Prerequisites

- Node.js 18+
- PNPM (recommended) or npm

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd smritilok
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server with hot reload

# Building
pnpm build        # Build for production
pnpm build:client # Build client only
pnpm build:server # Build server only

# Testing
pnpm test         # Run unit tests
pnpm typecheck    # TypeScript type checking

# Code Quality
pnpm format.fix   # Format code with Prettier

# Production
pnpm start        # Start production server
```

### Project Structure

```
├── client/                 # React frontend application
│   ├── components/ui/      # Reusable UI components (Radix + Tailwind)
│   ├── pages/             # Route components
│   │   ├── Index.tsx      # Homepage with split design
│   │   ├── About.tsx      # About page
│   │   ├── Demo.tsx       # Demo page
│   │   └── Partners.tsx   # Partners page
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.tsx            # App entry point with routing
│   └── global.css         # TailwindCSS configuration & global styles
│
├── server/                # Express backend
│   ├���─ routes/            # API route handlers
│   └── index.ts           # Main server setup
│
├── shared/                # Shared types and utilities
│   └── api.ts             # API interface definitions
│
└── public/                # Static assets
```

### Key Components

#### Navigation

- Split navigation bar matching the page design
- Left side: Home | About | Demo (black text on white)
- Right side: Partners | Help|EN | Sign In (white text on black)

#### Visual Elements

- Wireframe human figure and world map imagery
- Responsive design for all screen sizes
- Social media integration (Facebook, Instagram, X, LinkedIn, YouTube)

## 🌐 Deployment

### Production Build

```bash
pnpm build
```

### Deployment Options

1. **Netlify** (Recommended)
   - Connect to your Git repository
   - Build command: `pnpm build`
   - Publish directory: `dist/spa`

2. **Vercel**
   - Import your Git repository
   - Framework: React
   - Build command: `pnpm build`

3. **Traditional Hosting**
   - Build the project
   - Serve the `dist/spa` directory

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
# API Configuration
API_BASE_URL=your_api_url

# Database (if applicable)
DATABASE_URL=your_database_url
```

## 🎯 Usage

### Navigation

- Use the top navigation to switch between different sections
- The split design provides clear visual separation between private and public features

### Memory Management

- **Private side**: Manage personal memories, files, and journal entries
- **Public side**: Engage with community features and AI-powered tools

### Responsive Design

- Desktop: Full split-screen experience
- Mobile: Stacked layout with touch-friendly interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use TailwindCSS for styling
- Maintain the split-design theme
- Write tests for new features
- Follow the existing code structure

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [SmritiLok Demo](https://972ccdff4bf44a01aee5a629f6b88304-7f23c897f6904f7e8cf73883c.fly.dev/)
- **Documentation**: [Builder.io Projects Docs](https://www.builder.io/c/docs/projects)

## 💡 About

SmritiLok represents the intersection of personal memory management and community sharing. The split-screen design metaphorically and literally divides the private self from the public persona, while the central branding reminds us that both aspects are part of a unified human experience.

Built with modern web technologies and a focus on user experience, SmritiLok aims to be the premier platform for digital memory preservation and sharing.

---

**Created with ❤️ using [Builder.io](https://builder.io)**
