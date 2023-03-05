import Axios from 'axios';

export const setDataBlog = (page) => (dispatch) => {
    Axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=4`)
        .then(result => {
            const responseAPI = result.data;
            dispatch({ type: 'UPDATE_DATA_BLOG', payload: responseAPI.data })
            dispatch({
                type: 'UPDATE_PAGE',
                payload: {
                    currentPage: responseAPI.current_page,
                    totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page)
                }
            })
        })
        .catch(err => {
            console.log('error: ', err);
        })
}