<template>
    <div class="text-xs flex flex-row justify-between w-full h-22 rounded border-b-2 border-gray-100">
        <div class="flex-none flex items-center m-3 rounded-lg border-2 border-gray-100">
            <a :href="repoUrl"><img v-if="imgUrl" :src="imgUrl"
                    class="w-14 h-14 flex justify-center items-center rounded-lg" />
                <div v-else class="w-14 h-14 text-3xl flex justify-center items-center rounded-lg" :class="getColor">{{
                    getCharacter(nameSpace) }}</div>
            </a>
        </div>
        <div class="flex flex-col sm:flex-row grow justify-start">
            <div class="flex grow flex-col m-1 p-1">
                <div class="flex flex-start items-center">
                    <a class="text-base flex hover:underline" :href="repoUrl">
                        <div>{{ getPath(nameSpace) }}</div>
                        <div class="font-bold">{{ getName(nameSpace) }}</div>
                    </a>
                    <img class="w-4 h-4 m-1" src="../assets/public.png" alt="public">
                </div>
                <div class="">{{ discription }}</div>
            </div>
            <div class="flex flex-col justify-center items-start sm:items-end min-w-fit">
                <div class="flex flex-row">
                    <div class="flex flex-row items-center text-sm m-1 cursor-pointer"><img class="w-4 h-4 mx-2 m-1"
                            src="../assets/stars.png" />{{ stars }}</div>
                    <div class="hidden sm:flex flex-row items-center text-sm m-1 cursor-pointer"><img
                            class="w-4 h-4 mx-2 m-1" src="../assets/forks.png" />{{ forks }}</div>
                    <div class="hidden sm:flex flex-row items-center text-sm m-1 cursor-pointer"><img
                            class="w-4 h-4 mx-2 m-1" src="../assets/pull-request.png" />{{ pullRequest }}</div>
                    <div class="hidden sm:flex flex-row items-center text-sm m-1 cursor-pointer"><img
                            class="w-4 h-4 mx-2 m-1" src="../assets/issues.png" />{{ issues }}</div>
                </div>
                <div class="hidden sm:block">{{ lastUpdated }}</div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: ["nameSpace", "repoUrl", "imgUrl", "discription", "stars", "forks", "pullRequest", "issues", "lastUpdated"],
    methods: {
        getCharacter(text) {
            var without_space = []
            for (let index = 0; index < text.length; index++) {
                if (text[index] != " ") {
                    without_space.push(text[index])
                }
            }
            const split_name = without_space.join("").split("/")
            return split_name[split_name.length - 1][0].toUpperCase()
        }, getPath(name) {
            var slash_index = -1
            for (let index = 0; index < name.length; index++) {
                if (name[index] === "/") {
                    slash_index = index
                }
            }
            if (slash_index == -1) {
                return ""
            } else {
                return name.slice(0, slash_index + 1)
            }
        },
        getName(name) {
            var slash_index = -1
            for (let index = 0; index < name.length; index++) {
                if (name[index] === "/") {
                    slash_index = index
                }
            }
            if (slash_index == -1) {
                return name
            } else {
                return name.slice(slash_index + 1, name.length)
            }
        }
    },
    computed: {
        getColor() {
            var color = ["bg-"]
            const colors = ["red", "purple", "pink", "green", "blue", "yellow", "indigo", "emerald", "teal", "cyan", "sky", "violet", "fuchsia", "rose"]
            const scale = [100, 200, 300]
            color.push(colors[parseInt(Math.random() * (colors.length - 1))])
            color.push("-")
            color.push(scale[parseInt(Math.random() * (scale.length - 1))])
            return color.join("")
        },


    }
}
</script>
<style></style>