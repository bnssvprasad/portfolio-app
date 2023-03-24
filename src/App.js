import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App"> 
    <div className="header">
    <h5>Name : B.N.S.S.V.Prasad <br></br>Designation : Unemployed</h5>
    <h5>Mobile : 6304918821 <br></br>Email ID : bnssvprasad965@gmail.com</h5>
     </div>
    <header className="App-header">
    
         <div className="main">
          <h2>DESCRIPTION :</h2>
          <p>To secure a platform to utilize my skils and abilities in an organization that offers professional growth while being resourceful, innovative and flexible value addition though my service and quality environment where my knowledge is enriched & shared for the growth of the company.</p>
        <h2>EXPERIENCE :</h2>
        <ul>
          <li>Internship at bharat sanchar nigam limited ,Rajahmundry.</li>
          <li>Internship on aircraft detection system.</li>
          <li>Working on health monitoring and soldier tracking using IOT.</li>  </ul>
          <h2>EDUCATION :</h2>
          <table className="table">
  <thead>
    <tr className='table'>
      <th scopeName="col">Qualification</th>
      <th scopeName="col">Institute</th>
      <th scopeName="col">Board/University</th>
      <th scopeName="col">Year</th>
      <th scopeName="col">Grade</th>

    </tr>
  </thead>
  <tbody className='table'>
    <tr>
      <th>B.TECH</th>
      <td>G.I.E.T</td>
      <td>J.N.T.U kakinada</td>
      <td>2017-2021</td>
      <td>6.51</td>

    </tr>
    <tr>
      <th>Intermediate</th>
      <td>Magnet junior college </td>
      <td>Andhra pradesh Intermediate board</td>
      <td>2015-2017</td>
      <td>9.20</td>

    </tr>
    <tr>
      <th>SSC</th>
      <td>S.K.R.R.High school</td>
      <td>Andhra pradesh Intermediate board</td>
      <td>2014-2015</td>
      <td>8.7</td> </tr>
  </tbody>
</table>
<h2>PROJECTS :</h2>

<div className='box'>
<div className="card">
  <div className="card-body">
    <h5>PROJECT 1</h5>
    <p>Working on health monitoring and soldier tracking using IOT.</p>
  </div>
  </div>
  <div className="card">
  <div className="card-body">
    <h5>PROJECT 2</h5>
    <p>Aircraft detection system.</p>
  </div>
   </div>
   </div>

   <h2>DECLARATION :</h2>
   <p>I hereby declare that all the above-mentioned information is true and correct to the best of my knowledge.</p>
   <div className="footer">
        <h5>PLACE : Rajahmundry </h5>
        <h5>SIGNATURE : B.N.S.S.V.Prasad</h5>

        </div>

         </div> </header>
    </div>
  );
}

export default App;
