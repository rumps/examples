FROM node:0.10.32
RUN apt-get update -qq && apt-get install -y build-essential graphicsmagick
RUN npm install -g bower gulp json
RUN mkdir /assets
WORKDIR /assets

# build.json and package.json is separated so
# build-related packages are not needlessly downloaded
ADD build.json /assets/package.json
RUN npm install
ADD client.json /assets/package.json
RUN npm install
ADD bower.json /assets/bower.json
RUN bower install --config.interactive=false --allow-root

ADD . /assets

# Merge JSON files together for Rump's autoload
RUN cat /assets/build.json /assets/client.json | json --deep-merge > /assets/package.json

CMD gulp server
