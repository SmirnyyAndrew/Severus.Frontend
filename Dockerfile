FROM node:18

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 44445
 
CMD ["npm", "run", "start:docker"]