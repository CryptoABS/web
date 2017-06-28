<template>
  <v-footer>
      <div class="container" slot="content">
          <div class="row">
              <div class="col l6 s12">
                  <h5 class="white-text">Footer Content</h5>
                  <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                  <h5 class="white-text">Links</h5>
                  <ul>
                      <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                      <li><a class="grey-text text-lighten-3" href="#!">Twitter</a></li>
                      <li><a class="grey-text text-lighten-3" href="#!">Slack</a></li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="container" slot="copyright">&copy; Copyright 2016 CryptoABS All rights reserved.</div>    
  </v-footer>
</template>
<style scoped>
  footer {
      background: black;
  }
  footer.page-footer {
    margin-top: 0; 
  }
</style>

