FROM node

VOLUME ["/dist"]
VOLUME ["/src"]
VOLUME ["/frontend"]

ADD package.json .

RUN npm install 

RUN npm run postinstall

RUN npm run start
