# Docker-Basics
What is Docker? Making a Dockerfile for a node app

## First time (skip if you have docker already)
1. Signup at `https://hub.docker.com`
2. Download and install docker: `https://download.docker.com/`

## Run the app

1. `docker run -p 4001:80 miclgael/docker-basics:part1`
2. Navigate to `http://localhost:4001`
3. The express app should print 'Hello, world!' to the browser