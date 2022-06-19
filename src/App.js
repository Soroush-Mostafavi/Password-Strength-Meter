import React, { useState } from 'react';
import zxcvbn from 'zxcvbn'

const App = () => {
  const [password, setPassword] = useState('')
  const testResult = zxcvbn(password);
  const num = testResult.score * 100 / 4;
  const Changepassword = () => ({
    width: `${num}%`,
    height: "7px",
    background: ProgressColor()
  })

  const PassLabel = () => {
    switch (testResult.score) {
      case 0:
        return 'start 😨';
      case 1:
        return 'VeryWeak 😐';
      case 2:
        return 'Weak 🙂';
      case 3:
        return 'Good 😊';
      case 4:
        return 'Strong 😎';
      default:
        return 'none';
    }
  }

  const ProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  }
  return (
    <div className=" text-center flex flex-col justify-center items-center h-40">
      <input class="block w-96 p-3 rounded-xl mb-4 border-2 border-blue-600 mt-20"
        type='password' maxLength='15' onChange={e => setPassword(e.target.value)} />
      <div className="progress w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
        style={{ height: "7px" }}>
        <div className="progress-bar bg-blue-600 h-2.5 rounded-full"
          style={Changepassword()} >
        </div>
        <p style={{ color: ProgressColor() }}><h2 className="mt-3">{PassLabel()}</h2></p>
        {password.length === 15 ? <p className="text-red-400 font-bold text-2xl ">

          You can not select more than 15 digits  <h2 className="text-center text-4xl pt-10">😡 </h2>
        </p> : <p class='text-lg text-black font-bold'>  Code :  <span style={{ color: ProgressColor() }}>{password.length}</span>  Digit</p>}
      </div>
    </div>
  );
}

export default App;
