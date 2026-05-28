import "server-only";

import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { FieldValue, getFirestore } from "firebase-admin/firestore";

function serviceAccountFromEnv() {
  const rawJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

  if (rawJson) {
    const parsed = JSON.parse(rawJson) as {
      project_id?: string;
      client_email?: string;
      private_key?: string;
    };

    return {
      projectId: parsed.project_id,
      clientEmail: parsed.client_email,
      privateKey: parsed.private_key?.replace(/\\n/g, "\n")
    };
  }

  return {
    projectId: process.env.FIREBASE_PROJECT_ID ?? process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")
  };
}

function getFirebaseAdminApp() {
  const existingApp = getApps()[0];
  if (existingApp) return existingApp;

  const serviceAccount = serviceAccountFromEnv();

  if (!serviceAccount.projectId || !serviceAccount.clientEmail || !serviceAccount.privateKey) {
    throw new Error("Firebase Admin nao configurado no servidor Render.");
  }

  return initializeApp({
    credential: cert(serviceAccount)
  });
}

export async function verifyFirebaseAdminToken(idToken: string) {
  if (!idToken) {
    throw new Error("Token Firebase ausente.");
  }

  return getAuth(getFirebaseAdminApp()).verifyIdToken(idToken);
}

export function firebaseAdminAuth() {
  return getAuth(getFirebaseAdminApp());
}

export function firebaseAdminDb() {
  return getFirestore(getFirebaseAdminApp());
}

export { FieldValue };
