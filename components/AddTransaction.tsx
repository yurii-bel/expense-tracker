"use client";

import addTransaction from "@/app/actions/addTransaction";

const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      alert(error);
    } else {
      alert("Transaction added successfully");
      console.log(data);
    }
  };

  return (
    <>
      <h3>Add transasction</h3>
      <form action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            id="text"
            name="text"
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount..."
            step="0.01"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
