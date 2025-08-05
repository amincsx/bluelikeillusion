# BluelikeIllusion Backend

Backend service for the BluelikeIllusion website creation platform.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bluelikeillusion
JWT_SECRET=your_jwt_secret_key_here
```

3. Start MongoDB service on your machine

4. Run the development server:
```bash
npm run dev
```

## API Endpoints

### Websites

- `POST /api/websites` - Create a new website
- `GET /api/websites` - Get all websites
- `GET /api/websites/:id` - Get a specific website
- `PUT /api/websites/:id` - Update a website
- `DELETE /api/websites/:id` - Delete a website

### Request Body Format

```json
{
  "name": "My Website",
  "domain": "my-website",
  "owner": "user@example.com",
  "template": "business",
  "customization": {
    "colors": {
      "primary": "#000000",
      "secondary": "#ffffff",
      "accent": "#ff0000"
    },
    "fonts": {
      "heading": "IRANSans",
      "body": "Tahoma"
    },
    "logo": "path/to/logo.png"
  },
  "content": {
    "pages": [
      {
        "name": "Home",
        "sections": [
          {
            "type": "hero",
            "content": {
              "title": "Welcome",
              "subtitle": "This is my website"
            }
          }
        ]
      }
    ]
  },
  "settings": {
    "language": "fa",
    "isPublished": false
  }
}
```

## Features

- Create and manage websites with different templates
- Customize colors, fonts, and content
- Multi-language support (Persian/English)
- Content management system
- Website publishing control 