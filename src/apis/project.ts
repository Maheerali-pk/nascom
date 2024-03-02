interface ProjectListRequest {
    page: number;
    pageSize: number;
}

export const getProjectList = async (params: ProjectListRequest) => {
    // const { page, pageSize } = params;
    // const response = await axios.get(`/project?page=${page}&pageSize=${pageSize}`);
    // return response.data;
}

interface ProjectDetailsRequest {
    id: number;
}

export const getProjectDetails = async (params: ProjectDetailsRequest) => {
    // const { id } = params;
    // const response = await axios.get(`/project/${id}`);
    // return response.data;
}

interface ProjectCreateRequest {
    title: string;
    description: string;
    category: string;
}

export const createProject = async (params: ProjectCreateRequest) => {
    // const { title, description, category } = params;
    // const response = await axios.post(`/project`, { title, description, category });
    // return response.data;
}