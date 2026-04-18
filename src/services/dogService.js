import { apiFetch } from "./api";

export const getDogs = async (page = 1, limit = 5, breed = "") => {
  let url = `api/dogs/fetch?page=${page}&limit=${limit}`;

  if (breed) {
    url += `&breed=${breed}`;
  }

  return await apiFetch(url);
};

export const createDog = async (payload) =>
   await apiFetch("api/dogs/create", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateDogDetails = async (breed, payload) =>
  await apiFetch(`api/dogs/update/${breed}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

export const deleteDog = async (id) =>
  await apiFetch(`api/dogs/delete/${id}`, {
    method: "DELETE",
  });