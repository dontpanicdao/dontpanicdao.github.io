<template>
  <div>
    <input v-model="input" type="text" class="form-control formy mt-2 mb-4 text-center shadow" placeholder="input..." />
    <div>
      <ul class="list-group mb-4">
        <SimpleCopySelector :inputFunction="outBNComp" title="felt:" />
        <SimpleCopySelector :inputFunction="outHexComp" title="hex:" />
        <SimpleCopySelector :inputFunction="outStringComp" title="string:" />
        <ComplexCopySelector :inputFunction="outSelectorComp" title="selector:" />
        <li class="list-group-item handleOverflow">
          uint256<small>(low high)</small>:
          <Toggle v-model="twoFiddyHex" onLabel="hex" offLabel="dec" class="float-right" />
          <br /><br />
          <div v-if="twoFiddyHex">
            <div v-if="out256Comp.hex.low" :class="[
              out256Comp.valid
                ? 'btn btn-sm btn-outline-success'
                : 'btn btn-sm btn-outline-danger',
            ]" @click="copy(out256Comp.hex.low)">
              {{ out256Comp.hex.low }}
            </div>
            <div v-if="out256Comp.hex.high" :class="[
              out256Comp.valid
                ? 'btn btn-sm btn-outline-success'
                : 'btn btn-sm btn-outline-danger',
            ]" @click="copy(out256Comp.hex.high)">
              {{ out256Comp.hex.high }}
            </div>
          </div>
          <div v-else>
            <div v-if="out256Comp.val.low" :class="[
              out256Comp.valid
                ? 'btn btn-sm btn-outline-success'
                : 'btn btn-sm btn-outline-danger',
            ]" @click="copy(out256Comp.val.low)">
              {{ out256Comp.val.low }}
            </div>
            <div v-if="out256Comp.val.high" :class="[
              out256Comp.valid
                ? 'btn btn-sm btn-outline-success'
                : 'btn btn-sm btn-outline-danger',
            ]" @click="copy(out256Comp.val.high)">
              {{ out256Comp.val.high }}
            </div>
          </div>
        </li>
        <li class="list-group-item handleOverflow">
          Big3<small>(d0 d1 d2)</small>:
          <Toggle v-model="bigThreeHex" onLabel="hex" offLabel="dec" class="float-right" />
          <br /><br />
          <div v-if="bigThreeHex">
            <div v-if="outBig3.hex.D0" :class="[
              outBig3.valid
                ? 'btn btn-sm btn-outline-success'
                : 'btn btn-sm btn-outline-danger',
            ]" @click="copy(outBig3.hex.D0)">
              {{ outBig3.hex.D0 }}
            </div>
            <br />
            <div v-if="outBig3.hex.D1" :class="[
              outBig3.valid
                ? 'btn btn-sm btn-outline-success'
                : 'btn btn-sm btn-outline-danger',
            ]" @click="copy(outBig3.hex.D1)">
              {{ outBig3.hex.D1 }}
            </div>
            <br />
            <div v-if="outBig3.hex.D2" :class="[
              outBig3.valid
                ? 'btn btn-sm btn-outline-success'
                : 'btn btn-sm btn-outline-danger',
            ]" @click="copy(outBig3.hex.D2)">
              {{ outBig3.hex.D2 }}
            </div>
          </div>
          <div v-else>
            <div v-if="outBig3.val.D0" :class="[
              outBig3.valid
                ? 'btn btn-sm btn-outline-success'
                : 'btn btn-sm btn-outline-danger',
            ]" @click="copy(outBig3.val.D0)">
              {{ outBig3.val.D0 }}
            </div>
            <br />
            <div v-if="outBig3.val.D1" :class="[
              outBig3.valid
                ? 'btn btn-sm btn-outline-success'
                : 'btn btn-sm btn-outline-danger',
            ]" @click="copy(outBig3.val.D1)">
              {{ outBig3.val.D1 }}
            </div>
            <br />
            <div v-if="outBig3.val.D2" :class="[
              outBig3.valid
                ? 'btn btn-sm btn-outline-success'
                : 'btn btn-sm btn-outline-danger',
            ]" @click="copy(outBig3.val.D2)">
              {{ outBig3.val.D2 }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import SimpleCopySelector from "./SimpleCopySelector";
import ComplexCopySelector from "./ComplexCopySelector";
import Toggle from "@vueform/toggle";
import utils from "@/utils";
import BN from "bn.js";

export default {
  components: {
    Toggle,
    SimpleCopySelector,
    ComplexCopySelector
  },
  data() {
    return {
      twoFiddyHex: false,
      bigThreeHex: false,
      input: "",
      MAX_VAL: new BN(
        "3618502788666131106986593281521497120414687020801267626233049500247285301248",
        10
      ),
      MAX_VAL_HIGH: new BN("340282366920938463463374607431768211456", 10),
      MAX_VAL_D2: new BN("79228162514264337593543950336", 10),
    };
  },
  computed: {
    outBNComp() {
      const val = utils.toBN(this.input).toString(10);
      const inFmt = utils.isDecimal(this.input)
      const test = new BN(val);
      const valid = this.isValid(test);
      return { val, valid, inFmt };
    },
    outHexComp() {
      const val = utils.toHex(this.input);
      const inFmt = this.input.startsWith("0x") && utils.isHex(utils.removeHexPrefix(this.input));
      const test = new BN(utils.toBN(val));
      const valid = this.isValid(test);
      return { val, valid, inFmt };
    },
    outStringComp() {
      const hex = utils.toHex(this.input).slice(2);
      let val = hex.length == 0 ? "" : Buffer.from(hex, 'hex');
      let inFmt = utils.isDecimal(this.input);
      const test = new BN(utils.toBN(hex));
      const valid = this.isValid(test);
      return { val, valid, inFmt };
    },
    outSelectorComp() {
      const val = utils.toSelector(this.input);
      let inFmt = utils.isDecimal(!utils.isDecimal(this.input) && !utils.isHex("0x"));
      const test = new BN(utils.toBN(val.inty));
      const valid = this.isValid(test);
      return { val, valid, inFmt };
    },
    out256Comp() {
      const val = utils.to256(this.input);
      let data = {
        val: { low: val.low.toString(), high: val.high.toString() },
        hex: {
          low: utils.addHexPrefix(val.low.toString(16)),
          high: utils.addHexPrefix(val.high.toString(16)),
        },
        valid: true,
      };
      const test = new BN(val.high);
      if (test.gte(this.MAX_VAL_HIGH)) {
        data.valid = false;
      }
      return data;
    },
    outBig3() {
      const val = utils.toBig3(this.input);
      let data = {
        val: {
          D0: val.D0.toString(),
          D1: val.D1.toString(),
          D2: val.D2.toString(),
        },
        hex: {
          D0: utils.addHexPrefix(val.D0.toString(16)),
          D1: utils.addHexPrefix(val.D1.toString(16)),
          D2: utils.addHexPrefix(val.D2.toString(16)),
        },
        valid: true,
      };
      const test = new BN(val.D2);
      if (test.gte(this.MAX_VAL_D2)) {
        data.valid = false;
      }
      return data;
    },
  },
  methods: {
    async copy(text) {
      await navigator.clipboard.writeText(text);
    },
    isValid(input) {
      return input.lte(this.MAX_VAL)
    }
  },
};
</script>
<style scoped>
.list-group-item {
  overflow-x: auto;
  overflow-y: hidden;
}

.list-group-item .btn {
  font-size: 0.8rem;
}
</style>
