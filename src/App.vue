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

    .v-popover {
        display: inline;
    }

    .v-popover:hover {
        cursor: pointer;
    }

    .tooltip {
        display: block !important;
        z-index: 10000;
    }

    .tooltip .tooltip-inner {
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

    .tooltip .tooltip-arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 5px;
        border-color: black;
    }

    .tooltip[x-placement^="top"] {
        margin-bottom: 5px;
    }

    .tooltip[x-placement^="top"] .tooltip-arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .tooltip[x-placement^="bottom"] {
        margin-top: 5px;
    }

    .tooltip[x-placement^="bottom"] .tooltip-arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .tooltip[x-placement^="right"] {
        margin-left: 5px;
    }

    .tooltip[x-placement^="right"] .tooltip-arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .tooltip[x-placement^="left"] {
        margin-right: 5px;
    }

    .tooltip[x-placement^="left"] .tooltip-arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .tooltip[aria-hidden='true'] {
        visibility: hidden;
        opacity: 0;
        transition: opacity .15s, visibility .15s;
    }

    .tooltip[aria-hidden='false'] {
        visibility: visible;
        opacity: 1;
        transition: opacity .15s;
    }
</style>
