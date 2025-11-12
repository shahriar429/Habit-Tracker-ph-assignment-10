import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const UpdateHabit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [habit, setHabit] = useState(null);
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    fetch(`https://habit-tracker-server-qpky.onrender.com/habits/${id}`)
      .then((res) => res.json())
      .then((data) => setHabit(data))
      .catch((err) => console.error("Error loading habit:", err));
  }, [id]);

  //=== Image Upload to ImgBB (optional new image) ===//
  const uploadImageToImgbb = async (file) => {
    const form = new FormData();
    form.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=d9c3fc2ae4b6969c4cec0676a44db6cf`,
      {
        method: "POST",
        body: form,
      }
    );
 
    const data = await res.json();
    return data.data.url; // return hosted image link
  };

  const handleUpdateHabit = async (e) => {
    e.preventDefault();
    const form = e.target;

    let imageURL = habit.image;

    // If new image uploaded → upload to ImgBB
    if (newImage) {
      imageURL = await uploadImageToImgbb(newImage);
    }

    const updatedHabit = {
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      image: imageURL,
    };

    const res = await fetch(`https://habit-tracker-server-qpky.onrender.com/habits/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedHabit),
    });

    if (res.ok) {
      toast.success("Habit updated successfully!");
      setTimeout(() => navigate(`/habits/${id}`), 1200);
    } else {
      toast.error("Failed to update habit!");
    }
  };

  if (!habit) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-xl">
        Loading habit...
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-gray-200">

        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Update Habit
        </h2>

        <form onSubmit={handleUpdateHabit} className="space-y-3">

          {/* User Name (disabled) */}
          <div className="form-control">
            <label className="font-semibold">User Name</label>
            <input
              type="text"
              disabled
              defaultValue={habit.user_name}
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Email (disabled) */}
          <div className="form-control">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              disabled
              defaultValue={habit.user_email}
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Title */}
          <div className="form-control">
            <label className="font-semibold">Habit Title</label>
            <input
              type="text"
              name="title"
              required
              defaultValue={habit.title}
              className="input input-bordered w-full"
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="font-semibold">Category</label>
            <select
              name="category"
              required
              defaultValue={habit.category}
              className="select select-bordered w-full"
            >
              <option value="">Select category</option>
              <option value="Health">Health</option>
              <option value="Study">Study</option>
              <option value="Fitness">Fitness</option>
              <option value="Productivity">Productivity</option>
              <option value="Mindfulness">Mindfulness</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="font-semibold">Description</label>
            <textarea
              name="description"
              required
              defaultValue={habit.description}
              className="textarea textarea-bordered w-full h-24 resize-none"
            ></textarea>
          </div>

          {/* Current Image */}
          <div>
            <label className="font-semibold">Current Image</label>
            <img
              src={habit.image}
              alt=""
              className="w-full h-40 object-cover rounded-xl mt-2"
            />
          </div>

          {/* Upload New Image (optional) */}
          <div className="form-control mt-3">
            <label className="font-semibold">Upload New Image (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewImage(e.target.files[0])}
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="btn bg-indigo-600 hover:bg-indigo-700 w-full text-white mt-4 font-semibold rounded-xl"
          >
            Update Habit
          </button>
        </form>

        <ToastContainer position="bottom-center" autoClose={1500} />
      </div>
    </div>
  );
};

export default UpdateHabit;
