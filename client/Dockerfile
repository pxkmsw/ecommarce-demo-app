FROM node:13
WORKDIR /app
COPY package.json /app
RUN npm install react-scripts -g
RUN npm install
COPY . /app
RUN ls
CMD npm start
EXPOSE 3000
