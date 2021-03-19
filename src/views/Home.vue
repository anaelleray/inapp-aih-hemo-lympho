<template>
  <div class="home">
    <div class="main-categories">

      <div>
        <br />
        <h1 style="color: #69669b; font-size: 40px">
          Score hémopathie lymphoïde
        </h1>
        <br />
        <h2 style="font-size: 20px">
          List des principaux scores hémopathie lymphoïde
        </h2
        >
      </div>

      <div v-for="item in categories" :key="item.id">
          <div v-if="item.children.length > 0">
              <div :id="item.id" class="item" v-on:click="select(item.id)">
                  <div class="title-item">
                      <div>{{item.name}}</div> 
                      <div :id="'arrow-'+item.id" class="block-arrow">
                          <font-awsome-icon class="arrow" :icon="['fas','chevron-right']"/>
                      </div>
                  </div>
                  <div :id="'item-'+item.id" class="section-content">
                      <div v-for="subItem in item.children" :key="subItem.id" class="sous-item">
                          <router-link class="title-item" :to="'/score/'+subItem.slug"><div>{{subItem.name}}</div> <font-awsome-icon class="arrow" :icon="['fas','chevron-right']"/></router-link>
                      </div>
                  </div>
              </div>
          </div>
          <div v-else>
              <div :id="item.id" class="item">
                  <router-link class="title-item" :to="'/score/'+item.slug">
                      <div>{{item.name}}</div> 
                      <div :id="'arrow-'+item.id" class="block-arrow">
                          <font-awsome-icon class="arrow" :icon="['fas','chevron-right']"/>
                      </div>
                  </router-link>
              </div>
          </div>
        </div>
        
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "@/service/DataService";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      categories: [],
    };
  },

  methods: {
    select: function (id) {
      let b = document.getElementsByClassName(
        "selected"
      ) as HTMLCollectionOf<HTMLElement>;
      let a = document.getElementById("item-" + id);
      let r = document.getElementById("arrow-" + id);
      let ro = document.getElementsByClassName("arrow-rotate");
      if (a != b[0]) {
        setTimeout(() => {
          if (b[0]) {
            b[0].style.maxHeight = "0px";
            b[0].classList.remove("selected");
            if (ro[0]) {
              ro[0].classList.remove("arrow-rotate");
            }
          }

          a.style.maxHeight = a.scrollHeight + "px";
          a.classList.add("selected");
          r.classList.add("arrow-rotate");
        }, 250);
      } else {
        a.style.maxHeight = "0px";
        a.classList.remove("selected");
        r.classList.remove("arrow-rotate");
      }
    },
  },

  mounted() {
    DataService.load()
      .then(() => {
        this.categories = DataService.$data.tree;
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>

<style >
.item {
  color: #69669b;
  background-color: #f1f1f6;
  margin: 20px;
  border-bottom: 0px solid #1c6ea4;
  border-radius: 0px 0px 20px 20px;
  -webkit-box-shadow: 0px 6px 13px -1px rgba(0, 0, 0, 0.75);
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 6px 15px -12px rgba(0, 0, 0, 0.75);
  padding: 20px;
}

.arrow {
  font-size: 20px;
}

.arrow-rotate {
  transform: rotate(90deg);
}

.block-arrow {
  background-color: #69669b;
  color: #ffffff !important ;
  border-radius: 10px 10px 10px 10px;
  align-items: center;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
}

    .title-item{
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        align-items: center;
        font-size: 15px;
        text-align: left;
    }

.sous-item {
  background-color: #69669b;
  margin-top: 15px;
  padding: 15px;
  color: #ffffff !important ;
  border-radius: 10px 10px 10px 10px;
}

    a{
        color: #69669b;
        text-decoration: none;
    }

    .sous-item a {
        color: white; /*par exemple*/
    }

    .section-content {
        overflow :hidden;
        height: auto;
        max-height: 0px;
        transition: max-height 0.5s ease-in;
    }

    .main-categories{
        overflow-y: scroll;
        position: absolute;
        height: 100%;
        width: 100%; 
        margin-bottom: 200px; 
    }
</style>
