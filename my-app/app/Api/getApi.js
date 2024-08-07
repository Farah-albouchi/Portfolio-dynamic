import axios from 'axios';

// Refactored API functions

export async function AboutgetApi(userId) {
    const url = `http://localhost:3000/about/${userId}`;
    try {
        const response = await axios.get(url);
        if(response.status === 200) {
            return response.data;
        } else {
            return { message: "Something went wrong" };
        }
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
}

export async function AchievementgetApi(userId) {
    const url = `http://localhost:3000/work/${userId}`;
    try {
        const response = await axios.get(url);
        if(response.status === 200) {
            return response.data;
        } else {
            return { message: "Something went wrong" };
        }
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
}

export async function ContactgetApi(userId) {
    const url = `http://localhost:3000/user/LoadUser/${userId}`;
    try {
        const response = await axios.get(url);
        if(response.status === 200) {
            return response.data;
        } else {
            return { message: "Something went wrong" };
        }
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
}

export async function PartnersgetApi(userId) {
    const url = `http://localhost:3000/partners/${userId}`;
    try {
        const response = await axios.get(url);
        if(response.status === 200) {
            return response.data;
        } else {
            return { message: "Something went wrong" };
        }
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
}

export async function OverviewApi(userId) {
    const url = `http://localhost:3000/home/${userId}`;
    try {
        const response = await axios.get(url);
        if(response.status === 200) {
            return response.data;
        } else if (response.status === 404) {
            return { message: "This user doesn't have a personal section" };
        } else {
            return { message: "Something went wrong" };
        }
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch home data');
    }
}

export async function ProjectgetApi(userId) {
    const url = `http://localhost:3000/projectSection/${userId}`;
    try {
        const response = await axios.get(url);
        if(response.status === 200) {
            return response.data;
        } else {
            return { message: "Something went wrong" };
        }
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
}

export async function ServicegetApi(userId) {
    const url = `http://localhost:3000/serviceSection/${userId}`;
    try {
        const response = await axios.get(url);
        if(response.status === 200) {
            return response.data;
        } else {
            return { message: "Something went wrong" };
        }
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
}

export async function TestimonialsgetApi(userId) {
    const url = `http://localhost:3000/Testimonials/${userId}`;
    try {
        const response = await axios.get(url);
        if(response.status === 200) {
            return response.data;
        } else {
            return { message: "Something went wrong" };
        }
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
}
