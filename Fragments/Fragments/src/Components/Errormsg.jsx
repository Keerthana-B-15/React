function ErrorMessgage({ Foodlist }){
  return(
    <>
      {Foodlist.length === 0 && <h3>I'm still hungry.</h3>}
    </>
  );  
}

export default ErrorMessgage