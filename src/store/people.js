// import * as store from './store'
import firebase from './firebase'
// console.log(store)
const db = firebase.firestore()

// const crews = db.collection('crews')

const state = {
  all: [],
  crews: [],
  allIds: [],
  // geofire: geofire,
}
// Getting Real time feeds

const mutations = {
  // watchCrews(state, crews) {
  //   state.crews = crews
  // },
  // //TODO maybe mark this offline insitead of deleting
  // removeCrewMember(state, userId) {
  //   state.crews.indexOf(userId.toString()).status = offline
  //   // cm.status = offline;
  // },

  SET_CREWMEMBER(state, { crewMember }) {
    // const data = crewMember.data()
    const now = new Date()
    // console.log(crewMember.data)
    console.log(crewMember.data().member.userId)

    // if (crewMember.data().member !== 'undefined') {
    //   console.log(crewMember.data().member.deviceId)
    // } else {
    //   console.log(crewMember.data().member)
    // }
    state.all = {
      ...state.all,
      [crewMember.id]: {
        // lat: crewMember.data().member.lat,
        // lng: crewMember.data().member.lng,
        userId: crewMember.data().member.userId,
        deviceId: crewMember.data().member.deviceId,
        createdAt: now.toString(),
        online: true,
        clockedIn: true,
      },
    }
    state.allIds.push(crewMember.id)
  },
}

const actions = {
  async get({ commit, rootState }) {
    // let crewRef = rootState.db.collection('crews')
    let crewRef = db.collection('crews')
    let crews = await crewRef.get()
    // console.log(crewMember)
    crews.forEach(crewMember => commit('SET_CREWMEMBER', { crewMember }))
  },

  // watchCrews({ commit }) {
  //   crews.onSnapshot(querySnapshot => {
  //     const crewList = []
  //     querySnapshot.forEach(doc => {
  //       crewList.push({ id: doc.id, ...doc.data() })
  //     })
  //     commit('watchCrews', crewList)
  //   })
  // },
  // addCrewMember({ commit }, crewMember) {
  //   people.addCrewMember(crewMember)
  // },
  // removeCrewMember({ commit }, userId) {
  //   people.removeCrewMember(userId)
  //   commit('removeCrewMember', userId)
  // },
}
const getters = {
  // fetchCrewMembers: () => {
  //   return state.crews
  // },
  // addCrewMember: user => {
  //   return crews.add({ user })
  // },
  // removeCrewMember: id => {
  //   return crews.doc(id).delete()
  // },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

// import Vue from 'vue'
// import Vuex from 'vuex'

// // import actions from './actions'
// // import mutations from './mutations'
// // import getters from './getters'

// Vue.use(Vuex)

// const state = {
//   crewMembers: [],
//   // user: {
//   //   name: 'John Dowe',
//   //   date: '17 Sep 2017',
//   //   stars: 5,
//   //   languages: [
//   //     { title: 'Arabic', level: 'Fluent' },
//   //     { title: 'English', level: 'Fluent' },
//   //     { title: 'French', level: 'Basics' },
//   //     { title: 'Italian', level: 'native' },
//   //   ],
//   //   address: {
//   //     country: 'spain',
//   //     city: 'valencia',
//   //     postal: '104-2336 A',
//   //   },
//   //   works: [
//   //     {
//   //       title: 'Demo title, work one',
//   //       headline: 'Jul 27 - Present',
//   //       description: 'lorem ipsum dolor, hajit ipto valar',
//   //       status: 'in progress',
//   //       rate: { time: '40hrs', rate: '30$/month', earned: '1230$' },
//   //     },
//   //     {
//   //       title: 'Demo title, work one',
//   //       headline: 'Jul 27',
//   //       description: '',
//   //       status: 'in progress',
//   //       rate: { time: '10hrs', rate: '70$/month', earned: '70$' },
//   //     },
//   //   ],
//   //   about:
//   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac mattis arcu, a luctus nibh. Etiam est risus, porta sed vestibulum vitae, tincidunt in neque. In eu pellentesque lectus. Suspendisse semper orci eu dolor tincidunt, nec rhoncus mi luctus. Aenean hendrerit, urna faucibus accumsan ultricies, felis quam aliquam ligula, sed bibendum risus massa id sem. Sed sollicitudin elit risus, sed bibendum odio gravida vitae.',
//   // },
// }
// const getters = {
//   getUser: state => {
//     return state.crewMembers
//   },
// }
// const mutations = {
//   setCrewMembers: (state, crewMembers) => {
//     state.crewMembers = crewMembers
//   },
// }
// const actions = {
//   fetchCrewMembers({ commit }) {
//     firebase
//       .database()
//       .ref('crews')
//       .on('value', function (data) {
//         const obj = data.val();
//         const students = Object.keys(obj || {}).map(key => ({
//           id: key,
//           CrewMemberName: obj[key].DisplayName,
//         }));
//         commit('setStudents', students);
//       });
//   },
// }

// export default {
//   namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations,
// }
