<template>
    <div>
        <SideBar />
        <Navigation />
        <div class="mt-20" :class="[$store.state.SideBarCollapsed ? 'ml-20' : 'ml-72']">
        </div>
    </div>
</template>
<script>
import Navigation from "../components/Navigation.vue"
import SideBar from "../components/SideBar.vue"

export default {
    components: { Navigation, SideBar }
}

</script>
<style></style>