import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validate } from "./validate";
import { getTypes } from "../../redux/actions";
import Swal from "sweetalert2";
import styles from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/home");

  const [pkData, setPkData] = useState({
    name: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    Types: "",
    // Types2: [],
  });

  //aqui vamos a validar que la informacion que se va ingresar al estado sea correcta con lo requerido
  const [errors, setErrors] = useState({
    // name: "",
    // life: "",
    // attack: "",
    // defense: "",
    // speed: "",
    // height: "",
    // weight: "",
    // image: "",
    // Types: "",
  });

  // const handleInputChange = (e) => {
  //   setPkData({
  //     ...pkData,
  //     [e.target.name]: e.target.value,
  //   });

  //   setErrors((prevtState) =>({
  //     ...prevtState,
  //     ...validate({
  //       ...pkData,
  //       [e.target.name]: e.target.value,
  //     }),
  //   }))
  // };

  const handleInputChange = (e) => {
    setPkData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [e.target.name]: validate({
        ...prevState,
        [e.target.name]: e.target.value,
      })[e.target.name],
    }));
  };

  // Check if any errors exist
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(pkData);
    try {
      if (Object.keys(errors).length === 0) {
        await axios.post("http://localhost:3001/pokemon/", pkData);
        // alert("Pokemon Created SuccesFully");
        Swal.fire({
          title: "¡Good Job.!",
          text: "Pokemon Created SuccesFully",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        navigate("/home");
      } else {
        // alert("Missing Information");
        Swal.fire({
          title: "Error!",
          text: "Missing Information",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      return error.message;
    }
  };

  let types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={`animate__animated animate__fadeIn `}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div>
            <button onClick={handleNavigate}>Go back to Home Page</button>
            <div className={styles.inputs}>
              <div className={styles.input}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={pkData.name.toLowerCase()}
                  onChange={handleInputChange}
                />
                <p>{errors.name}</p>
              </div>
              <div className={styles.input}>
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  name="image"
                  value={pkData.image}
                  onChange={handleInputChange}
                />
                <p>{errors.image}</p>
              </div>
              <div className={styles.input}>
                <label htmlFor="life">Life</label>
                <input
                  type="text"
                  name="life"
                  value={pkData.life}
                  onChange={handleInputChange}
                />
                <p>{errors.life}</p>
              </div>
              <div className={styles.input}>
                <label htmlFor="attack">Attack</label>
                <input
                  type="text"
                  name="attack"
                  value={pkData.attack}
                  onChange={handleInputChange}
                />
                <p>{errors.attack}</p>
              </div>
              <div className={styles.input}>
                <label htmlFor="defense">Defense</label>
                <input
                  type="text"
                  name="defense"
                  value={pkData.defense}
                  onChange={handleInputChange}
                />
                <p>{errors.defense}</p>
              </div>
              <div className={styles.input}>
                <label htmlFor="speed">Speed</label>
                <input
                  type="text"
                  name="speed"
                  value={pkData.speed}
                  onChange={handleInputChange}
                />
                <p>{errors.speed}</p>
              </div>
              <div className={styles.input}>
                <label htmlFor="height">Height</label>
                <input
                  type="text"
                  name="height"
                  value={pkData.height}
                  onChange={handleInputChange}
                />
                <p>{errors.height}</p>
              </div>
              <div className={styles.input}>
                <label htmlFor="weight">Weight</label>
                <input
                  type="text"
                  name="weight"
                  value={pkData.weight}
                  onChange={handleInputChange}
                />
                <p>{errors.weight}</p>
              </div>
            </div>
            <div className={styles.select}>
              <label htmlFor="type">Type 1</label>
              <select
                name="Types"
                value={pkData.Types}
                onChange={handleInputChange}
              >
                <option value="">Select Type</option>
                {types.map((type, index) => (
                  <option key={index} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            {/* <div className={styles.input}>
                <label htmlFor="type 2">Type 2</label>
                <select
                  name="Types"
                  defaultValue="default"
                  value={pkData.Types2}
                  onChange={handleInputChange}
                >
                  <option value="default"></option>
                  {types.map((type, index) => (
                    <option key={index} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div> */}
          </div>
          <button type="submit">Create Pokemon</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
