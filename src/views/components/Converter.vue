<template>
  <div>
    <input v-model="input" type="text" class="form-control formy mt-2 mb-4 text-center shadow" placeholder="input..." />
    <div>
      <ul class="list-group mb-4">
        <SimpleCopyComponent :dataBag="outBNComp" title="felt:" />
        <SimpleCopyComponent :dataBag="outHexComp" title="hex:" />
        <SimpleCopyComponent :dataBag="outStringComp" title="string:" />
        <ComplexCopyComponent :dataBag="outSelectorComp" title="selector:" hasHexSelector=true />

        <li class="list-group-item handleOverflow">
          uint256<small>(low high)</small>:
          <Toggle v-model="twoFiddyHex" onLabel="hex" offLabel="dec" class="float-right" />
          <br /><br />
          <div v-if="twoFiddyHex">
            <CopyComponent :valueToCopy=out256Comp.hex.low :isValid=out256Comp.valid :inFormat=true
              showIf="out256Comp.hex.low" />
            <CopyComponent :valueToCopy=out256Comp.hex.high :isValid=out256Comp.valid :inFormat=true
              showIf="out256Comp.hex.high" />
          </div>
          <div v-else>
            <CopyComponent :valueToCopy=out256Comp.val.low :isValid=out256Comp.valid :inFormat=true
              showIf="out256Comp.val.low" />
            <CopyComponent :valueToCopy=out256Comp.val.high :isValid=out256Comp.valid :inFormat=true
              showIf="out256Comp.val.high" />
          </div>
        </li>

        <li class="list-group-item handleOverflow">
          Big3<small>(d0 d1 d2)</small>:
          <Toggle v-model="bigThreeHex" onLabel="hex" offLabel="dec" class="float-right" />
          <br /><br />
          <div v-if="bigThreeHex">
            <CopyComponent :valueToCopy=outBig3.hex.D0 :isValid=outBig3.valid :inFormat=true :showIf="outBig3.hex.D0" />
            <br />
            <CopyComponent :valueToCopy=outBig3.hex.D1 :isValid=outBig3.valid :inFormat=true showIf="outBig3.hex.D1" />
            <br />
            <CopyComponent :valueToCopy=outBig3.hex.D2 :isValid=outBig3.valid :inFormat=true showIf="outBig3.hex.D2" />
          </div>
          <div v-else>
            <CopyComponent :valueToCopy=outBig3.val.D0 :isValid=outBig3.valid :inFormat=true showIf="outBig3.val.D0" />
            <br />
            <CopyComponent :valueToCopy=outBig3.val.D1 :isValid=outBig3.valid :inFormat=true showIf="outBig3.val.D1" />
            <br />
            <CopyComponent :valueToCopy=outBig3.val.D2 :isValid=outBig3.valid :inFormat=true showIf="outBig3.val.D2" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import SimpleCopyComponent from "./SimpleCopyComponent";
import ComplexCopyComponent from "./ComplexCopyComponent";
import CopyComponent from "./CopyComponent.vue";
import Toggle from "@vueform/toggle";
import utils from "@/utils";
import BN from "bn.js";

export default {
  components: {
    Toggle,
    SimpleCopyComponent,
    ComplexCopyComponent,
    CopyComponent
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
      const valid = this.isLessThanMaxVal(test);
      return { val, valid, inFmt };
    },
    outHexComp() {
      const val = utils.toHex(this.input);
      const inFmt = this.input.startsWith("0x") && utils.isHex(utils.removeHexPrefix(this.input));
      const test = new BN(utils.toBN(val));
      const valid = this.isLessThanMaxVal(test);
      return { val, valid, inFmt };
    },
    outStringComp() {
      const hex = utils.toHex(this.input).slice(2);
      const val = hex.length == 0 ? "" : Buffer.from(hex, 'hex');
      const inFmt = utils.isDecimal(this.input);
      const test = new BN(val);
      const valid = this.isLessThanMaxVal(test);
      return { val, valid, inFmt };
    },
    outSelectorComp() {
      const val = utils.toSelector(this.input);
      const inFmt = !utils.isDecimal(this.input) && !utils.isHex("0x");
      const test = new BN(utils.toBN(val.inty));
      const valid = this.isLessThanMaxVal(test);
      return { val, valid, inFmt };
    },
    out256Comp() {
      const val256 = utils.to256(this.input);
      const val = { low: val256.low.toString(), high: val256.high.toString() }
      const hex = { low: utils.addHexPrefix(val.low.toString(16)), high: utils.addHexPrefix(val.high.toString(16)) }
      const test = new BN(val.high);
      const valid = this.isLessThanMaxValHigh(test);
      return { val, hex, valid };
    },
    outBig3() {
      const valBig3 = utils.toBig3(this.input);
      const val = {
        D0: valBig3.D0.toString(),
        D1: valBig3.D1.toString(),
        D2: valBig3.D2.toString(),
      };
      const hex = {
        D0: utils.addHexPrefix(valBig3.D0.toString(16)),
        D1: utils.addHexPrefix(valBig3.D1.toString(16)),
        D2: utils.addHexPrefix(valBig3.D2.toString(16)),
      };
      const test = new BN(valBig3.D2);
      const valid = this.isLessThanMaxValD2(test);
      return { val, hex, valid };
    },
  },
  methods: {
    async copy(text) {
      await navigator.clipboard.writeText(text);
    },
    isLessThanMaxVal(input) {
      return input.lte(this.MAX_VAL)
    },
    isLessThanMaxValHigh(input) {
      return input.lte(this.MAX_VAL_HIGH)
    },
    isLessThanMaxValD2(input) {
      return input.lte(this.MAX_VAL_D2)
    },
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
