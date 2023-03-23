<template>
    <div>
        <div class="flex flex-col justify-between fixed top-0 left-0 transition-all duration-200 ease-in-out h-screen z-0 bg-gray-100 border-r-2 border-slate-300 text-xs"
            :class="[$store.state.SideBarCollapsed ? 'w-12' : 'lg:w-64 sm:flex hidden']">
            <div class="mt-20 flex-col">
                <div
                    class="rounded-lg hover:bg-gray-200 p-1.5 mr-1 ml-3 mb-2 font-bold h-8 cursor-pointer flex flex-row justify-start">
                    <img src="../assets/direction.png" class="w-5 h-5 mr-3" />
                    <div v-if="!$store.state.SideBarCollapsed" class="w-50 lg:block hidden">Explore</div>
                </div>
                <div class="rounded-lg bg-gray-200 p-1.5 m-1 ml-3 h-8 cursor-pointer font-bold flex flex-row justify-start">
                    <img src="../assets/projects.png" class="w-5 h-5 mr-3" />
                    <div v-if="!$store.state.SideBarCollapsed" class="w-50 lg:block hidden">Projects</div>
                </div>
                <div class="rounded-lg hover:bg-gray-200 p-1.5 m-1 ml-3 h-8 cursor-pointer flex flex-row justify-start">
                    <img src="../assets/groups.png" class="w-5 h-5 mr-3" />
                    <div v-if="!$store.state.SideBarCollapsed" class="w-50 lg:block hidden">Groups</div>
                </div>
                <div class="rounded-lg hover:bg-gray-200 p-1.5 m-1 ml-3 h-8 cursor-pointer flex flex-row justify-start">
                    <img src="../assets/topics.png" class="w-5 h-5 mr-3" />
                    <div v-if="!$store.state.SideBarCollapsed" class="w-50 lg:block hidden">Topics</div>
                </div>
                <div class="rounded-lg hover:bg-gray-200 p-1.5 m-1 ml-3 h-8 cursor-pointer flex flex-row justify-start">
                    <img src="../assets/scissors.png" class="w-5 h-5 mr-3" />
                    <div v-if="!$store.state.SideBarCollapsed" class="w-50 lg:block hidden">Snippets</div>
                </div>
            </div>
            <div @click="ToggleSideBar" class="p-2 cursor-pointer text-sm bg-gray-100 hover:bg-gray-200">
                <div v-if="!$store.state.SideBarCollapsed" class="lg:block hidden">Collapse sideBar</div>
                <div v-else>>></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        ToggleSideBar() {
            return this.$store.commit("ToggleSideBar");
        },
    },
};
</script>
<style></style>
