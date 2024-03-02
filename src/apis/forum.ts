interface ForumListRequest {
    page: number;
    pageSize: number;
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
