import { useState } from "react";
import Navbar from "../components/Navbar";
import NoteModal from "../components/NoteModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();


  const closeModal = () => {
    setModalOpen(false);
  };

  const addNote = async (title, description) => {
    try {
      const res = await axios.post("http://localhost:8001/api/note/add", {
        title,
        description,
      },{
        headers: {
          Authorization: `Bearer ${localStorage.getItems('token')}`
        }
      });
      if (res.data.success) {
        navigate("/");
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <button
        onClick={() => setModalOpen(true)}
        className="absolute right-4 bottom-4 btn btn-primary p-4 rounded-full"
      >
        +
      </button>
      {isModalOpen && <NoteModal closeModal={closeModal} addNote={addNote} />}
    </div>
  );
}
