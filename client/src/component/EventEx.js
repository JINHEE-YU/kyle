export default ()=>{
    function showName(){
        alert('Jin');
      }
      function showAge(age){
        alert(age);
      }
      function showText(e){
        console.log(e.target.value);
    }

    return (
        <div>
            <h1>Event 적용</h1>

            <button onClick={showName}>Show name</button>
            <button onClick={
            ()=>{showAge(19)}
            }>Show 19 age</button>

            <input type="input" onChange={showText}>
            </input>
            <input type="input" onChange={(e)=>{console.log(e.target.value)}}/>
        </div>
    );
}