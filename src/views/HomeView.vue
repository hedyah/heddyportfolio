<template>
  <div>
  <hello-world />
  <AboutComp/>
  <ProjectComp/>
  <EmailComp/>
  </div>
</template>

<script>
import ProjectComp from '@/components/ProjectComp.vue'
  import HelloWorld from '../components/HelloWorld'
import EmailComp from '@/components/EmailComp.vue'
import AboutComp from '@/components/AboutComp.vue'

  export default {
    name: 'HomeView',

    components: {
      HelloWorld,
        ProjectComp,
        EmailComp,
        AboutComp,
    },
  }
</script>