<template>
  <div class="ec-util">
    <ul v-if="!generated" class="list-group text-center">
      <li class="list-group-item">
        <div class="btn btn-sm btn-success" @click="getTestKeys">
          gen key pair
        </div>
      </li>
    </ul>
    <ul v-else class="list-group">
      <li class="list-group-item">
        Private:
        <div
          :class="{ 'btn btn-sm btn-outline-success': privateKey }"
          @click="copy(privateKey)"
        >
          {{ privateKey }}
        </div>
      </li>
      <li class="list-group-item">
        Public X:
        <div
          :class="{ 'btn btn-sm btn-outline-success': publicKeyX }"
          @click="copy(publicKeyX)"
        >
          {{ publicKeyX }}
        </div>
      </li>
    </ul>
    <div style="overflow: scroll">
      <br />
      Pedersen Hash:
      <div class="d-flex container-fluid">
        <input
          v-model="hash1"
          type="text"
          class="form-control formy my-3 mr-2 text-center shadow"
          placeholder="input 1..."
        />
        <input
          v-model="hash2"
          type="text"
          class="form-control formy my-3 ml-2 text-center shadow"
          placeholder="input 2..."
        />
      </div>
      <br />
      Hash Out:
      <div
        :class="{ 'btn btn-sm btn-outline-success': hashOut }"
        @click="copy(hashOut)"
      >
        {{ hashOut }}
      </div>
      <br />
      <br />
      Signature:
      <div class="d-flex container-fluid" style="align-items: center">
        <input
          v-model="hashData"
          type="text"
          class="form-control formy my-3 mr-2 text-center shadow"
          placeholder="data"
        />
        <input
          v-model="pk"
          type="text"
          class="form-control formy my-3 ml-2 text-center shadow"
          placeholder="private key"
        />
        <button
          class="ml-3 btn btn-sm btn-success"
          style="height: 2rem"
          @click="sig"
        >
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
      <br />
      Sig Out:
      <ul class="list-group">
        <li class="list-group-item">
          r:
          <div v-if="sigR" class="btn btn-sm btn-outline-success">
            {{ sigR }}
          </div>
        </li>
        <li class="list-group-item">
          s:
          <div v-if="sigS" class="btn btn-sm btn-outline-success">
            {{ sigS }}
          </div>
        </li>
      </ul>
      <br />
      Verify:
      <div class="d-flex container-fluid">
        <input
          v-model="hashData"
          type="text"
          class="form-control formy my-3 mr-2 text-center shadow"
          placeholder="data"
        />
        <input
          v-model="pubX"
          type="text"
          class="form-control formy my-3 ml-2 text-center shadow"
          placeholder="pub"
        />
      </div>
      <div class="d-flex container-fluid">
        <input
          v-model="sigR"
          type="text"
          class="form-control formy my-3 mr-2 text-center shadow"
          placeholder="sigR"
        />
        <input
          v-model="sigS"
          type="text"
          class="form-control formy my-3 ml-2 text-center shadow"
          placeholder="sigS"
        />
      </div>
      <div class="text-center">
        <div v-if="!sigChecked" class="btn btn-info" @click="checkSig">
          is_valid?
        </div>
        <div v-else>
          <div v-if="sigValid" class="btn btn-success" @click="checkSig">
            sig valid
          </div>
          <div v-else class="btn btn-danger" @click="checkSig">sig invalid</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { hash, ec } from "starknet";
import utils from "@/utils";

export default {
  data() {
    return {
      hash1: "",
      hash2: "",
      hashData: "",
      pk: "",
      pubX: "",
      sigR: "",
      sigS: "",
      sigValid: false,
      sigChecked: false,
      generated: false,
    };
  },
  computed: {
    ...mapGetters("stark", ["privateKey", "publicKeyX", "publicKeyY"]),
    hashOut() {
      const h1 = utils.toHex(this.hash1);
      const h2 = utils.toHex(this.hash2);
      const out = hash.pedersen([h1, h2]);
      return out;
    },
  },
  methods: {
    async copy(text) {
      await navigator.clipboard.writeText(text);
    },
    sig() {
      const keyPair = ec.getKeyPair(this.privateKey);
      const sig = ec.sign(keyPair, this.hashData);
      if (sig.length == 2) {
        this.sigR = sig[0].toString();
        this.sigS = sig[1].toString();
      }
    },
    async checkSig() {
      const resp = await fetch(
        "https://anon.jibe.buzz/v1/ycoordinate/" + this.pubX
      );
      if (resp.ok) {
        const responseData = await resp.json();
        let keyPair = ec.ec.keyFromPublic({
          x: utils.toBN(this.pubX),
          y: utils.toBN(responseData.message),
        });
        this.sigValid = ec.verify(keyPair, this.hashData, [
          this.sigR,
          this.sigS,
        ]);
        if (!this.sigValid) {
          keyPair = ec.ec.keyFromPublic({
            x: utils.toBN(this.pubX),
            y: utils.toBN(responseData.message2),
          });
          this.sigValid = ec.verify(keyPair, this.hashData, [
            this.sigR,
            this.sigS,
          ]);
        }
      }

      this.sigChecked = true;
    },
    getTestKeys() {
      this.$store.dispatch("stark/getStarkKey");
      this.generated = true;
    },
  },
};
</script>
<style>
.ec-util {
  font-size: 0.8rem;
}
.list-group-item {
  float: left;
  overflow: scroll;
  font-size: 0.8rem;
}
</style>
