<template>
    <BitSharesWidgetInlineVoting v-if="layoutfromdiv == 'inline'" :workerid=workeridfromdiv :witnessid=witnessidfromdiv :committeeid=committeefromdiv :innerHTML=innerHTML />
    <BitSharesWidgetVoting v-else :workerid=workeridfromdiv :witnessid=witnessidfromdiv :layout=layoutfromdiv />
</template>

<script>
    import BitSharesWidgetVoting from './components/BitSharesWidgetVoting'
    import BitSharesWidgetInlineVoting from './components/BitSharesWidgetInlineVoting'

    export default {
        name: 'bitshares-widget-voting',
        props: [
            'workeridfromdiv',
            'witnessidfromdiv',
            'layoutfromdiv',
            'committeefromdiv',
            'innerHTML'
        ],
        components: {
            BitSharesWidgetVoting,
            BitSharesWidgetInlineVoting
        }
    }
</script>

<style>
</style>
