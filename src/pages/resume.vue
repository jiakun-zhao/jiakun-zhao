<script lang="ts" setup>
import { useElementSize, useWindowSize } from '@vueuse/core'
import { computed, ref } from 'vue'
import { mail, mail_url, resume_avatar_src } from '~/assets/static.json'

const wrapper = ref<HTMLDivElement>()
const { width: wrapperWidth } = useElementSize(wrapper)
const { width: windowWidth } = useWindowSize()
const wrapperStyle = computed(() => {
    const scale = windowWidth.value / wrapperWidth.value
    return {
        transform: `scale(${scale < 1 ? scale : 1})`,
    }
})

const timeline = [{
    title: '自由职业',
    date: '2022.2 - 至今',
    desc: '',
    detail: [],
}, {
    title: '上海建工集团股份有限公司',
    date: '2020.8 - 2022.1',
    desc: '劳务 / 施工 / 设计',
    detail: ['现场管理 / 人员管理', '施工安排 / 对外交接'],
}, {
    title: '诸暨赵家锟图文设计工作室',
    date: '2019.7 - 2020.7',
    desc: '店主',
    detail: ['主 广告类业务', '副 淘宝 / 拼多多'],
}, {
    title: '杭州旅蛋网络科技有限公司',
    date: '2019.1 - 2019.6',
    desc: '平面设计师',
    detail: ['主 海报设计', '副 微信公众号内容编辑'],
}, {
    title: '浙江工业大学',
    date: '2016.2 - 2018.6',
    desc: '学生',
    detail: ['专科 / 电子商务', '参加绍兴市单片机比赛'],
}]

const stacks = [{
    name: '设计类',
    items: ['PS', 'Pr', 'Ai', 'CAD', 'Figma', '剪映'],
}, {
    name: '开发类',
    items: ['TypeScript', 'Vue', '微信小程序', 'React', 'Kotlin'],
}]
</script>

<template>
    <div ref="wrapper" class="wrapper" leading-none w-8.3in h-11.7in font-mono relative text-.15in bg="#f6f2eb" text-primary box-border mx-auto overflow-hidden print:transform="none!" :style="wrapperStyle">
        <div class="item" mt-.8in>
            <div class="left">
                <div text-black font-bold text-.3in>赵 家锟</div>
                <a block mt-.5in underline-dashed underline :href="mail_url" target="_blank">{{ mail }}</a>
                <div mt-.2in tracking-.015in>简约风格的平面设计师 / 保持学习的前端开发者</div>
            </div>
            <div class="right">
                <img w-1.5in h-1.5in block :src="resume_avatar_src" alt="avatar" />
            </div>
        </div>

        <div class="item" my-.4in>
            <div class="left text-#bfa16e" text-.24in tracking-.015in font-bold>履历</div>
            <div class="right"></div>
        </div>

        <div v-for="(item, idx) of timeline" :key="idx" class="item" mt-.1in>
            <div class="left" mb-.2in>
                <div tracking-.015in text-black font-bold mb-.2in>{{ item.title }}</div>
                <div v-for="i of item.detail" :key="i" mt-.15in opacity-60>{{ i }}</div>
            </div>
            <div class="right">
                <div mb-.2in>{{ item.date }}</div>
                <div mt-.15in opacity-60>{{ item.desc }}</div>
            </div>
        </div>

        <div class="item" my-.3in>
            <div class="left text-#bfa16e" text-.24in tracking-.015in font-bold>技能点</div>
            <div class="right"></div>
        </div>

        <div v-for="(item, idx) of stacks" :key="idx" class="item" mb-.15in>
            <div class="left">
                <span v-for="i of item.items" :key="i" ml-.1in>{{ i }}</span>
            </div>
            <div class="right">{{ item.name }}</div>
        </div>

        <div absolute opacity-30 bottom-0 left-0 right-0 text-center print:display-none text-.1in pb-.2in>
            使用浏览器打印功能获取PDF版本: 取消页眉页脚, A4, 无边距, 纵向打印, 出现分页请设置缩放; 最后更新于 2023-02-21 03:35;
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    transform-origin: top left;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    color-adjust: exact;
}

.item {
    display: flex;
    width: 92%;
    margin-left: auto;
    margin-right: auto;
}

.item .left {
    flex: 1;
    text-align: right;
}

.item .right {
    width: 32%;
    margin-left: 0.4in;
}
</style>
