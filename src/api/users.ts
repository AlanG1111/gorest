import IUserData from "../types";

const accessToken =
  "Bearer ef7a8354d58822419f5ed2b4dffd1ec5ef730ffa0c3913b804096e5069db360e";

// Return all users from API
export const getAllUsers = async function () {
  const response = await fetch("https://gorest.co.in/public/v2/users");
  return response.json();
};

// Return all user by id from API
export const getOneUser = async function (id: string) {
  const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`);
  return response.json();
};

// Put changed user`s data to API
export const putUser = async (user: IUserData) => {
  const url = `https://gorest.co.in/public/v2/users/${user.id}`;
  const body = JSON.stringify(user);
  const settings = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
    body,
  };
  try {
    const fetchResponse = await fetch(url, settings);
    if (fetchResponse.status === 401) {
      return { message: "Authantication failed.", ok: fetchResponse.ok };
    }
    if (fetchResponse.status === 422) {
      return { message: "Enter correct data.", ok: fetchResponse.ok };
    }
    if (!fetchResponse.ok) {
      return { message: "Somethings went wrong.", ok: fetchResponse.ok };
    }
    const data: IUserData = await fetchResponse.json();
    return { message: data, ok: fetchResponse.ok };
  } catch (e: any) {
    throw new Error(e);
  }
};
