# Development Guide

## Setup Development Environment

1. **Prerequisites**
   ```bash
   node -v  # Should be 18.x or higher
   npm -v   # Should be 8.x or higher
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## Development Workflow

1. **Branch Strategy**
   - `main`: Production-ready code
   - `develop`: Development branch
   - Feature branches: `feature/feature-name`

2. **Code Style**
   - Follow TypeScript best practices
   - Use functional components
   - Implement proper error handling

3. **Testing**
   ```bash
   npm run test        # Run all tests
   npm run test:watch  # Watch mode
   ```

## Component Development

1. **Create New Component**
   ```typescript
   // components/MyComponent.tsx
   interface MyComponentProps {
     // Props definition
   }

   export function MyComponent(props: MyComponentProps) {
     // Component implementation
   }
   ```

2. **Add Styles**
   ```typescript
   // Use Tailwind CSS classes
   className="flex items-center justify-center"
   ```

## Building for Production

1. **Build**
   ```bash
   npm run build
   ```

2. **Test Production Build**
   ```bash
   npm run start
   ```

## Deployment

1. **Environment Variables**
   - Copy `.env.example` to `.env`
   - Set required variables

2. **Deploy**
   ```bash
   npm run deploy
   ```