FROM arm32v7/node:slim

WORKDIR /opt/raspi-mon

COPY package.json .


COPY . .

EXPOSE 3000

CMD ["npm", "start"]
