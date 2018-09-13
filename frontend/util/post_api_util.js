export const fetchPosts = (city_id) => {
    return $.ajax({
        method: 'GET',
        url: `api/cities/${city_id}/posts`
    })
};

export const createPost = (post) => (
    $.ajax({
        method: 'POST',
        url: 'api/posts',
        data: {post}
    })
);

export const deletePost = (user_id, post_id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/users/${user_id}/posts/${post_id}`
    })
)

export const updatePost = (post, user_id, post_id) => (
    $.ajax({
        method: 'PUT',
        url: `api/users/${user_id}/posts/${post_id}`,
        data: {post}
    })
)