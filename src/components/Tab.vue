<template>
  <Transition name="scroll">
    <div style="height: 100%" v-show="title === selectedTab">
      <div class="tab-content">
        <template v-if="title === 'Search'">
          <h2>Search</h2>
          <div class="container-search">
            <i class="fa fa-search" aria-hidden="true" style="color: #cacaca;font-size: 18px;position: absolute;margin-left: 10px;margin-top: 13px"></i>
            <div class="search-bar" >
              <input type="search" v-model="searchQuery" placeholder="Search..." class="search" />
            </div>
          </div>
          <template v-if="!filteredList.length">
            <div class="no-results">
              <h3>No results found.</h3>
            </div>
          </template>
          <ul v-else style="list-style: none;padding: 0">
            <li v-for="( item, index ) in filteredList" :key="index" style="box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);padding: 15px;border-radius: 5px">
              <div class="list-item-content" style="vertical-align: top">
                <span class="question" @click="toggle_search(index)">
                  <template v-if="item['type'] === 'link'">
                    <a :href="item['item']['url']" target="_blank">
                      {{ item['item']['title'] }}
                    </a>
                  </template>
                  <template v-else-if="item['type'] === 'text'">
                    {{ item['item']['question'] }}
                  </template>
                  <template v-else>
                    {{ item['item']['title'] }}
                  </template>
                </span>
                <transition-collapse-height>
                  <div v-if="expanded_search === index" class="answer">
                    <template v-if="item['type'] === 'video'">
                      <iframe :src="item['item']['url']" width="560" height="315" allowfullscreen />
                    </template>
                    <template v-else-if="item['type'] === 'text'">
                      <template v-if="item['item']['id'] === 1 && item['tab'] === 'igms'">
                        Please refer to the <a @click="scrollMeTo('answer1')" style="color: #0072C6">Help for Principal Investigators guide</a> in the "Training Guides" section.
                      </template>
                      <div v-else-if="item['item']['id'] === 6 && item['tab'] === 'igms'" v-html="item['item']['answer']" />
                      <template v-else>
                        {{ item['item']['answer'] }}
                      </template>
                    </template>
                  </div>
                </transition-collapse-height>
              </div>
            </li>
          </ul>
        </template>
        <template v-else>
          <h2>{{ contents['heading'] }}</h2>
          <template v-if="title === 'Training Guides'">
            <div v-for="( content, index ) in contents['QA']" :key="index">
              <span class="subheading">{{ content['Subheading'] }}</span>
              <ol>
                <template v-if="content['id'] === 3">
                  <li v-for="( item, index ) in content['links']" :key="index" class="links" id="answer1">
                    <div class="list-item-content" style="vertical-align: top">
                      <span class="question">
                        <a :href="item['url']" target="_blank">{{ item['title'] }}</a>
                      </span>
                    </div>
                  </li>
                </template>
                <template v-else>
                  <li v-for="( video, index ) in content['videos']" :key="index" class="links">
                    <div class="list-item-content" style="vertical-align: top">
                      <span class="links" @click="toggleVideo(content['id'], video['id'])">{{ video['title'] }}</span>
                      <transition-collapse-height>
                        <div v-if="expandedVideoId === video['id'] && expandedVideoItemId === content['id']">
                          <iframe :src="video['url']" width="560" height="315" allowfullscreen />
                        </div>
                      </transition-collapse-height>
                    </div>
                  </li>
                </template>
              </ol>
            </div>
          </template>
          <template v-else-if="title === 'General Information on IGMS'">
            <ol>
              <li v-for="( content, index ) in contents['QA']" :key="index">
                <div class="list-item-content" style="vertical-align: top">
                  <span class="question" @click="toggle(content['id'])">{{ content['question'] }}</span>
                  <transition-collapse-height>
                    <template v-if="content['id'] === 6">
                      <div v-if="content['expanded']" class="answer" v-html="content['answer']"></div>
                    </template>
                    <template v-else-if="content['id'] === 1">
                      <div v-if="content['expanded']" class="answer">
                        Please refer to the <a @click="scrollMeTo('answer1')" style="color: #0072C6">Help for Principal Investigators guide</a> in the "Training Guides" section.
                      </div>
                    </template>
                    <template v-else>
                      <div v-if="content['expanded']" class="answer">{{ content['answer'] }}</div>
                    </template>
                  </transition-collapse-height>
                </div>
              </li>
            </ol>
          </template>
          <template v-else>
            <ol>
              <li v-for="( content, index ) in contents['QA']" :key="index">
                <div class="list-item-content" style="vertical-align: top">
                  <span class="question" @click="toggle(content['id'])">{{ content['question'] }}</span>
                  <transition-collapse-height>
                    <div v-if="content['expanded']" class="answer">{{ content['answer'] }}</div>
                  </transition-collapse-height>
                </div>
              </li>
            </ol>
          </template>
        </template>
      </div>
    </div>
  </Transition>
</template>

<script>
import TransitionCollapseHeight from './TransitionCollapseHeight'
import { inject } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tab",
  components: {
    TransitionCollapseHeight
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: Object,
      required: true,
    }
  },
  setup() {
    const selectedTab = inject("selectedTab");

    return {
      selectedTab,
    };
  },
  data() {
    return {
      expandedVideoId: null,
      expandedVideoItemId: null,
      searchQuery: "",
      expanded_search: null
    }
  },
  methods: {
    toggle(id) {
      const item = this.contents["QA"].find(item => item.id === id);
      item['expanded'] = !item['expanded'];
    },
    toggleVideo(itemId, videoId) {
      if (this.expandedVideoId === videoId && this.expandedVideoItemId === itemId) {
        this.expandedVideoId = this.expandedVideoItemId = null;
      } else {
        this.expandedVideoId = videoId;
        this.expandedVideoItemId = itemId;
      }
    },
    scrollMeTo(id) {
      this.selectedTab = "Training Guides";
      setTimeout(() => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    },
    toggle_search(index) {
      if (this.expanded_search === index) {
        this.expanded_search = null;
      } else {
        this.expanded_search = index;
      }
    }
  },
  computed: {
    filteredList() {
      const matches = [];

      this.contents['igms']['QA'].filter(item => {
        if(item.question.toLowerCase().includes(this.searchQuery.toLowerCase())){
          matches.push({ item: item, type: 'text', tab: 'igms' });
        }
      });

      this.contents['accounts']['QA'].filter(item => {
        if(item.question.toLowerCase().includes(this.searchQuery.toLowerCase())){
          matches.push({ item: item, type: 'text', tab: 'accounts' });
        }
      });

      this.contents['proposals']['QA'].filter(item => {
        if(item.question.toLowerCase().includes(this.searchQuery.toLowerCase())){
          matches.push({ item: item, type: 'text', tab: 'proposals' });
        }
      });

      this.contents['guides']['QA'].filter(item => {
        for (const video in item['videos']) {
          if(item['videos'][video].title.toLowerCase().includes(this.searchQuery.toLowerCase())){
            matches.push({ item: item['videos'][video], type: 'video', tab: 'guides' });
          }
        }
        for (const link in item['links']) {
          if(item['links'][link].title.toLowerCase().includes(this.searchQuery.toLowerCase())){
            matches.push({ item: item['links'][link], type: 'link', tab: 'guides' });
          }
        }
      });


      return(matches);
    }
  },
}
</script>

<style scoped>
.scroll-enter-from,
.scroll-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.scroll-enter-active,
.scroll-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.scroller {
  height: 100%;
}

input {
  background: #285ba3;
  padding: 15px 35px;
  border-radius: 5px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  color: #ffffff;
}

::placeholder{
  color: #cacaca;
}

.tab-content {
  padding: 10px 15px;
  /* box-shadow: 0 0 5px 0 rgba(0,0,0,0.2); */
}

span.subheading {
  margin-bottom: 10px;
  font-size: 22px;
  line-height: 1.6;
  word-wrap: break-word;
}

.answer {
  font-size: 14px;
  font-weight: normal;
  color: #505050;
  line-height: 1.6;
}

span:hover.links {
  color: #09548d;
  cursor: pointer;
  text-decoration: #09548d underline;
}

span:hover.question {
  color: #09548d;
  cursor: pointer;
  text-decoration: #09548d underline;
}

.list-item-content {
  display: inline-block;
}

li {
  margin: 10px 0;
  padding-bottom: 10px;
  color: #15156e;
}

li.links {
  padding-bottom: 10px;
  color: #0072c6;
}

h2 {
  margin: 0;
  line-height: 1.4;
  color: #0072C6;
  font-size: 30px;
  font-weight: 300;
  padding-bottom: 30px;
  font-family: "Segoe UI Semilight","Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif;
}
</style>