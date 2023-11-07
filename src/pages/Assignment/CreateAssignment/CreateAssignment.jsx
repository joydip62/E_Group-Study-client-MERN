import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const CreateAssignment = () => {
  const [formData, setFormData] = useState({
    title: "",
    marks: "",
    difficultyLevel: "",
    description: "",
    dueDate: "",
    image: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const { user } = useAuth();
  const axios = useAxios();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.title) {
      errors.title = "Title is required";
    }

    if (!formData.marks) {
      errors.marks = "Marks is required";
    } else if (!/^\d+$/.test(formData.marks)) {
      errors.marks = "Marks should be a number";
    }

    if (!formData.difficultyLevel) {
      errors.difficultyLevel = "Difficulty level is required";
    }

    if (!formData.description) {
      errors.description = "Description is required";
    }

    if (!formData.dueDate) {
      errors.dueDate = "Due date is required";
    }

    if (!formData.image) {
      errors.image = "Image URL is required";
    } else if (!isValidURL(formData.image)) {
      errors.image = "Invalid URL";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidURL = (url) => {
    const urlRegex = /(https?:\/\/.*\.(?:png|jpg))/i;
    return urlRegex.test(url);
  };

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      const { title, marks, difficultyLevel, description, dueDate, image } =
        formData;

      const assignmentCreator = user.email;

      const assignment = {
        title,
        marks,
        difficultyLevel,
        description,
        dueDate,
        image,
        assignmentCreator,
      };

      axios
        .post("create/assignment", assignment)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          Swal.fire(
            "Good job!",
            "Your Assignment added successfully!",
            "success"
          );
          setFormData({
            title: "",
            marks: "",
            difficultyLevel: "",
            description: "",
            dueDate: new Date(),
            image: "",
          });
        })
        .catch(function (error) {
          Swal.fire("Oopsss", error.message, "error");
        });
    } else {
      Swal.fire("Oopsss", "Form is not valid", "error");
    }
  };
  return (
    <div className="w-3/4 m-auto text-center lg:p-24">
      <h2 className="text-3xl mb-8 font-bold">Create Assignment</h2>
      <form onSubmit={handleCreateAssignment}>
        <div className="md:flex space-x-5 mb-8">
          {/* Title Input */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter assignment title"
                className="input input-bordered w-full"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </label>
            {formErrors.title && (
              <p className="text-red-500">{formErrors.title}</p>
            )}
          </div>

          {/* Marks Input */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter mark"
                className="input input-bordered w-full"
                name="marks"
                value={formData.marks}
                onChange={handleInputChange}
                required
              />
            </label>
            {formErrors.marks && (
              <p className="text-red-500">{formErrors.marks}</p>
            )}
          </div>

          {/* Difficulty Level Select */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Assignment difficulty level</span>
            </label>
            <label className="input-group">
              <select
                className="select select-bordered w-full max-w-xs"
                name="difficultyLevel"
                value={formData.difficultyLevel}
                onChange={handleInputChange}
                required
              >
                <option disabled value="">
                  Select type
                </option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
            {formErrors.difficultyLevel && (
              <p className="text-red-500">{formErrors.difficultyLevel}</p>
            )}
          </div>
        </div>

        <div className="md:flex space-x-5 mb-8">
          {/* Description Input */}
          <div className="form-control md:w-3/4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter description"
                className="input input-bordered w-full"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </label>
            {formErrors.description && (
              <p className="text-red-500">{formErrors.description}</p>
            )}
          </div>

          {/* Due Date Datepicker */}
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text">Due date</span>
            </label>
            <label className="input-group">
              <DatePicker
                selected={formData.dueDate}
                onChange={(date) => setFormData({ ...formData, dueDate: date })}
                name="dueDate"
                className="border border-gray-300 p-3 rounded-md w-full"
                required
              />
            </label>
            {formErrors.dueDate && (
              <p className="text-red-500">{formErrors.dueDate}</p>
            )}
          </div>
        </div>
        {/* Image URL Input */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter thumbnail Image URL"
                className="input input-bordered w-full"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
              />
            </label>
            {formErrors.image && (
              <p className="text-red-500">{formErrors.image}</p>
            )}
          </div>
        </div>

        <input
          className="btn btn-block"
          type="submit"
          value="Create Assignment"
        />
      </form>
    </div>
  );
};

export default CreateAssignment;
