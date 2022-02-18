let rerenderEntireTree = () => {
  console.log('state changed!');
}

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi!', likesCount: 10},
      {id: 2, message: 'How are you?', likesCount: 100},
      {id: 3, message: 'adas', likesCount: 1}
    ],
    newPostText: 'it-camasutra.com'
  },
  dialogsPage: {
    dialogsDate: [
      {id:1, name:'User1'},
      {id:2, name:'User2'},
      {id:3, name:'User3'},
      {id:4, name:'User4'},
      {id:5, name:'User5'}
    ]
  },
  messagesPage: {
    messagesData: [
      {id:1, message:'message1'},
      {id:2, message:'message2'},
      {id:3, message:'message3'},
      {id:4, message:'message4'},
      {id:5, message:'message5'}
    ]
  }
}


export const addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;