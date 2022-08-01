<template>
    <div>
        <div>

        </div>
        <div class="infos">
            <h4>Contact me</h4>
            <a href="mailto:hedya.uhllanda@live.com"><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt=""></a>
            <a href="http://www.linkedin.com/in/hedwige-fotoh-uhllanda-3a9285225/" target="_blank" rel="noopener noreferrer"> <img src="https://www.pngrepo.com/download/303299/linkedin-icon-2-logo.png" alt=""> </a>
            <a href="https://github.com/hedyah/trivia-frontend" target="_blank" rel="noopener noreferrer"> <img src="https://i.pinimg.com/originals/30/b1/50/30b150cd489202db131009ac9540cec0.png" alt=""> </a>
            
        </div>
        
    </div>
</template>

<script>
    export default {
        name:"EmailComp"
    }
</script>

<style lang="scss" scoped>

.infos{
    background-color: #000000;
    padding: 1px;
    h4{
    color: #000000;
    font-family: cursive;
    font-size: 24px;
    text-align: center;
    margin: 15px;
    background-image: linear-gradient(#0A111F,#FCA311);
    
    }
    a{
    margin-left: 22.5%;
    img{
        width: 3%;
        padding: 2px;
        background-color: #14213D;
        border: #E5E5E5 1px solid;
        border-radius: 20px;
    }
    }
}
</style>