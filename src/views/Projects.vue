<template>
    <div>
        <SideBar />
        <Navigation />
        <div class="sm:mt-20 mt-10 text-slate-500 whitespace-nowrap sm:ml-20 ml-0 p-5 sm:p-1" :class="[$store.state.SideBarCollapsed ? 'ml-20' : 'lg:ml-72']">
            <div class="text-xs font-bold inline-block hover:underline cursor-pointer">Explore</div>
            <div class="text-xs inline-block"> > </div>
            <div class="text-xs text-black font-bold inline-block hover:underline cursor-pointer">Projects</div>
            <h1 class="text-3xl font-bold text-slate-700 my-5">Explore Projects</h1>
            <div class="flex md:flex-row sm:flex-col-reverse w-full flex-col-reverse justify-between border-b-2 border-slate-100">
                <div class="flex flex-row justify-start flex-initial">
                    <div class="mr-5 p-1 border-b-2 border-gray-700 text-slate-900 cursor-pointer">All</div>
                    <div class="mr-5 p-1 border-b-2 border-white hover:border-gray-300 cursor-pointer">Most Starred</div>
                    <div class="mr-5 p-1 border-b-2 border-white hover:border-gray-300 cursor-pointer">Trending</div>
                </div>
                <div class="w-full flex sm:flex-row flex-col text-sm flex-2 w-3/5">
                    <input class="sm:mr-1 m-0.5 w-full md:ml-28 sm:w-4/5 p-1 border-2 rounded border-gray-300 focus:border-white" type="text" placeholder="filter by name">
                    <select class="sm:mr-1 m-0.5 w-full sm:w-2/5 p-1 cursor-pointer hover:bg-gray-300/50 border-2 border-gray-300 hover:border-gray-500 rounded">
                        <option disabled selected hidden>Language</option>
                    </select>
                    <select class="sm:mr-1 m-0.5 w-full sm:w-2/5 p-1 cursor-pointer hover:bg-gray-300/50 border-2 border-gray-300 hover:border-gray-500 rounded">
                        <option disabled selected hidden>Updated date</option>
                    </select>
                </div>
            </div>
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