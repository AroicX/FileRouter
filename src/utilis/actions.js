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
export async function ZONES(token, callback, onError) {
  try {
    let zones = await fetch(`${BASE_URL}/zones`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    zones = await zones.json();

    zones.status === "success" && callback && callback(zones);
    if (zones.status === "error") throw zones;

    return zones;
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

export async function GET_ZONAL_DASHBOARD_BY_ID(id, token, callback, onError) {
  try {
    let dashboard = await fetch(`${BASE_URL}/zones/${id}/dashboard`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
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
export async function GET_SCHOOL_FEE_INFORMATION(
  school_id,
  term_id,
  token,
  callback,
  onError
) {
  try {
    let fees = await fetch(
      `${BASE_URL}/payment/status/${school_id}/${term_id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    fees = await fees.json();

    fees.status === "success" && callback && callback(fees);
    if (fees.status === "error") throw fees;

    return fees;
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

export async function SINGLE_SCHOOL_PAYMENT_IN_A_TERM(
  school_id,
  term_id,
  token,
  callback,
  onError
) {
  try {
    let schools = await fetch(
      `${BASE_URL}/payment/school/${school_id}?term_id=${term_id}`,
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
