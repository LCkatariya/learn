import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

export function removeArticle(payload) {
  return { type: 'REMOVE_ARTICLE', payload }
};

export function dataLoaded (payload){
  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(res=>res.json())
  // .then(data=>{
  //   console.log(data)
  //   let payload = data.map((item)=>item.title)
    return {type: 'DATA_LOADED', payload}
  // })
}