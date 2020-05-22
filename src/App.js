import React from "react";
import { useState } from "react";
import MssgCard from "./mssgCard";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import firestore from "./Firestore";
// import firebase from'firebase'
import {useEffect } from 'react'
import firebase from 'firebase';
import { Typography } from '@material-ui/core';
import "./App.css";
function App() {



  const [inptText, setInptText] = useState("");//temp message funct call
  const[inptMssg,setInptMssg]=useState('')//final message
  const [inptNameText, setInptNameText] = useState("");//temp name funct call variable
  const[inptNameMssg,setInptNameMssg]=useState('')//actual name
  
	const [mssg, setMssg] = useState([
		{ name: "hayden", message: "here is the mssg " }
	]);

	const GetText = (e) => {
    setInptText(e.target.value);
    
  };





  const addUser = (msg,name) => {
   console.log('here',msg,name)
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection('users').add({
      name:name,
      message:msg
    });  
    

  };


  const SendBtn=async()=>
{
  await console.log('click')
  await setInptMssg(inptText);
 await setInptText('');
 await console.log(inptText)
 await SendMssg()
 
}

useEffect(
()=>{GetData()},
[]
)
const GetNameText = (e) => {
  setInptNameText(e.target.value);
  
};


const NameOrWel=()=>{
  if(inptNameMssg===''){
    return(<div><TextField id="name-input" size="small" autoFocus placeholder="Enter Your Name" onChange={GetNameText} variant="outlined" value={inptNameText} />
    <Button variant="contained" color="primary" disableElevation  onClick={SendNameBtn}>
     Send
    </Button></div>);


  }
  else{
    return(
      <div>
<Typography gutterBottom variant='h5'>User:{inptNameMssg}</Typography>

      </div>
    )
  }

}


const GetData=()=>
{
  const db = firebase.firestore();
  db.collection("users")
.get()
.then(querySnapshot => {
  const data = querySnapshot.docs.map(doc => doc.data());
  console.log(data); // array of cities objects
  setMssg(data)}
)


}
useEffect(() => {
  const interval = setInterval(() => {
    GetData();
  }, 5000);
  return () => clearInterval(interval);
}, []);


const SendMssg=async()=>{
  await GetData()
let temp=[...mssg]
await temp.push({name:inptNameMssg,message:inptText})
await console.log('before send',temp)
await addUser(inptText,inptNameMssg)
await setMssg(temp)
}


const SendNameBtn=()=>
{
setInptNameMssg(inptNameText);
setInptNameText('');
console.log(inptNameText)
}
	return (
		<div className="App">
			{/* <h1>Chat App name</h1> */}
      <Typography gutterBottom variant='h3'>Group To-Do</Typography>
        <NameOrWel></NameOrWel>
      {/* <form  noValidate autoComplete="off"> */}
      {/* <input onChange={GetText}></input> */}

        {/* </form> */}


			<div>
				<Grid container spacing={3}>
					<Grid item xs={1} sm={3}></Grid>
					<Grid item xs={12} sm={6}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								{mssg.map((i) => (
									<div key={new Date().getTime()+i.id+i.message}>
										<MssgCard name={i.name} message={i.message} />
									</div>
								))}
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={1} sm={3}></Grid>
				</Grid>

			</div>
      {/* <form  noValidate autoComplete="off"> */}
      {/* <input onChange={GetText}></input> */}
      <TextField id="mssg-input" size="small" onChange={GetText} variant="outlined" value={inptText} placeholder="Enter To DO" />
      <Button variant="contained" color="primary" disableElevation  onClick={SendBtn}>
       Send
      </Button>
        {/* </form> */}

		</div>
	);
}

export default App;

const MessgContainer = (mssg) => {
	return (
		<div>
			<h5>{mssg.name}</h5>
			<h2>{mssg.message}</h2>
		</div>
	);
};

