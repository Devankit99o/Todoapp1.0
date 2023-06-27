import "./App.css";
import Header from "./Mycomponent/Header";
import Todos from "./Mycomponent/Todos";
import Footer from "./Mycomponent/Footer";
import AddTodo from "./Mycomponent/AddTodo";
import About from "./Mycomponent/About";

import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const ondelete = (todo) => {
    console.log("i'm deleted", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const ondone = (todo) => {
    console.log("i'm done", todo);
  };

  const addTodo = (title, desc) => {
    console.log("adding ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, mytodo]);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //  {
  //   sno:1,
  //   title:"GO TO MARKET",
  //   desc:"Today i'm going to market",

  //  },

  //  {
  //   sno:2,
  //   title:"GO TO HOME",
  //   desc:"Today i'm going to home..",

  //  },

  //  {
  //   sno:3,
  //   title:"GO TO COLLEGE",
  //   desc:"Today i'm going to college",

  //  }

  //
  //  ]);

  return (
    <Router>
      <Header title="ToDo List" home={true} />

      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <Todos todos={todos} ondelete={ondelete} ondone={ondone} />
                <AddTodo addTodo={addTodo} />
              </div>
            );
          }}
        ></Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
