import { useMutation } from "@tanstack/react-query";
import server from "../server/tbg-server";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { LoginResponse } from "@/types/auth.type";

let auth = null;

async function FirebaseConnect() {
    const serverProps = await fetch(`/api/server_props`).then((res) => res.json());
    const firebaseConfig = {
        apiKey: serverProps.firebaseApiKey,
        authDomain: serverProps.firebaseAuthDomain,
        projectId: serverProps.firebaseProjectId,
        storageBucket: serverProps.firebaseStorageBucket,
        messagingSenderId: serverProps.firebaseMessangingSenderId,
        appId: serverProps.firebaseAppId
    };
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
}

FirebaseConnect();

async function fetchLogin(email: string, password: string) {
    const res = await server.post<LoginResponse>('/auth/signin', {
        email: email.toLowerCase(),
        password: password
    }).then((res) => {
        const data = res.data;
        if (data.auth) {
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('uid', data.user.uid);
            localStorage.setItem('accessToken', data.token);
            localStorage.setItem('session', 'email/password');
            localStorage.setItem('role', data.role);
            data.user["token"] = data.token;
        }
        return data;
    }).catch((e) => {
        return e;
    });
    return res;
}


export const useLogin = () => {
    return useMutation({
        mutationFn: (user: { email: string; password: string }) => fetchLogin(user.email, user.password),
    })
}

async function fetchLogout() {
    const res = await server.post<LoginResponse>('/auth/signout').then((res) => {
        localStorage.removeItem('user');
        localStorage.removeItem('uid');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('session');
        localStorage.removeItem('role');
        return res;
    }).catch((e) => {
        return e;
    });
    return res
}


export const useLogout = () => {
    return useMutation({
        mutationFn: () => fetchLogout(),
    })
}

async function fetchLoginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    const signIn = () => auth.signInWithPopup(provider);
    const res = await signIn().then(async (auth) => {
        const token = await auth.user.getIdToken(false);
        const uid = auth.user.uid;
        const res = await server.post(`/auth/google-signin/${uid}`, {
            name: auth.user.displayName,
            email: auth.user.email
        }).then((res) => {
            const data = res.data;
            if (data.auth) {
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('uid', uid);
                localStorage.setItem('accessToken', token);
                localStorage.setItem('session', 'google');
                localStorage.setItem('role', data.role);
                data.user["token"] = token;
            }
            return data;
        }).catch((e) => {
            return e;
        });
        return res;
    }).catch((e) => {
        return e;
    });
    return res;
}


export const useLoginWithGoogle = () => {
    return useMutation({
        mutationFn: fetchLoginWithGoogle,
    })
}

async function fetchLogoutWithGoogle() {
    const signOut = () => auth.signOut();
    await signOut().then(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('uid');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('session');
        localStorage.removeItem('role');
    });
}

export const useLogoutWithGoogle = () => {
    return useMutation({
        mutationFn: fetchLogoutWithGoogle,
    })
}

async function fetchSignup(name: string, lastname: string, email: string, password: string) {
    const res = await server.post<LoginResponse>('/auth/signup', {
        name: name,
        lastname: lastname,
        email: email.toLowerCase(),
        password: password
    }).then((res) => {
        const data = res.data;
        return data;
    }).catch((e) => {
        return e;
    });
    return res;
}


export const useSignup = () => {
    return useMutation({
        mutationFn: (user: { name: string, lastname: string, email: string; password: string }) => fetchSignup(user.name, user.lastname, user.email, user.password),
    })
}