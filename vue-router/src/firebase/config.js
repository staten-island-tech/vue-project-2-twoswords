import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1gaFf9UERH0omOvumJkflguGVJ79OB3o",
  authDomain: "vue-firebase-1bc25.firebaseapp.com",
  projectId: "vue-firebase-1bc25",
  storageBucket: "vue-firebase-1bc25.appspot.com",
  messagingSenderId: "598169153021",
  appId: "1:598169153021:web:232cb6c3e52a32d3207d94",
  measurementId: "G-L25FJN57J8",
};

initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.firestore = firebase.firestore();
    this.storage = firebase.storage();
  }

  getAllPosts() {
    return firebase.firestore().collection("posts").get();
  }

  getCurrentPost(postid) {
    return firebase.firestore().collection("posts").doc(postid).get();
  }

  async createPost(url, post) {
    const fileRef = await firebase.storage().refFromURL(url);
    let newPost = {
      title: post.title,
      content: post.content,
      cover: url,
      fileref: fileRef.location.path,
    };

    return firebase.firestore().collection("posts").add(newPost);
  }

  async updatePost(url, postid, postData) {
    if (url !== null && url !== "") {
      const storageRef = firebase.storage().ref();
      await storageRef
        .child(postData.oldcover)
        .delete()
        .catch((err) => {
          console.log(err);
        });

      const fileRef = await firebase.storage().refFromURL(url);
      let updatedPost = {
        title: postData.title,
        content: postData.content,
        cover: url,
        fileref: fileRef.location.path,
      };
      return firebase
        .firestore()
        .collection("posts")
        .doc(postid)
        .set(updatedPost, { merge: true });
    } else {
      return firebase
        .firestore()
        .collection("posts")
        .doc(postid)
        .set(postData, { merge: true });
    }
  }

  async deletePost(postid, fileref) {
    const storageRef = firebase.storage().ref();

    await firebase
      .firestore()
      .collection("posts")
      .doc(postid)
      .delete()
      .catch((err) => {
        console.log(err);
      });
    console.log("Post Deleted");

    await storageRef
      .child(fileref)
      .delete()
      .catch((err) => {
        console.log(err);
      });
    console.log("Image Deleted");
  }
}

const auth = getAuth();

export { auth };

export default new Firebase();
