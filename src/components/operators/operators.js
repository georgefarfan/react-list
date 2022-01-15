import React from "react";
import "./operators.css";

class Operators extends React.Component {
  render() {
    return (
      <div className="OperationKeys">
        <table>
          <tr>
            <td>
              <input type="button" value="c"></input>
            </td>
            <td>
              <input type="button" value="±"></input>
            </td>
            <td>
              <input type="button" value="%"></input>
            </td>
            <td>
              <input type="button" value="÷"></input>
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="7"></input>
            </td>
            <td>
              <input type="button" value="8"></input>
            </td>
            <td>
              <input type="button" value="9"></input>
            </td>
            <td>
              <input type="button" value="x"></input>
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="4"></input>
            </td>
            <td>
              <input type="button" value="5"></input>
            </td>
            <td>
              <input type="button" value="6"></input>
            </td>
            <td>
              <input type="button" value="-"></input>
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="1"></input>
            </td>
            <td>
              <input type="button" value="2"></input>
            </td>
            <td>
              <input type="button" value="3"></input>
            </td>
            <td>
              <input type="button" value="+"></input>
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="0"></input>
            </td>
            <td>
              <input type="button" value=","></input>
            </td>
            <td>
              <input type="button" value="="></input>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Operators;
