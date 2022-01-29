import Numbers from "../../components/Numbers/Numbers";
import Operators from "../../components/Operators/Operators";
import Button from "../../components/Button/Button";
import React from "react";

class PanelNumbers extends React.Component {
  render() {
    return (
      <div>
        <section className="Numbers">
          <Numbers />
        </section>
        <section className="Operators">
          <Operators />
        </section>
        <div>
          <Button></Button>
        </div>
      </div>
    );
  }
}

export default PanelNumbers;
