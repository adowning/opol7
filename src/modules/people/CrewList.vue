<template>
  <v-layout row wrap>
    <v-flex class="mt-5" xs10 offset-xs1 row>
      <v-expansion-panel popout>
        <v-expansion-panel-content
          v-for="(member, i) in members"
          :key="i"
          hide-actions
        >
          <v-layout
            slot="header"
            align-center
            row
            spacer
          >
            <v-flex xs4 sm2 md1 class="mr-4">
              <v-avatar
                slot="activator"
                size="64px"
              >
                <img
                  v-if="member.avatar"
                  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  alt="Avatar"
                >
              </v-avatar>
            </v-flex>

            <v-flex sm4 md2 >
              <strong v-html="member.name"></strong>
            </v-flex>
          </v-layout>

          <v-card>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat color="warning">Clock Out</v-btn>
              <v-btn flat color="warning">Make Lead</v-btn>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-btn class="mt-5" block color="secondary" dark>Add Employee</v-btn>

    </v-flex>

  </v-layout>
</template>

<template>
  <div>
    <!-- <li v-for="crewMember in crews"
			    :key="crewMember.userId">{{ crewMember.userId }}
				 <button @click="removeCrewMember(crewMember)"></button> 
			</li> -->
    <v-list >
      <v-list-tile v-for="item in crews" :key="item.userId" avatar @click="asdf()">
        <v-list-tile-avatar>
          <img :src="item.avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title :color="item.userId ? 'teal' : 'grey'" v-html="item.userId"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon v-if="item.lead" >supervisor_account</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>
<script>
	import { mapState, mapActions } from 'vuex'

  export default {
    data () {
      return {
        				text: '',
        items: [
          { active: true, title: 'Jason Oner', avatar: '/static/doc-images/lists/1.jpg' },
          { active: true, title: 'Ranee Carlson', avatar: '/static/doc-images/lists/2.jpg' },
          { title: 'Cindy Baker', avatar: '/static/doc-images/lists/3.jpg' },
          { supervisor: true, title: 'Ali Connors', avatar: '/static/doc-images/lists/4.jpg' }
        ],
      }
    },
        // computed: mapState(['crews']),
          computed: {
    ...mapState({
      crews: state => state.people.all,
      // convoIds: state => state.conversations.allIds
    })
  },
     created () {
       this.get()
  // this.$store.state.firestore().collection('crews').doc('08tQYGg0HaB2xCF6cP9x').onSnapshot(crewMember => {
  //     console.log(this.toString())
  //     console.log(crewMember)
  //     let source = crewMember.metadata.hasPendingWrites ? 'Local' : 'Server'

  //   console.log(`Source: ${source}`)
  //     this.$store.commit('people/SET_CREWMEMBER', crewMember)
  //     if (crewMember) {
  //       this.$store.commit('people/SET_CREWMEMBER', {crewMember: crewMember }) 
  //     }
  // })
},
		methods: mapActions(['addCrewMember', 'removeCrewMember']),
    methods:{
      get () {
    this.$store.dispatch('people/get')
  }
 		// async init() {
		// 	await this.$store.dispatch('people/fetchCrews');
		// 	// await this.$store.dispatch('fetchStudents', this.activeClassroom);
		// 	// await this.$store.dispatch('fetchAssignments', this.activeClassroom);
		// },
    },
 
  }
</script>
<style>
.theme--dark .card,
.application .theme--dark.card {
  background-color: #4b627b;
}
</style>