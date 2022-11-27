import React, { useState } from "react";

const AddProduct = () => {
  const [categoryName, setCategoryName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.productName.value;
    const location = form.location.value;
    const oldPrice = form.newPrice.value;
    const price = form.sellPrice.value;
    const condition = form.condition.value;
    const uses = form.uses.value;
    console.log(name, categoryName, location, oldPrice, price, condition, uses);
    /* const img = event.target.file.files[0];
    const formData = new FormData();
    formData.append("img", img);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data)); */
  };
  return (
    <section className="container mx-auto my-10">
      <div className="">
        <div className="">
          <div className="bg-white">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4">
                <div className="col-span-6">
                  <label
                    className="mb-1 block text-sm text-gray-600"
                    htmlFor="email"
                  >
                    Product Name
                  </label>

                  <input
                    className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                    type="text"
                    name="productName"
                    id="name"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    className="mb-1 block text-sm text-gray-600"
                    htmlFor="photo"
                  >
                    Photo
                  </label>

                  <input
                    className="w-full rounded-lg border-gray-600 p-2.5 text-sm shadow-sm"
                    type="file"
                    name="file"
                    id="photo"
                  />
                </div>
                <fieldset className="col-span-6">
                  <legend className="mb-1 block text-sm text-gray-600">
                    Brand
                  </legend>

                  <div className="-space-y-px rounded-lg bg-white shadow-sm">
                    <div>
                      <label className="sr-only" htmlFor="country">
                        Brand
                      </label>

                      <select
                        className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                        id="country"
                        name="country"
                        autoComplete="brand-name"
                        onBlur={(event) => setCategoryName(event.target.value)}
                      >
                        <option value={"iPhone"}>iPhone</option>
                        <option value={"samsung"}>Samsung</option>
                        <option value={"one plus"}>One Plus</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="col-span-6">
                  <legend className="mb-1 block text-sm text-gray-600">
                    Details
                  </legend>

                  <div className="-space-y-px rounded-lg bg-white shadow-sm">
                    <div>
                      <label className="sr-only" htmlFor="card-number">
                        Location
                      </label>

                      <input
                        className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                        type="text"
                        name="location"
                        id="card-number"
                        placeholder="Location"
                      />
                    </div>

                    <div className="flex -space-x-px">
                      <div className="flex-1">
                        <label
                          className="sr-only"
                          htmlFor="card-expiration-date"
                        >
                          Price
                        </label>

                        <input
                          className="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                          type="text"
                          name="newPrice"
                          id="card-expiration-date"
                          placeholder="New Price"
                        />
                      </div>

                      <div className="flex-1">
                        <label className="sr-only" htmlFor="card-cvc">
                          Sell Price
                        </label>

                        <input
                          className="relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                          type="text"
                          name="sellPrice"
                          id="card-cvc"
                          placeholder="Sell Price"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="col-span-6">
                  <legend className="mb-1 block text-sm text-gray-600">
                    Devise Info
                  </legend>

                  <div className="-space-y-px rounded-lg bg-white shadow-sm">
                    <div>
                      <label className="sr-only" htmlFor="card-number">
                        Condition
                      </label>

                      <input
                        className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                        type="text"
                        name="condition"
                        id="card-number"
                        placeholder="Phone condition"
                      />
                    </div>

                    <div className="flex -space-x-px">
                      <div className="flex-1">
                        <label
                          className="sr-only"
                          htmlFor="card-expiration-date"
                        >
                          Uses
                        </label>

                        <input
                          className="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                          type="text"
                          name="uses"
                          id="card-expiration-date"
                          placeholder="Uses time"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>
                <div className="col-span-6">
                  <button
                    className="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                    type="submit"
                  >
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
