import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../hooks/useAuth";

const CreateAssignment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [startDate, setStartDate] = useState(new Date());

  const { user } = useAuth();

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const difficultyLevel = form.difficultyLevel.value;
    const description = form.description.value;
    const dueDate = form.dueDate.value;
    const image = form.image.value;
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

    
    console.log(assignment);
  };
  return (
    <div className="w-3/4 m-auto text-center lg:p-24">
      <h2 className="text-3xl mb-8 font-bold">Create Assignment</h2>
      <form onSubmit={handleCreateAssignment}>
        <div className="md:flex space-x-5 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="enter assignment title"
                className="input input-bordered w-full"
                name="title"
                required
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="enter mark"
                className="input input-bordered w-full"
                name="marks"
                required
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Assignment difficulty level</span>
            </label>
            <label className="input-group">
              <select
                className="select select-bordered w-full max-w-xs"
                name="difficultyLevel"
                required
              >
                <option disabled selected value="">
                  Select type
                </option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
          </div>
        </div>

        <div className="md:flex space-x-5 mb-8">
          <div className="form-control md:w-3/4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="enter description"
                className="input input-bordered w-full"
                name="description"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text">Due date</span>
            </label>
            <label className="input-group">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="dueDate"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </label>
          </div>
        </div>

        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="enter thumbnail Image URL"
                className="input input-bordered w-full"
                name="image"
                required
              />
            </label>
          </div>
        </div>
        <input
          className="btn btn-block"
          type="submit"
          value="Create Assignment"
        />
      </form>
      {/*  
      <br />
      <br />
      <br />
      <h2 className="text-3xl mb-8">All Products</h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loadProducts.map((product) => (
              <>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.photo} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.name}</div>
                        <div className="text-sm opacity-50">
                          {product.brandName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {product.sortDescription}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {product.productType}
                    </span>
                  </td>
                  <td>{product.price}</td>

                  <th>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                    <button className="btn btn-danger btn-xs">Delete</button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      */}
    </div>
  );
};

export default CreateAssignment;
