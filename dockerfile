FROM mcr.microsoft.com/playwright:v1.57.0-jammy

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build the Next.js app (production)
RUN npm run build

EXPOSE 3000

# Start prod server, wait, then run tests
CMD sh -c "npm run start & npx wait-on http://localhost:3000 && npx playwright test"
