import React from "react";
import BaseCheese from "../images/BaseCheese.png";
import Basil from "../images/Basil.png";
import Mushroom from "../images/Mushroom.png";
import Olive from "../images/Olive.png";
import Pineapple from "../images/Pineapple.png";
import PizzaBase from "../images/PizzaBase.png";
import Tomato from "../images/Tomato.png";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

function Custmize(props) {
  const { ingredients, setIngredients } = props;
  const history = useHistory();

  const changeIngrediants = (value, name) => {
    const newIngredients = JSON.parse(JSON.stringify(ingredients));
    newIngredients[name] = value;
    setIngredients(newIngredients);
    localStorage.setItem('ingredients', JSON.stringify(newIngredients));
  };

  const handelCheckout = () => {
    history.push("./checkout");
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, padding: 40 }}>
        <div style={{ maxHeight: 500, maxWidth: 500, position: "relative" }}>
          <motion.div
            initial={{ scale: "0" }}
            animate={{
              // y: ingredients["cheese"] ? 100 : -100,
              // opacity: ingredients["cheese"] ? 1 : 0,
              scale: ingredients["cheese"] ? "1" : "0",
            }}
            transition={{ duration: "0.3" }}
            className="cheese z1"
          >
            <img src={BaseCheese} alt="pizza base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: "0" }}
            animate={{
              y: ingredients["basil"] ? "100" : "-100",
              opacity: ingredients["basil"] ? '1' : '0',
            }}
            transition={{ duration: "1" }}
            className="ingredients z4"
          >
            <img
              src={Basil}
              alt="basil"
              height="100%"
              width="100%"
              className="ingrediants"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: "0" }}
            animate={{
              y: ingredients["mushroom"] ? "100" : "-100",
              opacity: ingredients["mushroom"] ? "1" : "0",
            }}
            transition={{ duration: "1" }}
            className="ingredients z4"
          >
            <img
              src={Mushroom}
              alt="mushroom"
              height="100%"
              width="100%"
              className="ingrediants"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: "0" }}
            animate={{
              y: ingredients["olive"] ? "100" : "-100",
              opacity: ingredients["olive"] ? "1" : "0",
            }}
            transition={{ duration: "1" }}
            className="ingredients z4"
          >
            <img
              src={Olive}
              alt="olive"
              height="100%"
              width="100%"
              className="ingrediants"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: "0" }}
            animate={{
              y: ingredients["pineapple"] ? "100" : "-100",
              opacity: ingredients["pineapple"] ? "1" : "0",
            }}
            transition={{ duration: "1" }}
            className="ingredients z3"
          >
            <img
              src={Pineapple}
              alt="pineapple"
              height="100%"
              width="100%"
              className="ingrediants"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: "0" }}
            animate={{
              y: ingredients["tomato"] ? "100" : "-100",
              opacity: ingredients["tomato"] ? "1" : "0",
            }}
            transition={{ duration: "1" }}
            className="ingredients z4"
          >
            <img
              src={Tomato}
              alt="tomato"
              height="100%"
              width="100%"
              className="ingrediants"
            />
          </motion.div>
          <motion.div transition={{ duration: "1" }} className="">
            <img src={PizzaBase} alt="pizzabase" height="100%" width="100%" />
          </motion.div>
        </div>
      </div>
      <div style={{ flex: 1, padding: 40 }}>
        <label className="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            onChange={(event) =>
              changeIngrediants(event.currentTarget.checked, "pineapple")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredients["basil"]}
            onChange={(event) =>
              changeIngrediants(event.currentTarget.checked, "basil")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Olive
          <input
            type="checkbox"
            checked={ingredients["olive"]}
            onChange={(event) =>
              changeIngrediants(event.currentTarget.checked, "olive")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredients["tomato"]}
            onChange={(event) =>
              changeIngrediants(event.currentTarget.checked, "tomato")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredients["mushroom"]}
            onChange={(event) =>
              changeIngrediants(event.currentTarget.checked, "mushroom")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Cheese
          <input
            type="checkbox"
            checked={ingredients["cheese"]}
            onChange={(event) =>
              changeIngrediants(event.currentTarget.checked, "cheese")
            }
          />
          <span className="checkmark"></span>
        </label>
        <button onClick={handelCheckout} className="proceedToCheckout">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Custmize;
