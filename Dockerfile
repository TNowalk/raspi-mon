#FROM arm32v7/node:9.2
FROM resin/raspberrypi3-node:slim

WORKDIR /opt/raspi-mon

COPY package.json .

CMD ["npm", "install"]

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
