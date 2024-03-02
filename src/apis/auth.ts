import { apis, host } from "../utils/constants";

interface LoginRequest {
   username: string;
   password: string;
}
interface RegisterRequest {
   username: string;
   email: string;
   password: string;
   interest: string;
   location: string;
   experience: string;
}

export const loginApi = async (data: LoginRequest): Promise<IUser> => {
   const formData = new FormData();
   for (let key in data) {
      formData.append(key, data[key as keyof LoginRequest]);
   }
   const res = await fetch(`${host}/${apis.login}/`, {
      method: "POST",
      body: formData,
   });
   const json = await res.json();
   return json;
};

export const registerApi = async (data: RegisterRequest): Promise<IUser> => {
   const formData = new FormData();
   for (let key in data) {
      formData.append(key, data[key as keyof RegisterRequest]);
   }
   const res = await fetch(`${host}/${apis.signup}/`, {
      method: "POST",
      body: formData,
   });
   const json = await res.json();
   return json;
};

export const getUserDataApi = async () => {
   const res = await fetch(`${host}/${apis.userData}/`, {
      headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      method: "GET",
   });
   const json = await res.json();
   return json;
};
