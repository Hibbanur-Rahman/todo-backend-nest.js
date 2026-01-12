# Authentication API

## Login Endpoint

### POST /auth/login

Login with username and password to get a JWT token.

**Request Body:**
```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "admin",
    "email": "admin@example.com"
  }
}
```

**Example using cURL:**
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

## Protected Routes

To access protected routes, include the JWT token in the Authorization header:

### GET /profile (Protected)

**Request:**
```bash
curl http://localhost:3000/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

**Response:**
```json
{
  "userId": 1,
  "username": "admin"
}
```

## Test Credentials

- **Username:** admin
- **Password:** admin123

## How to Protect Your Routes

To protect any route with JWT authentication, use the `@UseGuards(JwtAuthGuard)` decorator:

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller('todos')
export class TodosController {
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    // Only accessible with valid JWT token
    return [];
  }
}
```

## Important Security Notes

⚠️ **Before deploying to production:**
1. Change the JWT secret in `src/auth/constants/jwt.constants.ts`
2. Use environment variables for sensitive data
3. Replace the in-memory user storage with a real database
4. Implement user registration endpoint
5. Add password strength validation
