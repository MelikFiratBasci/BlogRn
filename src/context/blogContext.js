import createDataContext from "./createDataContext";


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogPost':
            return state.filter(blogPost => blogPost.id !== action.payload);
        case 'add_blogPost':
            return [...state,
            {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content,
            }]
        case 'edit_blogPost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost;
            })


        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    try {
        return (title, content, callBack) => {
            dispatch({ type: 'add_blogPost', payload: { title: title, content: content } })
            if(callBack){
                callBack();
            }
        }
    } catch (error) {
        console.log(error)
    }


};
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogPost', payload: id })
    }
};
const editBlogPost = (dispatch) => {
    return (id, title, content, callBack) => {
        dispatch({
            type: 'edit_blogPost',
            payload: { id, title, content }
        });
        if(callBack){
        callBack();
    }
    }
};


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'Test Post', content: 'Test Content', id: 1 }]
);

