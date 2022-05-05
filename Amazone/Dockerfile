FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Kawithma-X/QueenAlexa /root/ales
WORKDIR /root/ales/
RUN git clone https://github.com/Kavindya-X/Config
RUN git clone https://github.com/Kavindya-X/Angela-x
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "alexa.js"]
