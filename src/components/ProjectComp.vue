<template>
    <div>
        <div class="project">
        <div>
            <h3>Pizza Project</h3>
            <img src="@/assets/pizza.png" alt="">
            <p>This project we had to create a Pizza website with four pages, I used HTML, CSS, SCSS and Apache.</p>
            <v-btn block color="black"><a href="https://github.com/hedyah/professional-pizzawebsite.git">Front end code</a></v-btn>
            <v-btn block color="black" ><a href="http://profpizzawebsite.ml">See the website</a></v-btn>

        </div>
        
        <div>
            <h3>Foodie Project</h3>
            <img src="@/assets/foodie.png" alt="">
            <p>This project we had to create a sample website that mimics a food delivery website, I used Vue, Vuetify, HTML,SCSS, CSS, Python, FLask, MariaDB and SQL.</p>
            <v-btn block color="black"><a href="https://github.com/hedyah/Foodie-Project.git">Front end code</a></v-btn>
            <v-btn block color="black"><a href="https://github.com/hedyah/foodie_api_backend.git" >Back end code</a></v-btn>
        </div>
        <div>
            <h3>Trivia Project</h3>
            <img src="@/assets/trivia.png" alt="">
            <p>This project we had to bring our own ideas, and I created a trivia webiste that allows users to play fun quizzes and 
                create quizzes when they make an account. I used HTML, CSS, VUE, Vuetify, Flask, Python, Apache, MariaDB and SQL.</p>
            <v-btn block color="black"><a href="https://github.com/hedyah/trivia-frontend.git">Front end code</a></v-btn>
            <v-btn block color="black"><a href="https://github.com/hedyah/trivia-backend.git">Back end code</a></v-btn>
            <v-btn block color="black"><a href="http://cooltrivia.ml">See the website</a></v-btn>
        </div>
        <div>
            <h3>Portfolio Project</h3>
            <img src="@/assets/portfolio.png" alt="">
            <p>This project I created my portfolio, and all my projects are listed here, and I used HTML,CSS, Vue and Apache.</p>
            <v-btn block color="black"><a href="https://github.com/hedyah/heddyportfolio.git">Front end code</a></v-btn>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"ProjectComp"

    }
</script>

<style lang="scss" scoped>
.project{
    display: grid;
    grid-template-columns: 1fr 1fr ;
   
    div{
        margin: 30px;
        border: 2px solid #E8E8E8 ;
        border-radius: 8px;
        background-color: #0A111F;
        img{
            width: 75%; 
            margin-left: 13%;
            padding: 3px;
            background-color: #E8E8E8;
        }
        h3{
        color: #0A111F;
        text-align: center;
        font-size: 25px;
        font-family: cursive;
        border-radius: 3px;
        background-image: linear-gradient(rgb(255, 136, 0), #FCA311);
        margin: 12px;
        }
        p{
            margin: 10px;
            color: #E8E8E8;
            text-align: center;
            font-style: normal;
            font-size: 18px;
            padding: 5px;
            background-color: #000000;
        }
        a{
            margin: 10px;
        }
    }
}
</style>