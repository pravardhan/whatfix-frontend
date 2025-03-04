const BASE_URL = 'http://localhost:8000';

export const getData = async (endpoint: string) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const postData = async (endpoint: string, data: any) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Failed to post data');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const putData = async (endpoint: string, data: any) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Failed to update data');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
