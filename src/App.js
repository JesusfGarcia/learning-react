import logo from "./logo.svg";
import "./App.css";
import React from "react";

const MyComponent = (props) => {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    console.log("yo me ejecuto al inicio");
  }, [value]);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="ingrese su nombre"
      />
    </div>
  );
};

function OtherComponent({ name }) {
  return <div>hola, bienvenido {name}</div>;
}

class ComponentClass extends React.Component {
  constructor(props) {
    console.log("hola desde el constructor");
    super();
    this.state = {
      name: "",
      phone: "",
      date: new Date(),
    };
  }

  changeName = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  onClick = () => {
    alert(`Bienvenido ${this.state.name}`);
  };

  componentWillMount() {
    console.log("yo voy antés");
  }

  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hola mundo</h1>
        <h2>La hora es: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

const Carta = (props) => {
  return <div className="carta">{props.children}</div>;
};

const array = ["Jesús", "Gabriel", "Noemi", "Luis", 'Sofía'];

function App() {
  return (
    <div className="contenedor">
      {array.map((name) => {
        return <Carta>Bienvenido {name}</Carta>;
      })}
    </div>
  );
}

export default App;
