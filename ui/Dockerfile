FROM node:16.16.0
WORKDIR /app
ADD . .
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
RUN yarn cache clean
RUN yarn install
ENTRYPOINT ["/entrypoint.sh"]
ENV BROWSER=none
EXPOSE 3000
CMD ["yarn", "run", "dev"]