<template>
    <div>
        <SideBar />
        <Navigation />
        <div class="sm:mt-20 mt-10 text-slate-500 whitespace-nowrap sm:ml-20 ml-0 p-5 sm:p-1"
            :class="[$store.state.SideBarCollapsed ? 'ml-20' : 'lg:ml-72']">
            <div class="text-xs font-bold inline-block hover:underline cursor-pointer">Explore</div>
            <div class="text-xs inline-block"> > </div>
            <div class="text-xs text-black font-bold inline-block hover:underline cursor-pointer"
                @click="$store.dispatch('GetProjects')">Projects</div>
            <h1 class="text-3xl font-bold text-slate-700 my-5">Explore Projects</h1>
            <div
                class="flex md:flex-row sm:flex-col-reverse w-full flex-col-reverse justify-between border-b-2 border-slate-100">
                <div class="flex flex-row justify-start flex-initial">
                    <div @click="$store.dispatch('GetProjects')"
                        class="mr-5 p-1 border-b-2 border-gray-700 text-slate-900 cursor-pointer">All</div>
                    <div class="mr-5 p-1 border-b-2 border-white hover:border-gray-300 cursor-pointer">Most starred</div>
                    <div class="mr-5 p-1 border-b-2 border-white hover:border-gray-300 cursor-pointer">Trending</div>
                </div>
                <div class="w-full flex sm:flex-row flex-col text-sm flex-2 w-3/5">
                    <input
                        class="sm:mr-1 m-0.5 w-full md:ml-28 sm:w-4/5 p-1 border-2 rounded border-gray-300 outline-blue-400 outline-offset-0 focus:outline-offset-2 transition-all duration-50 ease-in-out"
                        type="text" placeholder="filter by name">
                    <select
                        class="sm:mr-1 m-0.5 w-full sm:w-2/5 p-1 cursor-pointer hover:bg-gray-300/50 border-2 border-gray-300 hover:border-gray-500 rounded">
                        <option disabled selected hidden>Language</option>
                    </select>
                    <select
                        class="sm:mr-1 m-0.5 w-full sm:w-2/5 p-1 cursor-pointer hover:bg-gray-300/50 border-2 border-gray-300 hover:border-gray-500 rounded">
                        <option disabled selected hidden>Updated date</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="sm:mt-5 mt-5 mr-5 text-slate-500 sm:ml-20 ml-0 p-5 sm:p-1"
            :class="[$store.state.SideBarCollapsed ? 'ml-20' : 'lg:ml-72']">
            <div v-if="$store.state.projects.length != 0">
                <div v-for="project in $store.state.projects" :id="project.id" class="">
                    <Project :nameSpace="project.name_with_namespace" :repoUrl="project.http_url_to_repo"
                        :imgUrl="project.avatar_url" :discription="project.description" :stars="project.star_count"
                        :forks="project.forks_count" pullRequest="0" issues="0" :lastUpdated="project.last_activity_at" />
                </div>
            </div>
            <div v-else class="sm:mt-36 mt-20 flex flex-col justify-center items-center">
                <div class="flex items-center justify-center">
                    <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navigation from "../components/Navigation.vue"
import SideBar from "../components/SideBar.vue"
import Project from "../components/Project.vue"

export default {
    components: { Navigation, SideBar, Project },
    mounted() {
        this.$store.dispatch('GetProjects')
    }
}

</script>
<style></style>