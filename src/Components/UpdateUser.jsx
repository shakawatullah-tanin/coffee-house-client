import React from "react";

const UpdateUser = () => {
  return (
    <div className="update mx-auto  p-12">
      <div className="text-center">
        <h1>Add New Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <div>
        <form>
          <div className="grid grid-cols-2 my-4 ">
            <div className="">
              <label>Name</label>
              <br />
              <input type="text" placeholder="Coffee Name" />
            </div>
            <div>
              <label>Chef</label>
              <br />
              <input type="text" placeholder="Chef" />
            </div>

            <div>
              <label>Supplier</label>
              <br />
              <input type="text" placeholder="Supplier" />
            </div>

            <div>
              <label>Taste</label>
              <br />
              <input type="text" placeholder="Test" />
            </div>

            <div>
              <label>Category</label>
              <br />
              <input type="text" placeholder="Type" />
            </div>

            <div>
              <label>Details</label>
              <br />
              <input type="text" placeholder="Details" />
            </div>
            <div className="">
                <label >Photo</label><br />

              <input type="url" name="" id="" />
            </div>
          </div>
          <button className="w-full text-white p-2 rounded-lg cursor-pointer font-semibold addbtn my-4 border">Add Coffee</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
