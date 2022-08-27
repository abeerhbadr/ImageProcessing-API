# Udacity Image Processing API 

### npm-run Scripts

- `eslint` `npm run lint`
- `prettier` `npm run prettier`
- `test` `npm run test`
- `production` `npm run start`
- `build` `npm run build`

### Project Structure and Project Tree

Some Description of the folders
- `assets` Images to be processed by the API
- `spec` Jasmine Configuration
- `controllers` API Handlers
- `routes` API Routers

```
+---assets
   ---images
       ---full
+---spec
   ---support    
---src
       index.ts
    
    +---controllers    
    +---middleware
    +---routes
       ---api
               
    +---tests         
  ```
  
  ### API Endpoint
  Endpoint `apiimagesimagewidth=&height=`
  - `image` image filename.
  - `width` width to resize the image to.
  - `height` height to resize the image to.
