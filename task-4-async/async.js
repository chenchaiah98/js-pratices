const apiCall = async function(id){
    const url=`https://jsonplaceholder.typicode.com/todos/${id}`;
    try{
        const apiData = await fetch(url);
       if(!apiData.ok){
        throw new Error(`page error :${apiData.status}`);
       }
       const responseData = await apiData.json();
       return responseData;
    }
    catch(error){
        console.log(error);
        throw(error);
    }
}
async function getTodo(id){
    try {
      const Data = await apiCall(id);
      console.log(Data);
    } catch (error) {
      console.log(error);
    }
  }
  
  getTodo(10);