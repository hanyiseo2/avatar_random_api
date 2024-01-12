# Avatar_image_api

---

### Development

베포 서버:

### Description of avatar_image_api

- This repository provides an API for generating avatar images. Each avatar is created by combining various elements such as gender, facial features, hairstyle, clothing, and background, based on a unique identifier known as the "seed value." This project allows users to download avatars in SVG format or copy a URL link to the generated avatar based on a specific seed value.

## Get Started

---

### Requirements

- For building and running the application you need:
  - [Node.js 16.17.0](https://nodejs.org/en/blog/release/v16.17.0)
  - [npm 8.18.0](https://www.npmjs.com/package/npm/v/8.18.0)

### Installation

```jsx
$ git clone https://github.com/hanyiseo2/avatar_random_api.git

$ cd avatar_random_api/backend
$ npm install
$ npm run dev

$ cd ..
$ cd frontend
$ npm install
$ npm run start
```

## Stacks

---
### Development

Node.js, Typescript, React.js, Bootstrap

### Testing 

Jest, supertest

### Deployment

Cloud run, Docker

## Main function

---

1. Generate a random avatar image
   - You can use this API to generate an avatar image. To generate a random avatar image, make a ‘GET’ request to the following endpoint:
   - GET /
2. Generate an avatar image by Seed

   - You can generate avatar image based on seed value as avatar name. To generate an avatar image by seed, make a ‘GET’ request to the following endpoint:
   - GET /?seed={seedValue}

   example

   - GET /?seed=hanyi

## Usage

---

- The backend provides an API for generating avatars wit seed and random avatar.
- The frontend is a simple application that interacts with the backend to display random avatars. Access the frontend at [http://localhost:3000](http://localhost:3000/) after starting it.
