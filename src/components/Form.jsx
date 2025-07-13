"use client";
import { useState } from "react";

const Form = () => {






  const [fields, setFields] = useState([
    { name: "", role: "" }
  ]);


  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState([]);

  // Handle input change for dynamic fields
  const handleFieldChange = (idx, key, value) => {
    const updated = fields.map((field, i) =>
      i === idx ? { ...field, [key]: value } : field
    );
    setFields(updated);
  };

  // Add new field
  const handleAddField = () => {
    setFields([...fields, { name: "", role: "" }]);
    setErrors([...errors, {}]);
  };

  // Delete field
  const handleDeleteField = (idx) => {
    setFields(fields.filter((_, i) => i !== idx));
    setErrors(errors.filter((_, i) => i !== idx));
  };

  // Validate fields
  const validate = () => {
    const newErrors = fields.map(field => ({
      name: !field.name ? "Name is required" : "",
      role: !field.role ? "Role is required" : ""
    }));
    setErrors(newErrors);
    return newErrors.every(err => !err.name && !err.role);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormData(fields);

    
      // Optionally reset fields here
      setFields([{ name: "", role: "" }]);
    }
  };



    return (
      
       
<div className="p-8 max-w-4xl mx-auto space-y-6">
        
          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={field.name}
                    onChange={e => handleFieldChange(idx, "name", e.target.value)}
                    className="border p-2 rounded w-full"
                  />
                  {errors[idx]?.name && (
                    <span className="text-red-500 text-xs">{errors[idx].name}</span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <select
                    value={field.role}
                    onChange={e => handleFieldChange(idx, "role", e.target.value)}
                    className="border p-2 rounded w-full"
                  >
                    <option value="">Select Role</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Fullstack">Fullstack</option>
                  </select>
                  {errors[idx]?.role && (
                    <span className="text-red-500 text-xs">{errors[idx].role}</span>
                  )}
                </div>
                <button
                  type="button"
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDeleteField(idx)}
                  disabled={fields.length === 1}
                  title={fields.length === 1 ? "At least one field required" : "Delete"}
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleAddField}
            >
              + Add More
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded ml-4"
            >
              Submit
            </button>
          </form>

          {/* Print form state below the form with h3 tags */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Form State:</h3>
            {fields.map((field, idx) => (
              <h3 key={idx} className="mb-1">
                Name: {field.name || <span className="text-gray-400">[empty]</span>}, Role: {field.role || <span className="text-gray-400">[empty]</span>}
              </h3>
            ))}
          </div>

          {/* Print submitted data in a table */}
          {formData.length > 0 && (
            <div className="overflow-x-auto mt-6">
              <h3 className="text-lg font-semibold mb-2">Submitted Data:</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 border-2">
                  <tr className="border-2">
                    <th className="px-6 border-2 py-3   font-bold text-2xl text-black uppercase tracking-wider text-center">
                      Name
                    </th>
                    <th className="px-6 py-3 text-center text-2xl text-black font-bold uppercase tracking-wider">
                      Role
                    </th>
                  </tr>
                </thead>


                <tbody className="bg-white  divide-y divide-gray-200">
                  {formData.map((data, index) => (
                    <tr className="border-2" key={index}>
                      <td className="px-6 border-2 text-center py-4 whitespace-nowrap">{data.name}</td>
                      <td className="px-6 border-2 text-center py-4 whitespace-nowrap">{data.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>




    );
}
  

export default Form;
