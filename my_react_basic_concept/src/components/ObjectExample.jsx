const UserCard = () => {

    //object creation
    const user = {

        name: "shubhangi",
        city: "Ahilyanagar",
        profession: "Software Developer"
    };

    const user2 = {

        name: "Aniket",
        city: "Parner",
        profession: "IAS"
    };

    const user3 = {

        name: "Ravindra",
        city: "Jalgaon",
        profession: "Production Engineer"
    };

    //  nested Object declaration

    const employee = {
        name: "Shubhangi",
        department: "IT",
        address: {

            city: "pune",
            pincode: 435667
        }

    };

    const employee1 = {
        name: "Bharat",
        department: "Driver",
        address: {

            city: "pune",
            pincode: 435667
        }

    };

    // complex object in array

    const products = [
        {

            id: 101,
            name: "laptop",
            price: 5399,
            specs: {

                ram: "8gb",
                storage: "512GB SSD"

            }
        },

        {

            id: 102,
            name: "Mobile",
            price: 52467,
            specs: {

                ram: "7gb",
                storage: "512GB SSD"

            }
        },

        {

            id: 103,
            name: "Tab",
            price: 5678,
            specs: {

                ram: "6gb",
                storage: "512GB SSD"

            }
        },


    ]

    return (
        <>


            <div className="container border-rounder">
                <h2>User Details 1 object Example </h2>

                <p> <b>Name: </b>{user.name} </p>
                <p> <b>city: </b>{user.city} </p>
                <p> <b>Profession: </b>{user.profession} </p>

                <hr />

                <p> <b>Name: </b>{user2.name} </p>
                <p> <b>City: </b>{user2.city} </p>
                <p> <b>Profession: </b>{user2.profession} </p>


                <hr />

                <p> <b>Name: </b>{user3.name} </p>
                <p> <b>City: </b>{user3.city} </p>
                <p> <b>Profession: </b>{user3.profession} </p>

                <hr />

                <h1> Nested Object Example</h1>


                <h2>User Details Nested object Example - 1 </h2>

                <p> <b>Name: </b>{employee.name} </p>
                <p> <b>department: </b>{employee.department} </p>
                <p> <b>Pincode: </b>{employee.address.pincode} </p>
                <p> <b>City: </b>{employee.address.city} </p>


                <hr />



                <h2>User Details nested object Example-2 </h2>

                <p> <b>Name: </b>{employee1.name} </p>
                <p> <b>department: </b>{employee1.department} </p>
                <p> <b>Pincode: </b>{employee1.address.pincode} </p>
                <p> <b>City: </b>{employee1.address.city} </p>

                <hr />


                <h2>Complex object in array Example</h2>


                {
                    products.map((p) => (

                        <div key={p.id} className="border p-3 m-4 border-router">


                            <h3> Name : {p.name}</h3>
                            <h3> price : {p.price}</h3>
                            <h3> Ram : {p.specs.ram}</h3>
                            <h3> Storage: {p.specs.storage}</h3>
                        </div>
                    ))}
                <hr />

                {
                    products.map((m) => (

                        <div key={m.id} className="border p-3 m-4 border-router">


                            <h3> Name : {m.name}</h3>
                            <h3> price : {m.price}</h3>
                            <h3> Ram : {m.specs.ram}</h3>
                            <h3> Storage: {m.specs.storage}</h3>
                        </div>
                    ))}

                <hr />
                {
                    products.map((s) => (

                        <div key={s.id} className="border p-3 m-4 border-router">


                            <h3> Name : {s.name}</h3>
                            <h3> price : {s.price}</h3>
                            <h3> Ram : {s.specs.ram}</h3>
                            <h3> Storage: {s.specs.storage}</h3>
                        </div>
                    ))}





            </div>



        </>
    )
};
export default UserCard
