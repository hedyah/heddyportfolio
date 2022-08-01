<template>
    <div>
        <div>
        <v-footer
                dark
                padless
            >
            <v-card
            class="flex"
            flat
            tile
            >
    

        <v-card-text class="py-2 white--text text-center black">
        {{ new Date().getFullYear() }} — <strong>Hedwige Uhllanda's Portfolio</strong>
        </v-card-text>
        </v-card>
        </v-footer>
        </div>
    </div>
</template>

<script>
    export default {
        name:"FooterComp"
    }
</script>

<style lang="scss" scoped>

</style>