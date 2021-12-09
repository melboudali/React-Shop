## Firebase Installation

1. Create Firebase project.
2. Go to _Project settings_ > _General_ > _Your apps_, then click **Add app**.
3. Register the web app and install Firebase SDK:

```
npm install firebase
```

4. Create .env.local file and add these env vars:

```
REACT_APP_APIKEY= '...'
REACT_APP_AUTHDOMAIN= '...'
REACT_APP_DATABASEURL= '...'
REACT_APP_PROJECTID= '...'
REACT_APP_STORAGEBUCKET= '...'
REACT_APP_MESSAGINGSENDERID= '...'
REACT_APP_APPID= '...'
REACT_APP_MESUREMENTID= '...'
```

> If you don't know where to find the values you can go to _Project settings_ > _General_ > _Your apps_.

## Authentication

1. Go to _Authentication_ > _ Sign-in method_ > _Sign-in providers_, then add and enable these providers:

- Email/Password
- Google
- Facebook
- GitHub

2. Got to Authorized domains then add `localhost` and all the other domains.

## Cloud Firestore

1. Go to _Rules_ and add these:

```
// Allow read/write access on all documents to any user signed in to the application
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}{
    	allow get, create, update: if request.auth != null && request.auth.uid == userId;
    }
    match /Collections/{collection}{
    	allow read;
    }  }
}
```

2. Create two Collection:

- **users**
  Create a new collection with the id `users`.
- **Collections**
  Create a new collection with the id `Collections`, every collection has two fields:

```
title: string;
items: {
id: number;
name: string;
description: string;
firstImageUrl: string;
secondImageUrl :string;
thirdImageUrl: string
fourthImageUrl: string;
colors: string[];
size: number[];
newPrice: number;
oldPrice: number;
orders: number;
rate: number;
}[];
```
