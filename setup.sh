#!/bin/bash

# Next.js Portfolio Setup Script
# This script will initialize the Next.js portfolio project

echo "=================================="
echo "Next.js Portfolio Setup"
echo "=================================="
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

echo "✓ npm found"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✓ Dependencies installed successfully"
echo ""

# Create public directory if it doesn't exist
echo "📁 Creating public directory..."
mkdir -p public

echo "✓ Project structure ready"
echo ""

echo "=================================="
echo "✅ Setup Complete!"
echo "=================================="
echo ""
echo "Next steps:"
echo "1. Run 'npm run dev' to start the development server"
echo "2. Open http://localhost:3000 in your browser"
echo "3. The Header component is ready to use"
echo ""
echo "For production build:"
echo "1. Run 'npm run build'"
echo "2. Run 'npm start'"
echo ""
