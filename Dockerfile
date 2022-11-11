FROM node:latest

WORKDIR /prointro-bot

COPY package*.json /prointro-bot/

RUN npm install 

COPY . .

RUN npm run db-generate

RUN npm run build

 ENV  DATABASE_URL ${DATABASE_URL}
 ENV HOME_GUILD_ID ${HOME_GUILD_ID}
 ENV NODE_ENV  ${NODE_ENV}
 ENV HOME_ADMIN_CHANNEL_ID ${HOME_ADMIN_CHANNEL_ID}
 ENV TOKEN ${TOKEN}
 ENV COLOR ${COLOR}
 ENV THUMBNAIL ${THUMBNAIL}
 ENV COVER_IMAGE ${COVER_IMAGE}
 ENV ADMINS ${ADMINS}

CMD ["npm", "start"]