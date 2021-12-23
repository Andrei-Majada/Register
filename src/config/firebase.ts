import admin, { ServiceAccount }  from 'firebase-admin';
import serviceAccount from './firebase-keys.json';

export default class FirebaseAdmin {
  app: admin.app.App;

  initialize() {
    this.app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
    });
  }
}