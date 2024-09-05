import "../styles/SampleManagement.css";

function SampleManagement() {
  return (
    <>
      <div className="loginContainer d-flex flex-column justify-content-center align-content-center flex-wrap flex-grow-1">
        <h4 className="display-4 text-center fw-bold mb-5">
          Sample Management
        </h4>
        {/* <div className="table-responsive-md"> */}
        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-primary">
              <th scope="col">Request UD</th>
              <th scope="col">Date</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Destination lab</th>
              <th scope="col">Test Name</th>
              <th scope="col">Status</th>
              <th scope="col">Results</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">YY-001</th>
              <td>13-07-24 11:31</td>
              <td>Foulen ben Foulen</td>
              <td>LAB X</td>
              <td>VB12</td>
              <td>Waiting</td>
              <td>Waiting</td>
            </tr>
            <tr>
              <th scope="row">YY-002</th>
              <td>13-07-24 12:10</td>
              <td>Foulen ben Foulen</td>
              <td>LAB X</td>
              <td>FOLATE</td>
              <td className="text-success text-bold">Ready</td>
              <td>Download</td>
            </tr>
            <tr>
              <th scope="row">YY-003</th>
              <td>13-07-24 13:01</td>
              <td>Foulen ben Foulen</td>
              <td>LAB Y</td>
              <td>Blood Gaz</td>
              <td>Ready</td>
              <td>Download</td>
            </tr>
            <tr>
              <th scope="row">YY-004</th>
              <td>13-07-24 14:15</td>
              <td>Foulen ben Foulen</td>
              <td>LAB X</td>
              <td>VB12</td>
              <td>Rejected</td>
              <td>--</td>
            </tr>
            <tr>
              <th scope="row">YY-005</th>
              <td>14-07-24 10:30</td>
              <td>Foulen ben Foulen</td>
              <td>LAB X</td>
              <td>FT4</td>
              <td>Ready</td>
              <td>Download</td>
            </tr>
            <tr>
              <th scope="row">YY-006</th>
              <td>14-07-24 11:01</td>
              <td>Foulen ben Foulen</td>
              <td>LAB Y</td>
              <td>Blood Gaz</td>
              <td>Ready</td>
              <td>Download</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </>
  );
}

export default SampleManagement;
