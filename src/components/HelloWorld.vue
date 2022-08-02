<template>
  <div>
    <h1>Hedwige Fotoh Uhllanda</h1>
    <h3>Full-Stack Developer</h3>
    
    <div class="logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" alt="vue">
      
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="css">
      
      <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="html">
      
      <img src="https://www.logolynx.com/images/logolynx/00/00429ca224699ddf60ce05b46ef08709.jpeg" alt="flask">
      
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png" alt="python">
      
      <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="javascript">
      
      <img src="https://cdn-icons-png.flaticon.com/512/1265/1265531.png" alt="sql">
      
      <img src="https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_white-transparent.png" alt="mariadb">
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    
  }
</script>

<style lang="scss" scoped>


h1{
  color:#14213D;
  text-align: center;
  margin: 25px;
  font-family:cursive;
  font-size: 50px;
  background-color: #FCA311;
  background-image: linear-gradient(rgb(255, 136, 0), #FCA311);
  border: #FCA311 1px solid;
  

}
h3{
  color: #E8E8E8;
  text-align: center;
  margin: 30px;
  font-size: 28px;
  font-family: cursive;
  background-image: linear-gradient(black, #0A111F);
  border: black 1px solid;
  
}
.logo{
  margin-left: 15%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr  ;
  
  img{
    margin: 25px;
    width: 20%;
    height:65px;
    background-color: #0A111F;
    padding: 3px;
    border: black 1px solid;
  }
  p{
    color: #040403;
    margin: 10px;
  }
}
@media only screen and (max-width: 550px){
  .logo{
    grid-template-columns: 1fr 1fr;
    img{
      width: 28%;
    }
  }
  
}
@media only screen and (min-width: 768px) {
  .logo{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    img{
      width: 32%;
    }
    
    
}
}
@media only screen and (min-width: 1200px) {
  .logo{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    img{
      width: 20%;
    }
    
}
}
</style>