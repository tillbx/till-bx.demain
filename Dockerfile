# Stage 1: Builder stage using Node.js and PNPM
FROM node:20-alpine AS builder

# Enable corepack (comes with recent Node versions)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set the working directory
WORKDIR /app

# Copy the project files
COPY . .

# Install dependencies and build the project
RUN pnpm install && pnpm run build

# Stage 2: Final NGINX image
FROM nginx:alpine AS final

# Copy the NGINX config file from the deployment folder
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the output of the build from the builder stage into the NGINX html directory
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80 to allow traffic
EXPOSE 80

# The default command to run the NGINX server
CMD ["nginx", "-g", "daemon off;"]
