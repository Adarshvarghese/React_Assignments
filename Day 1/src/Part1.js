


function Part1(){
    return(
      <div  className="p1">
        <form>  
  
  <label> Firstname </label>         
  <input type="text" name="firstname" size="15"/>  
  <label> Middlename: </label>     
  <input type="text" name="middlename" size="15"/> <br/> <br/>  
  <label> Lastname: </label>         
  <input type="text" name="lastname" size="15"/> <br/> <br/>  
    
  <label>   
  Course :  
  </label>   
  <select>  
  <option value="Course">Course</option>  
  <option value="BCA">BCA</option>  
  <option value="BBA">BBA</option>  
  <option value="B.Tech">B.Tech</option>  
  <option value="MBA">MBA</option>  
  <option value="MCA">MCA</option>  
  <option value="M.Tech">M.Tech</option>  
  </select>  
    
 
  <label>   
  Gender :  
  </label>  
  <input type="radio" name="male"/> Male   
  <input type="radio" name="female"/> Female
  <input type="radio" name="other"/> Other  
    
  <br/>  
  <label>   
  Phone :  
  </label>  
  <input type="text" name="country code"  value="+91" size="2"/>  
  <input type="text" name="phone" size="10"/>   
  Address  <br/>
    
  <textarea cols="80" rows="5" value="address">  
  </textarea>  <br/>
  
  Email:  
  <input type="email" id="email" name="email"/> <br/>  
   
  Password:  
  <input type="Password" id="pass" name="pass"/>  <br/> 
  
  Re-type password:  
  <input type="Password" id="repass" name="repass"/> <br/> <br/>  
  <input type="button" value="Submit"/>  
  </form>  
         

      </div>
    );
}

export default Part1;