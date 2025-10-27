import React from "react";

const UpdateUser = () => {
  const handleSubmit = (e) =>{

    e.preventDefault()

    const form = e.target;
//new method for collect form data
    const formData = new FormData(form);

    console.log(formData.entries())

    const newCoffee = Object.fromEntries(formData.entries())

    console.log(newCoffee)


    fetch("http://localhost:5000/coffees",{

      method :"POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("data after post",data)
    })



  }
  return (
    <div className="update mx-auto  p-12">
      <div className="text-center">
        <h1>Add New Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 my-4 raleway-font">
            <div className="">
              <label>Name</label>
              <br />
              <input type="text" name="name" placeholder="Coffee Name" />
            </div>
            <div>
              <label>Quantites</label>
              <br />
              <input type="text" name="quantity" placeholder="Quantites" />
            </div>

            <div>
              <label>Supplier</label>
              <br />
              <input type="text" name="supplier" placeholder="Supplier" />
            </div>

            <div>
              <label>Taste</label>
              <br />
              <input type="text" name="test" placeholder="Test" />
            </div>

            <div>
              <label>Category</label>
              <br />
              <input type="text" name="category " placeholder="Type" />
            </div>

            <div>
              <label>Details</label>
              <br />
              <input type="text" name="details" placeholder="Details" />
            </div>
            <div className="">
                <label >Photo</label><br />

              <input type="url" name="photo" id="" />
            </div>
          </div>
          <button className="w-full text-white p-2 rounded-lg cursor-pointer font-semibold addbtn my-4 border">Add Coffee</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
