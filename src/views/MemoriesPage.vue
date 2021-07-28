<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <ion-list>
        <ion-item>Pya</ion-item>
        <ion-item>Andy</ion-item>
        <ion-item>Marlon</ion-item>
        <ion-item>Eduardo</ion-item>
        <ion-item>David</ion-item>
        <ion-item>Daniel</ion-item>
        <ion-item>Carlos</ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MemoriesPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem
  }
});
</script>

<style scoped>

</style>