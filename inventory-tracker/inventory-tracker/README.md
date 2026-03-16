# 📦 InventoryTracker

A full-stack inventory management system built with **Angular 17** and **.NET 8 Web API**.

## Features

- 📊 Real-time stock level dashboard with KPI stat cards
- 🔍 Search, filter, and paginate product catalog
- ➕ Add, edit, and delete products via modal forms
- 🚨 Automatic low-stock alerts and status badges
- 📱 Fully responsive layout with collapsible sidebar

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | Angular 17, TypeScript 5.2        |
| Backend  | .NET 8, ASP.NET Core Web API      |
| Database | SQL Server / SQLite (EF Core)     |
| Styling  | Custom CSS Design System          |

## Getting Started

### Prerequisites
- [Node.js 18+](https://nodejs.org/) and npm
- [.NET 8 SDK](https://dotnet.microsoft.com/download)

### Backend
```bash
cd backend
dotnet restore
dotnet run
# API available at http://localhost:5000
# Swagger UI at http://localhost:5000/swagger
```

### Frontend
```bash
# From project root
npm install
ng serve
# App available at http://localhost:4200
```

## Project Structure
```
inventory-tracker/
├── src/                        # Angular frontend
│   ├── app/
│   │   ├── components/         # Feature UI components
│   │   ├── models/             # TypeScript interfaces
│   │   └── services/           # HTTP data services
│   ├── environments/           # API URL config
│   ├── index.html              # App shell entry point
│   └── styles.css              # Global design system / CSS vars
├── backend/                    # ASP.NET Core Web API
│   ├── Controllers/            # REST endpoint controllers
│   ├── Models/                 # C# domain models
│   ├── Services/               # Business logic layer
│   └── Program.cs              # App bootstrap
├── .gitignore
├── package.json
└── README.md
```

## API Endpoints

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| GET    | /api/products         | List all products     |
| GET    | /api/products/{id}    | Get product by ID     |
| POST   | /api/products         | Create new product    |
| PUT    | /api/products/{id}    | Update product        |
| DELETE | /api/products/{id}    | Delete product        |

## License

MIT — feel free to use this as a portfolio reference or starting point.
