import api from "./api";
import { STORAGE_TOKEN } from "../store.js";
const BASE_URL = api.BASE_URL;

export function CHANGE_TOKEN(token) {
  localStorage.removeItem("token");
  localStorage.token = JSON.stringify({
    token: token,
  });
  STORAGE_TOKEN.set(token);
}

export async function LOG_USER_IN(email, password, callback, onError) {
  try {
    let user = await fetch(`${BASE_URL}/auth/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    user = await user.json();

    user.status === "success" && callback && callback(user);

    if (user.status === "error") throw user;

    return user;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}

export async function TERMS(token, callback, onError) {
  try {
    let term = await fetch(`${BASE_URL}/term`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    term = await term.json();

    term.status === "success" && callback && callback(term);
    if (term.status === "error") throw term;

    return term;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}

export async function DASHBOARD(term_id, token, callback, onError) {
  try {
    let dashboard = await fetch(
      `${BASE_URL}/dashboard/all?term_id=${term_id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    dashboard = await dashboard.json();

    dashboard.status === "success" && callback && callback(dashboard);
    if (dashboard.status === "error") throw dashboard;

    return dashboard;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}

export async function GET_SCHOOLS(token, callback, onError) {
  try {
    let schools = await fetch(`${BASE_URL}/payment/allschools`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    schools = await schools.json();

    schools.status === "success" && callback && callback(schools);

    if (schools.status === "error") throw schools;

    return schools;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}

export async function GET_SCHOOL_BY_ID(id, token, callback, onError) {
  try {
    let schools = await fetch(`${BASE_URL}/schools/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    schools = await schools.json();

    schools.status === "success" && callback && callback(schools);
    if (schools.status === "error") throw schools;

    return schools;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}

export async function SINGLE_SCHOOL_PAYMENT_DASHBOARD(
  id,
  token,
  callback,
  onError
) {
  try {
    let schools = await fetch(
      `${BASE_URL}/payment/allschools?school_id=${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    schools = await schools.json();

    schools.status === "success" && callback && callback(schools);
    if (schools.status === "error") throw schools;

    return schools;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}

export async function PAYMENT_ALL_SCHOOLS(token, callback, onError) {
  try {
    let schools = await fetch(`${BASE_URL}/payment`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    schools = await schools.json();

    schools.status === "success" && callback && callback(schools);
    if (schools.status === "error") throw user;

    return schools;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
