import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AddHabit = () => {
  const { dbUser } = useContext(AuthContext);
  const [imgURL, setImgURL] = useState("");

  // ImgBB API Key
  const imgBBKey = "d9c3fc2ae4b6969c4cec0676a44db6cf";

  // Image Upload Handler
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const uploadRes = await fetch(
      `https://api.imgbb.com/1/upload?key=${imgBBKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await uploadRes.json();
    if (result.success) {
      setImgURL(result.data.url);
      Swal.fire({
        icon: "success",
        title: "Image uploaded!",
        timer: 1200,
        showConfirmButton: false,
      });
    }
  };

  const handleAddHabit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const reminder_time = form.reminder.value;
    const createdAt = form.createdAt.value; // <-- new field
    const email = dbUser?.email;
    const name = dbUser?.name;

    const newHabit = {
      title,
      description,
      category,
      reminder_time,
      createdAt, // store created date
      image: imgURL,
      user_email: email,
      user_name: name,
      completionHistory: [],
    };

    fetch("http://localhost:3000/habits", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newHabit),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Habit Added Successfully!",
            timer: 1500,
            showConfirmButton: false,
          });
          form.reset();
          setImgURL("");
        }
      });
  };

  return (
    <div className="max-w-lg mx-auto bg-base-200 my-8 p-8 rounded-2xl shadow-lg border border-base-300">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Add New Habit
      </h2>

      <form onSubmit={handleAddHabit} className="space-y-2">

        {/* Habit Title */}
        <div className="form-control">
          <label className="font-medium mb-1">Habit Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter habit title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="font-medium mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Short description..."
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="font-medium mb-1">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Category</option>
            <option value="Morning">Morning</option>
            <option value="Work">Work</option>
            <option value="Fitness">Fitness</option>
            <option value="Evening">Evening</option>
            <option value="Study">Study</option>
          </select>
        </div>

        {/* Reminder Time */}
        <div className="form-control">
          <label className="font-medium mb-1">Reminder Time</label>
          <input
            type="time"
            name="reminder"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Created Date */}
        <div className="form-control">
          <label className="font-medium mb-1">Created Date</label>
          <input
            type="date"
            name="createdAt"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="form-control">
          <label className="font-medium mb-1">Upload Image (Optional)</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="file-input file-input-bordered w-full"
            accept="image/*"
          />
        </div>
        {imgURL && (
          <img
            src={imgURL}
            alt="Uploaded"
            className="w-32 mt-2 rounded-md mx-auto"
          />
        )}

        {/* User Name */}
        <div className="form-control">
          <label className="font-medium mb-1">User Name</label>
          <input
            type="text"
            className="input input-bordered w-full bg-base-300"
            defaultValue={dbUser?.name}
            readOnly
          />
        </div>

        {/* User Email */}
        <div className="form-control">
          <label className="font-medium mb-1">User Email</label>
          <input
            type="email"
            className="input input-bordered w-full bg-base-300"
            defaultValue={dbUser?.email}
            readOnly
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary w-full text-lg font-semibold mt-4"
        >
          Add Habit
        </button>
      </form>
    </div>
  );
};

export default AddHabit;
