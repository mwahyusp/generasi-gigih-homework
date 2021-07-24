import { useForm } from "react-hook-form";
import "./style.css";

export default function App() {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <h1 id="playlist">Create Playlist</h1>
       <input placeholder="Title..." id="playlist" name="playlist" minLength="10" />
      <textarea placeholder="Description..." id="textAreaDesc" minLength="20"/>
      <button type="submit" id="btnSubmit">Submit</button>
    </form>
  );
}
