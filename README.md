# Node myHttpGCF - Quick  http triggered google cloud function setup just because I can

## Google cloud function
The GCF is created in the index.js file and is just a standard google example.
The cloud functions name is: `helloHttp`.

## Local development
https://cloud.google.com/functions/docs/running/function-frameworks  
This cloud function can be used locally by running `npm run dev` in your terminal.

## Creating your own http function
https://cloud.google.com/functions/docs/writing/http  
When you want to create own function you can do the following steps in your terminal:

- `mkdir myGcf && cd myGcf`
- `npm init`
- `npm install --save-dev @google-cloud/functions-framework`

Then in the package.json put this in your script:  
`"dev": "npx functions-framework --target=YOUR_FUNCTION_NAME [--signature-type=YOUR_SIGNATURE_TYPE]"`

## MANUALLY deploying your function to the Google Cloud Project
https://cloud.google.com/functions/docs/deploying/filesystem  
Make sure your gcloud project is set to the project you want to deploy to.  
Get current project: `gcloud config get-value project`  
To list the available projects: `gcloud projects list`  
To set the project you need: `gcloud config set project <PROJECT_ID>`  

#### deploy command for http trigger function
`gcloud functions deploy helloHttp --entry-point helloHttp --runtime node12 --trigger-http --allow-unauthenticated`
