<style lang="scss" scoped>
.tinyMce-container{
    margin-top: 3%;
    margin-bottom: 3%;
}
</style>
<template>
    <v-container fluid>
        <v-layout row wrap>  
            <v-flex xs12> 
                <pre v-html="description"></pre>
            </v-flex>
            <v-flex xs12> 
                <editor v-model="description"></editor>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Editor from '@tinymce/tinymce-vue';


// Uncomment to install in component specifically. Be sure to comment out the part in main.js
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
import "tinymce/tinymce"
import "tinymce/themes/silver" 
import "../../public/skins/ui/oxide/skin.min.css"
import "../../public/skins/ui/oxide/content.min.css"
import "../../public/skins/content/default/content.min.css" 
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


export default {
    name: 'home',
    components:{
        Editor,
    },
    data() {
        return {
            description:'',
        };
    },
}
</script>