import { getApps, getApp, FirebaseOptions, FirebaseApp, initializeApp } from 'firebase/app'
import { getFirebaseApp } from '../lib/firebase/firebase'

export const config: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_AMESUREMENT_ID,
}

export const getFirebaseApp = (): FirebaseApp => {
  return !getApps().length ? initializeApp(config) : getApp()
}

// export const getFirebaseApp = (): FirebaseApp | undefined => {
//   // 今回使用するFirebaseのアプリケーション（または初期化したもの）を返す
//   if (typeof window === 'undefined') return // バックエンドで実行されないようにする

//   return getApps()[0] || initializeApp(firebaseConfig)
// }

// export const getFirebaseAuth = (): FirebaseAuth => {
//   // Firebaseのアプリケーションに紐ずく認証のオブジェクト（Authオブジェクト）を返す
//   return getAuth(getFirebaseApp())
// }
