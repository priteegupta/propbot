// src/components/FormInput.jsx
export default function FormInput({ label, type, value, onChange, name, required }) {
  return (
    <div className="my-2 flex flex-col">
      <label className="mb-1 font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="px-4 py-2 border rounded"
      />
    </div>
  );
}
