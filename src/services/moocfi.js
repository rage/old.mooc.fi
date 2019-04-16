import TmcClient from "tmc-client-js";
import * as store from "store";
import axios from "axios"
const BASE_URL = "https://tmc.mooc.fi/api/v8"



const tmcClient = new TmcClient(
  "59a09eef080463f90f8c2f29fbf63014167d13580e1de3562e57b9e6e4515182",
  "2ddf92a15a31f87c1aabb712b7cfd1b88f3465465ec475811ccce6febb1bad28"
);

export function authenticate(credentials) {
  return new Promise((resolve, reject) => {
    tmcClient.authenticate(credentials).then(
      res => {
        resolve(res);
      },
      err => {
        reject(err);
      }
    );
  });
}

export function accessToken() {
  try {
    return store.get("tmc.user").accessToken || null;
  } catch (error) {
    return null;
  }
}

export function loggedIn() {
  return accessToken() ? true : false;
}

export async function userDetails() {
  const res = await axios.get(
    `${BASE_URL}/users/current?show_user_fields=true&extra_fields=ohjelmoinnin-mooc-2019`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken()}`,
      },
    },
  )
  store.set("tmc.user.details", res.data)
  return res.data
}


export function signOut() {
  store.remove("tmc.user")
  store.remove("tmc.user.details")
  if (window) {
    window.location.reload()
  }
}
