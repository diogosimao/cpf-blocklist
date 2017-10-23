FROM node

VOLUME ["/dist"]
VOLUME ["/app"]
VOLUME ["/frontend"]

ADD package.json .
ADD webpack.config.js .

RUN npm install 

RUN npm i -g webpack

RUN npm i -g eslint

RUN rm /package.json

CMD ["webpack"]