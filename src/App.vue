<template>
    <span id="app">
        <span v-if="layoutfromdiv == 'inline'">
            <BitSharesWidgetInlineVoting :workerid=workeridfromdiv :witnessid=witnessidfromdiv />
        </span>
        <div v-else>
            <BitSharesWidgetVoting :workerid=workeridfromdiv :witnessid=witnessidfromdiv :layout=layoutfromdiv />
        </div>
    </span>
</template>

<script>
    import BitSharesWidgetVoting from './components/BitSharesWidgetVoting'
    import BitSharesWidgetInlineVoting from './components/BitSharesWidgetInlineVoting'

    export default {
        name: 'bitshares-widget-voting',
        props: ['workeridfromdiv',
            'witnessidfromdiv',
            'layoutfromdiv'
        ],
        components: {
            BitSharesWidgetVoting,
            BitSharesWidgetInlineVoting
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .tooltip .tooltip-inner .button
    {
        border-radius: 15px;
        margin-top: 0.3em;
        margin-bottom: 0.3em;
        float: right;
    }

</style>
