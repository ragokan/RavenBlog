# Raven Blog

#### You can check it online : https://ravenblog.herokuapp.com/

#### Tecnologies

- React
- Express
- MongoDB (Main Storage)
- Firebase/firestore (Image upload and notification/chat)

#### How to Use

##### Frontend

- Rename 'ConfigForGithub' file to 'Config' in frontend/src/firebase.
- Add you firebase config to commented area.
- In frontend/src/context/utils/api, change base url to your url.

##### Backend

- Create a file called '.env'
- Include bottom 3 lines with your '.env' file

  <code>
  JWT_EXPIRE = 9999 Years // Or your preferenced expire <br/>
  JWT_SECRET = secretkey // You can write anything here   <br/>
  MONGO_URI = yourMongoURI // You can use localhost or from mongodb.
  </code>

#####Final

- In backend and frontend, run "yarn start" or "npm run start"
