import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN_URL,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export { firebase, database as default}






















// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = []

//       snapshot.forEach((child) => {
//           expenses.push({
//               id: child.key,
//               ...child.val()
//           })
//       })
//       console.log(expenses);
//   })

//   database.ref('expenses').on('value', (snapshot) =>{
//       const expenses = []
//       snapshot.forEach((child) => {
//           expenses.push({
//               id: child.key,
//               ...child.val()
//           })
//       })
//       console.log(expenses);
//  })

//events:
//  child_removed
//  child_changed
//  child_added



//     database.ref('expenses').push({
//       description: 'Rent',
//       notes: 'Pay the rent',
//       amount: '1232',
//       createdAt: '123123123'
//   })
//     database.ref('expenses').push({
//     description: 'water',
//     notes: 'Pay the water',
//     amount: '122',
//     createdAt: '123154123'
// })
//     database.ref('expenses').push({
//     description: 'Games',
//     notes: 'Pay the games',
//     amount: '1',
//     createdAt: '124312'
// })





//   database.ref('notes/-M9odJQQCNauN4Re4QbE').update({
//       body: 'buy food'
//   })



//   database.ref('notes').push({
//       title: 'topics',
//       body: 'asdasdasd'
//   })


//   database.ref('notes').set(notes)




//   const onValChange = database.ref().on('value', (snapshot) => {
//       console.log(snapshot.val());
//   }, (e) => {
//       console.log('Error with data fetching');
//   })

//   setTimeout(() => {
//       database.ref('age').set(29)
//   }, 3500);
//   setTimeout(() => {
//     database.ref().off(onValChange)
// }, 7000);
// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500);
//   database.ref('location').once('value')
//     .then((snapShot) => {
//         const val = snapShot.val()
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })



//   database.ref().set({
//       name: 'Yorguin M',
//       age: 26,
//       stressLevel: 7,
//       job: {
//           title: 'Developer',
//           company: 'IBM'
//       },
//       isSingle: false,
//       location: {
//           city: 'NF',
//           country: 'Canada'
//       }
//   })

//   database.ref('attributes').set({
//       height: 121,
//       weight: 170
//   })

//   database.ref('isSingle').remove().then(() => {
//     console.log('removed');
//   }).catch(()=> {
//       console.log('not removed');
//   })

//   database.ref().update({
//       stressLevel: 9,
//       "job/company": 'Amazon',
//       'location/city': 'Bogota'
//   })

