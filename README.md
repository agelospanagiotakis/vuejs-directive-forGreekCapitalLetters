# VueJs directive to Remove accent from greek capital letters
# Aφαίρεση τονισμού απο ελληνικά κεφαλαία γράμματα

> a vuejs directive for removing accent from Greek Capital Letters

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## To remove the accent from capitals for a parragraph just use a directive
```
 v-removegreekaccent  
```
for example use it in any element like this
```
<div  v-removegreekaccent>
ΜΊΑ ΠΑΡΆΓΡΑΦΟς ΜΕ ΚΕΦΑΛΑΊΑ ΣΤΑ ΟΠΟΊΑ ΟΙ ΤΌΝΟΙ ΘΑ ΠΡΈΠΕΙ ΝΑ ΑΦΑΙΡΕΘΟΎΝ
</div>
```
and the text will be converted to
```
ΜΙΑ ΠΑΡΑΓΡΑΦΟΣ ΜΕ ΚΕΦΑΛΑΙΑ ΣΤΑ ΟΠΟΙΑ ΟΙ ΤΟΝΟΙ ΘΑ ΠΡΕΠΕΙ ΝΑ ΑΦΑΙΡΕΘΟΥΝ
```



For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
