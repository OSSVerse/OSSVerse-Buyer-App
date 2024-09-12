FROM node:19.9.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code
COPY . .


# Install dependencies
RUN npm install

ENV PORT=8000
# Expose the port the app runs on
EXPOSE $PORT

#ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PROTOCOL "http://"
ENV USE_FQDN_FOR_APIS false
ENV FQDN ""


# Use pm2-runtime to start the application
# CMD ["npm", "start", '--port', $PORT]
CMD exec npm start --port $PORT