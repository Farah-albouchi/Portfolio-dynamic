import axios from 'axios';

export async function MessagesAddApi (data , userId){
    const url = `http://localhost:3000/Messages/${userId}`;
    try {
        const response = await axios.post(url,data);
        if(response.status === 201 ){
            return response.data;
        }
        else  {
            return {message:"Something went wrong"}
        }
    }catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
      }
  }