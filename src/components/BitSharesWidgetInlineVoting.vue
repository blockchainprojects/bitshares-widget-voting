<template>
    <span class="widget-voting--inline">
        <div class="widget-voting--inline--text" v-on:click="showPopup">{{ text }}</div>
        <div class="widget-voting--popup" v-show="isPopupVisible">
            <div class="widget-voting--popup--content">
                <div class="title">
                    <a v-if="votingObject.object != null" :href="'http://bitshares-explorer.io/#/objects/' + votingObject.object.id" target="_blank">
                        {{ popUpText }}
                    </a>
                    <template v-else>
                        {{ popUpText }}
                    </template>
                </div>
                <div class="voting" v-if="votingObject != null">
                    <div v-if="!!votingObject.failed" class="done">Voting failed</div>
                    <div v-if="votingObject.voted" class="done">Voted &#10004;</div>
                    <template v-else>
                        <button v-if="beetFound" class="button" v-on:click="vote">Vote now</button>
                        <template v-else>
                            <div class="label">Beet was not found</div>
                            <button @click="goToBeet()" class="button">Install now</button>
                        </template>
                    </template>
                </div>
                <div class="copyright">
                    <BCPCopyright></BCPCopyright>
                </div>
            </div>
        </div>
    </span>
</template>

<script>
    import AbstractWidgetResolving from './AbstractWidgetResolving'
    import BCPCopyright from './BCPCopyright'

    export default {
        name: 'BitSharesWidgetInlineVoting',
        extends: AbstractWidgetResolving,
        components: {
            BCPCopyright
        },
        data() {
            return {
                text: this.innerHTML, // initialize with given text
                popUpText: "Loading ...",
                isPopupVisible: false,
                votingObject: null
            }
        },
        methods: {
            showPopup: function() {
                this.isPopupVisible = !this.isPopupVisible;
            },
            showVotingObject() {
                this.votingObject = this.objectIds[0];
                this.text = this.votingObject.text;
                console.log("before fail?")
                this.popUpText = this.votingObject.type + " " + this.votingObject.text + " (" + this.votingObject.object.id + ")";
            },
            onVotingObjectsUpdate: function() {
                this.showVotingObject();
            }
        }
    }
</script>

<style>
    .widget-voting--inline
    {
        color: #2c3e50;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

    .widget-voting--inline .widget-voting--popup--content
    {
        font-size:0.9em;
    }


    .widget-voting--inline--text {
        display: inline;
        position: relative;
    }

    .widget-voting--inline--text:hover {
        cursor: pointer;
    }

    .widget-voting--popup--content .voting {
        float: right;
        margin-top: 0.5em;
    }

    .widget-voting--popup--content .title {
    }

    .widget-voting--popup--content .copyright {
        float: left;
        margin-top: 2.5em;
    }

    .widget-voting--popup--content .voting .label {
        font-size: 0.7em;
        color: gray;
        vertical-align: middle;
    }

    .widget-voting--popup--content .button
    {
        border-radius: 15px;
    }


</style>
