interface ForumListRequest {
    page: number;
    pageSize: number;
}

// export const loginApi = async (data: LoginRequest): Promise<IUser> => {
//    const formData = new FormData();
//    for (let key in data) {
//       formData.append(key, data[key as keyof LoginRequest]);
//    }
//    const res = await fetch(${host}/${apis.login}/, {
//       method: "POST",
//       body: formData,
//    });
//    const json = await res.json();
//    return json;
// };

interface JoinACommunityRequest {
    community: string;
}

export const joinACommunity = async (data: JoinACommunityRequest) => {
    const formData = new FormData();
   
    for (const key in data) {
        formData.append(key, data[key as keyof JoinACommunityRequest]);
    }
   
    const res = await fetch("127.0.0.1:8000/joinCommunity", {
      method: "POST",
      body: formData,
   });
   
   const json = await res.json();
   return json;
}

export const getForumList = async (params: ForumListRequest) => {
    // const { page, pageSize } = params;
    // const response = await axios.get(`/forum?page=${page}&pageSize=${pageSize}`);
    // return response.data;
}

interface ForumDetailsRequest {
    id: number;
}

export const getForumDetails = async (params: ForumDetailsRequest) => {
    // const { id } = params;
    // const response = await axios.get(`/forum/${id}`);
    // return response.data;
}

interface ForumCreateRequest {
    title: string;
    description: string;
    sender: string;
}

export const createForum = async (params: ForumCreateRequest) => {
    // const { title, description, sender } = params;
    // const response = await axios.post(`/forum`, { title, description, sender });
    // return response.data;
}

interface ForumLikeRequest {
    id: number;
    liked: boolean;
}

export const likeForum = async (params: ForumLikeRequest) => {
    // const { id, liked } = params;
    // const response = await axios.put(`/forum/${id}/like`, { liked });
    // return response.data;
}

interface ForumReplyRequest {
    id: number;
    description: string;
    sender: string;
}

export const replyForum = async (params: ForumReplyRequest) => {
    // const { id, description, sender } = params;
    // const response = await axios.post(`/forum/${id}/reply`, { description, sender });
    // return response.data;
}
