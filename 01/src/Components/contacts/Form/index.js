import React, { useEffect, useState } from "react";

const initialFormsValue={fullName:'',phoneNumber:''}

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormsValue);

  useEffect(()=>{
    setForm(initialFormsValue)
  },[contacts])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (form.fullName === "" || form.phoneNumber === "") {
      return alert("boş bırakma");
    }
    addContact([...Form, form]);
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name='fullName'
            placeholder='fullName'
            onChange={onChangeInput}
            value={form.fullName}
            style={{ background: "red" }}
          />
        </div>
        <input
          name='phoneNumber'
          placeholder='phoneNumber'
          onChange={onChangeInput}
          value={form.phoneNumber}
          style={{ background: "blue" }}
        />
        <div>
          <button style={{ backgroundColor: "gray" }}>add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
