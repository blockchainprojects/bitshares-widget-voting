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
    .widget-voting--popup {
        display: inline;
        position: absolute;
        min-width: 13em;
        border-bottom: 6px solid #000;
        border-width: thin;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.23);
        background: white;
        color: black;
        border-radius: 16px;
        padding: 5px 10px 4px;
        box-shadow: 5px 10px 18px rgba(25, 25, 25, 0.27);
        font-size:0.9em;
    }
</style>
