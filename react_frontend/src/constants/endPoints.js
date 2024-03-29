
const endpoint = "https://folklore-apiv2.onrender.com/"
//const endpoint = "http://127.0.0.1:8091/"


const EndPoints = {
    registerEndPoint: endpoint + 'register',
    loginEndPoint: endpoint + 'login',
    createStoryEndPoint: endpoint + 'createStory',
    getWarningsEndPoint: endpoint + 'getWarnings',
    getStoriesEndPoint: endpoint + 'getStories',
    getTrendingStoriesEndPoint: endpoint + 'getTrendingStories',
    getSearchItemsEndPoint: endpoint + 'getSearchItems',
    getLogOutPoint: endpoint + 'logout',
    getUserLibraryEndPoint: endpoint + 'getUserLibrary',
    removeStoryFromUserEndPoint: endpoint + 'removeStoryFromUser',
    addStoryToUserLibraryEndPoint: endpoint + 'addStoryToUserLibrary',
    getUserEndPoint: endpoint + 'getUser',
    getUserBlogsEndPoint: endpoint + 'getUserBlogs',
    getUserStoriesEndPoint: endpoint + 'getUserStories',
    deleteUserEndPoint: endpoint + 'deleteUser',
    getStoryByIdEndPoint: endpoint + 'getStoryById',
    getPostByChoiceIdEndPoint: endpoint + 'getPostByChoiceId',
    getStoryCommentsEndPoint: endpoint + 'getStoryComments',
    addCommentToStory: endpoint + 'addCommentToStory',
    addScoreToStory: endpoint + 'addScoreToStory',
    getUserStoryScore: endpoint + 'getUserStoryScore'
};

export default EndPoints
