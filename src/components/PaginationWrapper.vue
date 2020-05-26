<template>
  <div class="text-center">
    <v-pagination
      :value.sync="page"
      @input="val => pageUpdate(val)"
      :length="length"
      :page.sync="page"
      :total-visible="totalVisible"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    totalVisible: 5
  }),
  props: {
    page: {
      type: Number,
      default: () => 1
    },
    total: {
      type: Number,
      default: () => 0
    },
    perPage: {
      type: Number,
      default: () => 10
    }
  },
  computed: {
    length(): number {
      if (this.total && this.perPage && this.total > this.perPage) {
        return Math.ceil(this.total / this.perPage);
      }
      return 0;
    }
  },
  methods: {
    pageUpdate(val: number) {
      this.$emit("pageUpdate", val);
    }
  }
});
</script>

<style lang="scss" scoped></style>
