<style lang="scss" scoped>
.tinyMce-container{
    margin-top: 3%;
    margin-bottom: 3%;
}
</style>
<template> 
    <div> 
        <pre v-html="description"></pre>  
        <editor v-model="description"></editor>   
    </div>
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