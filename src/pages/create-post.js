import ReactQuill from "react-quill";
import {useState} from "react";
import {Navigate} from "react-router-dom";

import Editor from "../editor";

import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();
    const data = {
      title: title,
      summary: summary,
      content: content
    }
    const response = await fetch('https://vidyanews-2dd3196bd5f5.herokuapp.com/post', 
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(data)
   });
    if (response.ok) {
      setRedirect(true);
    } else {
      console.log('Response: ', response);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <form onSubmit={createNewPost}>
      <input type="text"
        placeholder={'Title'}
        value={title}
        onChange={ev => setTitle(ev.target.value)} />
      <input type="text"
        placeholder={'Summary'}
        value={summary}
        onChange={ev => setSummary(ev.target.value)} />
      <Editor value={content} onChange={setContent} />
      <button>Create post</button>
    </form>
  );
}