FROM node:19-slim

# Create app directory
WORKDIR /home/node/app

USER node

# Install app dependencies
CMD ["tail", "-f", "/dev/null"]