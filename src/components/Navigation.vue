<template>
    <div class="fixed top-0 left-0 right-0 flex flex-row justify-end w-full p-2 bg-indigo-900 sm:h-16 h-12 text-white text-xs z-10 whitespace-nowrap">
        <div class="flex flex-row font-bold text-gray-300 justify-start w-full items-center w-4/5">
            <img src="../assets/gitlab.png" class="w-10 h-10 ml-3 p-2 cursor-pointer rounded"/>
            <img src="../assets/search.png" class="w-8 h-8 p-2 md:hidden cursor-pointer m-1 hover:bg-gray-100/25 active:bg-gray-100/50 rounded" />
            <div class="flex flex-row font-bold text-gray-300 items-center w-4/5 hidden md:flex">
                <div class="ml-3 p-2 hover:bg-gray-100/25 active:bg-gray-100/50 cursor-pointer rounded">
                About Gitlab
            </div>
            
            <div class="ml-3 p-2 hover:bg-gray-100/25 active:bg-gray-100/50 cursor-pointer rounded">
                Pricing
            </div>
            <div class="ml-3 p-2 hover:bg-gray-100/25 active:bg-gray-100/50 cursor-pointer rounded">
                Talk to an expert
            </div>
            <input
                class="transition-all duration-150 ease-in-out md:w-2/5 w-1/3 focus:w-3/5 focus:bg-white bg-gray-400/25 hover:bg-gray-100/25 border-1 border-gray-200/50 border p-2 ml-10 rounded outline-0"
                placeholder="Search Gitlab" />
            </div>
        </div>
        <div class="flex flex-row justify-end items-center w-1/5">
            <img src="../assets/question.png"
                class="w-9 h-9 text-white ml-3 p-2 hover:bg-gray-100/25 active:bg-gray-100/50 cursor-pointer rounded hidden sm:block" />
            <img src="../assets/more.png" class="w-9 h-9 text-white ml-3 p-2 hover:bg-gray-100/25 active:bg-gray-100/50 cursor-pointer rounded block" />
            <div
                class="bg-white text-black p-2 ml-3 rounded hover:bg-gray-100/25 active:bg-gray-100/50 hover:text-white hover:border-white border cursor-pointer hidden sm:block">
                Register
            </div>
            <div class="cursor-pointer hover:bg-gray-100/25 active:bg-gray-100/50 ml-3 p-2 rounded hidden sm:block">
                Sign in
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style></style>
