FROM hypriot/rpi-node

WORKDIR /opt/raspi-mon

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "prod"]
