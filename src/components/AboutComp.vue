<template>
    <div>
        <div class="picture">
            <h3>About me</h3>
      <img src="@/assets/me.png" alt="">
      
      <p>Hello World! My Name is Hedwige Uhllanda, but you can call me Heddy! 
        I am orginally from Germany, my family and I moved to Canada in 2011, 
        after I graduated High School I moved to Finland to study Physiotherapy. 
        I currently speak three languages German, English and Finnish. 
        I moved back to Canada in 2018 I was working in the retail sector 
        for a long time before I decided to 
        study programming and now I am a Full-Stack Developer! 
        I studied in Innotech Collage and I graduated in July 2022.
        I am currently looking for a Full time job in the Tech industry.
        I am very excited to learn new things about this field and about 
        creating more websites and programs! Outside of tech, my interests are painting,
        arts and crafts, cycling, singing and playing guitar! </p>
    </div>
    </div>
</template>

<script>
    export default {
        name:"AboutComp"
    }
</script>

<style lang="scss" scoped>
.picture{
  background-color: #0A111F;
  padding: 1px;
  img{
    width: 25%;
    margin-left: 38%;
    border: #040403 2px double;
    background-color: #E8E8E8;
    padding: 8px;
    border: white 2px solid;
  }
  p{
    color: #0A111F;
    text-align: center;
    font-size: 19px;
    font-style:normal;
    background-image: linear-gradient(white, #e8e8e8);
    border: white 2px solid;
    padding: 5px;
    margin: 40px;
  }
  h3{
    text-align: center;
    color: #0A111F;
    font-family: cursive;
    font-size: 26px;
    background-image: linear-gradient(white, #e8e8e8);
    margin: 50px;
    border: #FFF 2px solid;
    
  }
}
</style>