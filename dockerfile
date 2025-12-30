FROM mcr.microsoft.com/playwright:v1.57.0-jammy

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Expose app port (optional, but clean)
EXPOSE 3000

# Start app, wait, then run tests
CMD sh -c "npm run dev & npx wait-on http://localhost:3000 && npx playwright test"
